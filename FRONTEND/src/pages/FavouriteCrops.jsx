import { useEffect, useState } from "react";

function FavouriteCrops({
  onBackToDashboard,
  farmer,
}) {
  const [favouriteCrops, setFavouriteCrops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [removingId, setRemovingId] = useState(null);

  const farmerId =
    farmer?.farmer_id ||
    farmer?.id;

  /* =========================
     CURRENT CROP DETAILS
     Same details shown in Crop Search
  ========================= */

  const cropDetails = {
    Tomato: {
      price: "₹38 / KG",
      market: "Villupuram Market",
      image: "/image/Tomato.png",
    },

    Onion: {
      price: "₹32 / KG",
      market: "Cuddalore Market",
      image: "/image/Onion.png",
    },

    Potato: {
      price: "₹28 / KG",
      market: "Puducherry Market",
      image: "/image/Potato.png",
    },

    Brinjal: {
      price: "₹35 / KG",
      market: "Villupuram Market",
      image: "/image/Brinjal.png",
    },

    Carrot: {
      price: "₹42 / KG",
      market: "Chennai Market",
      image: "/image/Carrot.png",
    },

    Cabbage: {
      price: "₹25 / KG",
      market: "Cuddalore Market",
      image: "/image/Cabbage.png",
    },

    Banana: {
      price: "₹45 / KG",
      market: "Puducherry Market",
      image: "/image/Banana.png",
    },

    "Green Chilli": {
      price: "₹55 / KG",
      market: "Chennai Market",
      image: "/image/chilli.png",
    },
  };

  /* =========================
     FETCH FAVOURITE CROPS
  ========================= */

  useEffect(() => {
    const fetchFavouriteCrops = async () => {
      if (!farmerId) {
        setError(
          "Farmer information not found. Please login again."
        );
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `https://agri-orbit.onrender.com/api/favourite-crops?farmer_id=${farmerId}`
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data.error ||
            "Unable to load favourite crops."
          );
        }

        setFavouriteCrops(data);
      } catch (err) {
        console.error(
          "Favourite crops fetch error:",
          err
        );

        setError(
          err.message ||
          "Unable to load favourite crops."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchFavouriteCrops();
  }, [farmerId]);

  /* =========================
     REMOVE FAVOURITE
  ========================= */

  const handleRemoveFavourite = async (
    favouriteId
  ) => {
    const confirmRemove = window.confirm(
      "Remove this crop from your favourites?"
    );

    if (!confirmRemove) {
      return;
    }

    try {
      setRemovingId(favouriteId);

      const response = await fetch(
        `https://agri-orbit.onrender.com/api/favourite-crops/${favouriteId}`,
        {
          method: "DELETE",
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error ||
          "Unable to remove favourite crop."
        );
      }

      setFavouriteCrops((current) =>
        current.filter(
          (crop) => crop.id !== favouriteId
        )
      );

      alert(
        "Favourite crop removed successfully!"
      );
    } catch (err) {
      console.error(
        "Remove favourite error:",
        err
      );

      alert(
        err.message ||
        "Unable to remove favourite crop."
      );
    } finally {
      setRemovingId(null);
    }
  };

  /* =========================
     LOADING
  ========================= */

  if (loading) {
    return (
      <div className="favourite-crops-page">

        <header className="favourite-crops-header">

          <div>
            <h1>AgriOrbit 🌱</h1>
            <p>Favourite Crops</p>
          </div>

          <div className="profile-icon">
            👨‍🌾
          </div>

        </header>

        <section className="favourite-crops-content">

          <div className="no-favourite-crops">

            <div className="empty-favourite-icon">
              ⭐
            </div>

            <h3>
              Loading Favourite Crops...
            </h3>

            <p>
              Please wait while we load your
              favourite crops.
            </p>

          </div>

        </section>

      </div>
    );
  }

  /* =========================
     MAIN UI
  ========================= */

  return (
    <div className="favourite-crops-page">

      {/* HEADER */}

      <header className="favourite-crops-header">

        <div>
          <h1>AgriOrbit 🌱</h1>
          <p>Favourite Crops</p>
        </div>

        <div className="profile-icon">
          👨‍🌾
        </div>

      </header>

      {/* MAIN CONTENT */}

      <section className="favourite-crops-content">

        <h2>
          My Favourite Crops ⭐
        </h2>

        <p className="favourite-subtitle">
          Quickly check the prices of your
          favourite crops.
        </p>

        {/* ERROR */}

        {error && (
          <div className="no-favourite-crops">

            <div className="empty-favourite-icon">
              ⚠️
            </div>

            <h3>
              Unable to Load Favourite Crops
            </h3>

            <p>
              {error}
            </p>

          </div>
        )}

        {/* FAVOURITE CROPS */}

        {!error &&
          favouriteCrops.length > 0 && (

            <div className="favourite-crops-grid">

              {favouriteCrops.map(
                (favourite) => {

                  const cropName =
                    favourite.crop;

                  const details =
                    cropDetails[cropName];

                  return (
                    <div
                      className="favourite-crop-card"
                      key={favourite.id}
                    >

                      {/* IMAGE */}

                      <div className="favourite-image-box">

                        <img
                          src={
                            details?.image ||
                            "/image/Tomato.png"
                          }
                          alt={cropName}
                          className="favourite-crop-image"
                        />

                      </div>

                      {/* CROP NAME */}

                      <h3>
                        {cropName}
                      </h3>

                      <p>
                        Current Price
                      </p>

                      {/* PRICE */}

                      <strong>
                        {details?.price ||
                          "Price not available"}
                      </strong>

                      {/* MARKET */}

                      <span>
                        📍{" "}
                        {details?.market ||
                          "Market not available"}
                      </span>

                      {/* REMOVE */}

                      <button
                        type="button"
                        className="remove-favourite-button"
                        onClick={() =>
                          handleRemoveFavourite(
                            favourite.id
                          )
                        }
                        disabled={
                          removingId ===
                          favourite.id
                        }
                      >
                        {removingId ===
                        favourite.id
                          ? "Removing..."
                          : "⭐ Remove Favourite"}
                      </button>

                    </div>
                  );
                }
              )}

            </div>
          )}

        {/* EMPTY STATE */}

        {!error &&
          favouriteCrops.length === 0 && (

            <div className="no-favourite-crops">

              <div className="empty-favourite-icon">
                ⭐
              </div>

              <h3>
                No Favourite Crops
              </h3>

              <p>
                You haven't added any crops
                to your favourites yet.
              </p>

            </div>
          )}

        {/* BACK BUTTON */}

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

export default FavouriteCrops;
