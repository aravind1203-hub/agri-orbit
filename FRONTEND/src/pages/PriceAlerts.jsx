import { useEffect, useState } from "react";

function PriceAlerts({
  farmer,
  onBackToDashboard,
}) {
  const [crop, setCrop] = useState("Tomato");
  const [targetPrice, setTargetPrice] = useState("");

  const [alerts, setAlerts] = useState([]);
  const [currentPrices, setCurrentPrices] = useState({});

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [deletingId, setDeletingId] = useState(null);
  const [error, setError] = useState("");

  /* =========================================================
     CROP IMAGE PATHS
  ========================================================= */

  const cropImages = {
    Tomato: "/image/Tomato.png",
    Onion: "/image/Onion.png",
    Potato: "/image/Potato.png",
    Brinjal: "/image/Brinjal.png",
    Cabbage: "/image/Cabbage.png",
    Banana: "/image/Banana.png",
  };

  /* =========================================================
     CROP IDs
  ========================================================= */

  const cropIds = {
    Tomato: 1,
    Onion: 2,
    Potato: 3,
    Brinjal: 4,
    Cabbage: 6,
    Banana: 7,
  };

  /* =========================================================
     GET FARMER ID
  ========================================================= */

  const farmerId =
    farmer?.farmer_id || farmer?.id;

  /* =========================================================
     LOAD PRICE ALERTS + CURRENT PRICES
  ========================================================= */

  useEffect(() => {
    if (!farmerId) {
      setError(
        "Farmer information not found. Please login again."
      );

      setLoading(false);
      return;
    }

    setLoading(true);
    setError("");

    Promise.all([
      fetch(
        `https://agri-orbit.onrender.com/api/price-alerts?farmer_id=${farmerId}`
      ),
      fetch(
        "https://agri-orbit.onrender.com/api/market-prices"
      ),
    ])
      .then(async ([alertsResponse, pricesResponse]) => {

        if (!alertsResponse.ok) {
          throw new Error(
            "Failed to load price alerts."
          );
        }

        if (!pricesResponse.ok) {
          throw new Error(
            "Failed to load market prices."
          );
        }

        const alertsData =
          await alertsResponse.json();

        const pricesData =
          await pricesResponse.json();

        return {
          alertsData,
          pricesData,
        };
      })
      .then(
        ({
          alertsData,
          pricesData,
        }) => {

          /* =================================================
             FORMAT CURRENT PRICES
          ================================================= */

          const priceMap = {};

          pricesData.forEach((item) => {

            const cropName = item.crop;

            if (
              !priceMap[cropName] ||
              Number(item.price_per_kg) >
                priceMap[cropName]
            ) {
              priceMap[cropName] =
                Number(item.price_per_kg);
            }

          });

          setCurrentPrices(priceMap);

          /* =================================================
             FORMAT ALERTS
          ================================================= */

          const formattedAlerts =
            alertsData.map((alert) => {

              const cropName =
                alert.crop ||
                alert.crop_name ||
                "Unknown Crop";

              const currentPrice =
                priceMap[cropName] || 0;

              const target =
                Number(alert.target_price || 0);

              return {
                id: alert.id,
                crop: cropName,
                target,
                current: currentPrice,
                status:
                  currentPrice >= target &&
                  target > 0
                    ? "Reached"
                    : "Waiting",
              };
            });

          setAlerts(formattedAlerts);
          setLoading(false);
        }
      )
      .catch((err) => {

        console.error(
          "Price Alerts API error:",
          err
        );

        setError(
          "Unable to load price alerts."
        );

        setLoading(false);
      });

  }, [farmerId]);


  /* =========================================================
     SET NEW PRICE ALERT
  ========================================================= */

  const handleSetAlert = async () => {

    if (!farmerId) {
      alert(
        "Farmer information not found. Please login again."
      );
      return;
    }

    if (
      !targetPrice ||
      Number(targetPrice) <= 0
    ) {
      alert(
        "Please enter a valid target price"
      );
      return;
    }

    const cropId = cropIds[crop];

    if (!cropId) {
      alert(
        "Crop information not available."
      );
      return;
    }

    setSaving(true);
    setError("");

    try {

      const response = await fetch(
        "https://agri-orbit.onrender.com/api/price-alerts",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            farmer_id: farmerId,
            crop_id: cropId,
            target_price_per_kg:
              Number(targetPrice),
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error ||
          "Unable to create price alert."
        );
      }

      alert(
        "Price alert created successfully!"
      );

      setTargetPrice("");

      /* Reload alerts */
      const alertsResponse =
        await fetch(
          `https://agri-orbit.onrender.com/api/price-alerts?farmer_id=${farmerId}`
        );

      if (!alertsResponse.ok) {
        throw new Error(
          "Alert created, but unable to refresh alerts."
        );
      }

      const alertsData =
        await alertsResponse.json();

      const formattedAlerts =
        alertsData.map((alert) => {

          const cropName =
            alert.crop ||
            alert.crop_name ||
            "Unknown Crop";

          const currentPrice =
            currentPrices[cropName] || 0;

          const target =
            Number(
              alert.target_price || 0
            );

          return {
            id: alert.id,
            crop: cropName,
            target,
            current: currentPrice,
            status:
              currentPrice >= target &&
              target > 0
                ? "Reached"
                : "Waiting",
          };
        });

      setAlerts(formattedAlerts);

    } catch (err) {

      console.error(
        "Create price alert error:",
        err
      );

      alert(
        err.message ||
        "Unable to create price alert."
      );

    } finally {
      setSaving(false);
    }
  };


  /* =========================================================
     DELETE PRICE ALERT
  ========================================================= */

  const handleDelete = async (alertId) => {

    if (!alertId) {
      return;
    }

    const confirmDelete =
      window.confirm(
        "Are you sure you want to delete this price alert?"
      );

    if (!confirmDelete) {
      return;
    }

    setDeletingId(alertId);

    try {

      const response =
        await fetch(
          `https://agri-orbit.onrender.com/api/price-alerts/${alertId}`,
          {
            method: "DELETE",
          }
        );

      const data =
        await response.json();

      if (!response.ok) {
        throw new Error(
          data.error ||
          "Unable to delete price alert."
        );
      }

      setAlerts(
        alerts.filter(
          (alert) =>
            alert.id !== alertId
        )
      );

      alert(
        "Price alert deleted successfully!"
      );

    } catch (err) {

      console.error(
        "Delete price alert error:",
        err
      );

      alert(
        err.message ||
        "Unable to delete price alert."
      );

    } finally {
      setDeletingId(null);
    }
  };


  /* =========================================================
     CURRENT SELECTED CROP PRICE
  ========================================================= */

  const selectedCurrentPrice =
    currentPrices[crop] || 0;


  /* =========================================================
     UI
  ========================================================= */

  return (
    <div className="price-alerts-page">

      {/* Header */}
      <header className="price-alerts-header">

        <div>
          <h1>
            AgriOrbit 🌱
          </h1>

          <p>
            Price Alerts
          </p>
        </div>

        <div className="profile-icon">
          👨‍🌾
        </div>

      </header>


      {/* Content */}
      <section className="price-alerts-content">

        <h2>
          🔔 Price Alerts
        </h2>

        <p className="price-alerts-subtitle">
          Get notified when your crop reaches
          your target price.
        </p>


        {/* =====================================================
            SET ALERT CARD
        ===================================================== */}

        <div className="price-alert-form-card">

          <h3>
            Set New Price Alert
          </h3>

          <div className="price-alert-form">

            {/* SELECT CROP */}
            <div className="alert-field">

              <label>
                Select Crop
              </label>

              <select
                value={crop}
                onChange={(e) =>
                  setCrop(e.target.value)
                }
              >
                <option>
                  Tomato
                </option>

                <option>
                  Onion
                </option>

                <option>
                  Potato
                </option>

                <option>
                  Brinjal
                </option>

                <option>
                  Cabbage
                </option>

                <option>
                  Banana
                </option>

              </select>

            </div>


            {/* CURRENT PRICE */}
            <div className="alert-field">

              <label>
                Current Price
              </label>

              <div className="current-price-box">
                ₹{selectedCurrentPrice} / KG
              </div>

            </div>


            {/* TARGET PRICE */}
            <div className="alert-field">

              <label>
                Target Price
              </label>

              <input
                type="number"
                min="1"
                placeholder="Enter target price"
                value={targetPrice}
                onChange={(e) =>
                  setTargetPrice(
                    e.target.value
                  )
                }
              />

            </div>


            {/* SET ALERT */}
            <button
              type="button"
              className="set-alert-button"
              onClick={handleSetAlert}
              disabled={saving}
            >
              {saving
                ? "Saving..."
                : "🔔 Set Alert"}
            </button>

          </div>

        </div>


        {/* =====================================================
            ACTIVE ALERTS
        ===================================================== */}

        <div className="active-alerts-section">

          <div className="active-alerts-title">

            <div>

              <h3>
                🔔 My Price Alerts
              </h3>

              <p>
                Track your selected crop prices
              </p>

            </div>

            <span className="alert-count">
              {alerts.length} Alerts
            </span>

          </div>


          {/* LOADING */}
          {loading && (

            <div className="no-buyers">

              <div>
                ⏳
              </div>

              <h3>
                Loading Price Alerts...
              </h3>

              <p>
                Please wait while we load your alerts.
              </p>

            </div>

          )}


          {/* ERROR */}
          {!loading && error && (

            <div className="no-buyers">

              <div>
                ⚠️
              </div>

              <h3>
                Unable to Load Price Alerts
              </h3>

              <p>
                {error}
              </p>

              <button
                type="button"
                onClick={() =>
                  window.location.reload()
                }
              >
                Try Again
              </button>

            </div>

          )}


          {/* ALERT LIST */}
          {!loading &&
            !error &&
            alerts.length > 0 && (

              <div className="alerts-list">

                {alerts.map(
                  (alert) => (

                    <div
                      className="price-alert-card"
                      key={alert.id}
                    >

                      {/* CROP IMAGE */}
                      <div className="alert-crop-icon">

                        <img
                          src={
                            cropImages[
                              alert.crop
                            ]
                          }
                          alt={
                            alert.crop
                          }
                          className="alert-crop-image"
                        />

                      </div>


                      {/* CROP INFO */}
                      <div className="alert-crop-info">

                        <h4>
                          {alert.crop}
                        </h4>

                        <p>
                          Target Price
                        </p>

                        <strong>
                          ₹
                          {alert.target.toFixed(
                            2
                          )} / KG
                        </strong>

                      </div>


                      {/* CURRENT PRICE */}
                      <div className="alert-current-price">

                        <span>
                          Current Price
                        </span>

                        <strong>
                          ₹
                          {alert.current.toFixed(
                            2
                          )} / KG
                        </strong>

                      </div>


                      {/* STATUS */}
                      <div className="alert-status">

                        <span>
                          {alert.status ===
                          "Reached"
                            ? "🟢 Reached"
                            : "🟡 Waiting"}
                        </span>

                      </div>


                      {/* DELETE */}
                      <button
                        type="button"
                        className="delete-alert-button"
                        onClick={() =>
                          handleDelete(
                            alert.id
                          )
                        }
                        disabled={
                          deletingId ===
                          alert.id
                        }
                      >
                        {deletingId ===
                        alert.id
                          ? "⏳"
                          : "🗑️"}
                      </button>

                    </div>

                  )
                )}

              </div>

            )}


          {/* NO ALERTS */}
          {!loading &&
            !error &&
            alerts.length === 0 && (

              <div className="no-buyers">

                <div>
                  🔔
                </div>

                <h3>
                  No Price Alerts
                </h3>

                <p>
                  Set a target price to start
                  receiving price alerts.
                </p>

              </div>

            )}

        </div>


        {/* =====================================================
            BACK TO DASHBOARD
        ===================================================== */}

        <div className="favourite-back-section">

          <button
            type="button"
            className="back-dashboard-button"
            onClick={onBackToDashboard}
          >
            ← Back to Dashboard
          </button>

        </div>

      </section>

    </div>
  );
}

export default PriceAlerts;
