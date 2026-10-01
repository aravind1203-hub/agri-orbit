import { useEffect, useState } from "react";

function CropOffers({
  farmer,
  onBackToDashboard,
}) {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const farmerId = farmer?.farmer_id || farmer?.id;

    if (!farmerId) {
      setError(
        "Farmer information not found. Please login again."
      );
      setLoading(false);
      return;
    }

    fetch(
      `http://10.19.77.40:5000/api/crop-offers?farmer_id=${farmerId}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            "Failed to fetch crop offers."
          );
        }

        return response.json();
      })
      .then((data) => {
        setOffers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(
          "Crop offers API error:",
          err
        );

        setError(
          "Unable to load your crop offers."
        );

        setLoading(false);
      });
  }, [farmer]);

  const getStatusClass = (status) => {
    if (status === "accepted") {
      return "admin-status active";
    }

    if (status === "rejected") {
      return "admin-status blocked";
    }

    return "admin-status pending";
  };

  return (
    <div className="admin-manage-page">

      {/* Header */}
      <header className="admin-dashboard-header">

        <div>
          <h1>AgriOrbit 🌱</h1>
          <p>My Crop Offers</p>
        </div>

        <div className="admin-profile">
          👨‍🌾
        </div>

      </header>

      {/* Main Content */}
      <main className="admin-manage-content">

        {/* Title */}
        <div className="admin-page-title">

          <h2>📦 My Crop Offers</h2>

          <p>
            View the crop offers you have sent to buyers
          </p>

        </div>

        {/* Loading */}
        {loading && (
          <div className="admin-no-results">

            <div>⏳</div>

            <h3>
              Loading Crop Offers...
            </h3>

            <p>
              Please wait while we load your offers.
            </p>

          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="admin-no-results">

            <div>⚠️</div>

            <h3>
              Unable to Load Offers
            </h3>

            <p>
              {error}
            </p>

            <button
              type="button"
              className="admin-view-button"
              onClick={() =>
                window.location.reload()
              }
            >
              Try Again
            </button>

          </div>
        )}

        {/* Offers */}
        {!loading &&
          !error &&
          offers.length > 0 && (

            <div className="admin-table-container">

              <table className="admin-table">

                <thead>
                  <tr>
                    <th>Buyer</th>
                    <th>Crop</th>
                    <th>Market</th>
                    <th>Quantity</th>
                    <th>Price / KG</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>

                  {offers.map((offer) => (

                    <tr key={offer.id}>

                      {/* Buyer */}
                      <td>
                        <div className="admin-farmer-name">

                          <div className="admin-table-avatar">
                            🏪
                          </div>

                          <strong>
                            {offer.buyer}
                          </strong>

                        </div>
                      </td>

                      {/* Crop */}
                      <td>
                        <div className="admin-crop-name">

                          <div className="admin-report-crop-icon">
                            🌾
                          </div>

                          {offer.crop}

                        </div>
                      </td>

                      {/* Market */}
                      <td>
                        {offer.market}
                      </td>

                      {/* Quantity */}
                      <td>
                        {Number(
                          offer.quantity_kg
                        ).toLocaleString()}{" "}
                        KG
                      </td>

                      {/* Price */}
                      <td>
                        ₹
                        {Number(
                          offer.offered_price_per_kg
                        ).toFixed(2)}
                      </td>

                      {/* Status */}
                      <td>

                        <span
                          className={getStatusClass(
                            offer.status
                          )}
                        >
                          {offer.status
                            ?.charAt(0)
                            .toUpperCase() +
                            offer.status?.slice(1)}

                        </span>

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>
          )}

        {/* No Offers */}
        {!loading &&
          !error &&
          offers.length === 0 && (

            <div className="admin-no-results">

              <div>📦</div>

              <h3>
                No Crop Offers Found
              </h3>

              <p>
                You have not sent any crop offers yet.
              </p>

            </div>
          )}

        {/* Back */}
        <div className="admin-back-section">

          <button
            type="button"
            className="admin-back-button"
            onClick={onBackToDashboard}
          >
            ← Back to Dashboard
          </button>

        </div>

      </main>

    </div>
  );
}

export default CropOffers;
