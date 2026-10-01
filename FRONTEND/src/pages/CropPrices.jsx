
import { useEffect, useState } from "react";

function CropPrices({ onBackToDashboard }) {
  const [selectedCrop, setSelectedCrop] = useState("Tomato");
  const [marketPrices, setMarketPrices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch market prices from backend
  useEffect(() => {
    fetch("http://10.19.77.40:5000/api/market-prices")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch market prices");
        }

        return response.json();
      })
      .then((data) => {
        setMarketPrices(data);

        // Select first available crop
        if (data.length > 0) {
          setSelectedCrop(data[0].crop);
        }

        setLoading(false);
      })
      .catch((err) => {
        console.error("Market price API error:", err);
        setError("Unable to load crop prices from server.");
        setLoading(false);
      });
  }, []);

  // Crop images
  const cropImages = {
    Tomato: "/image/Tomato.png",
    Onion: "/image/Onion.png",
    Potato: "/image/Potato.png",
    Brinjal: "/image/Brinjal.png",
    Carrot: "/image/Carrot.png",
    Cabbage: "/image/Cabbage.png",
    "Green Chilli": "/image/chilli.png",
    Banana: "/image/Banana.png",
  };

  // Get unique crop names
  const cropNames = [
    ...new Set(marketPrices.map((item) => item.crop)),
  ];

  // Filter prices for selected crop
  const selectedPrices = marketPrices.filter(
    (item) => item.crop === selectedCrop
  );

  const selectedImage =
    cropImages[selectedCrop] || "/image/Tomato.png";

  return (
    <div className="crop-prices-page">

      {/* Header */}
      <header className="crop-prices-header">
        <div>
          <h1>AgriOrbit</h1>
          <p>Crop Price Market</p>
        </div>
      </header>

      {/* Content */}
      <section className="crop-prices-content">

        <h2>Today's Crop Prices 🌾</h2>

        <p className="price-date">
          Compare prices across different markets
        </p>

        {/* Loading */}
        {loading && (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Loading crop prices...</p>
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="error-message-container">
            <div className="error-message-icon">⚠️</div>

            <h3>Unable to Load Prices</h3>

            <p>{error}</p>

            <button
              type="button"
              className="error-retry-button"
              onClick={() => window.location.reload()}
            >
              Try Again
            </button>
          </div>
        )}

        {/* Main Content */}
        {!loading && !error && marketPrices.length > 0 && (
          <>
            {/* Crop Selector */}
            <div className="crop-selector">

              <label htmlFor="crop">
                Select Crop
              </label>

              <select
                id="crop"
                value={selectedCrop}
                onChange={(e) => setSelectedCrop(e.target.value)}
              >
                {cropNames.map((crop) => (
                  <option key={crop} value={crop}>
                    {crop}
                  </option>
                ))}
              </select>

            </div>

            {/* Selected Crop */}
            <div className="selected-crop">

              <img
                src={selectedImage}
                alt={selectedCrop}
                className="selected-crop-image"
              />

              <div>
                <span>Selected Crop</span>
                <strong>{selectedCrop}</strong>
              </div>

            </div>

            {/* Area / Market Prices */}
            <div className="area-price-grid">

              {selectedPrices.map((item) => (

                <div
                  className="area-price-card"
                  key={item.id}
                >

                  <div className="area-card-top">

                    <img
                      src={selectedImage}
                      alt={selectedCrop}
                      className="area-crop-image"
                    />

                    <div>
                      <h3>{item.market}</h3>

                      <p className="market-label">
                        {item.district}
                      </p>
                    </div>

                  </div>

                  <div className="price-row">

                    <span>1 KG</span>

                    <strong>
                      ₹{Number(item.price_per_kg).toFixed(2)}
                    </strong>

                  </div>

                  <div className="price-row quintal-row">

                    <span>1 Quintal</span>

                    <strong>
                      ₹{Number(item.price_per_quintal).toFixed(2)}
                    </strong>

                  </div>

                </div>

              ))}

            </div>

            {/* No prices for selected crop */}
            {selectedPrices.length === 0 && (
              <div className="no-buyers">
                <div>🔍</div>

                <h3>No Prices Found</h3>

                <p>
                  No market price data is available for this crop.
                </p>
              </div>
            )}

          </>
        )}

        {/* No Data */}
        {!loading && !error && marketPrices.length === 0 && (
          <div className="no-buyers">

            <div>📊</div>

            <h3>No Market Price Data</h3>

            <p>
              No crop price information is currently available.
            </p>

          </div>
        )}

        {/* Back to Dashboard */}
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

export default CropPrices;

