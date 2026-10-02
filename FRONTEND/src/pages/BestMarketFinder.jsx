import { useEffect, useState } from "react";

function BestMarketFinder({ onBackToDashboard }) {
  const [selectedCrop, setSelectedCrop] = useState("Tomato");

  const [marketPrices, setMarketPrices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Demo distance and rating
  const marketDetails = {
    "Tindivanam Market": {
      location: "Tindivanam",
      distance: 20,
      rating: 4.6,
    },
    "Villupuram Market": {
      location: "Villupuram",
      distance: 30,
      rating: 4.3,
    },
    "Koyambedu Market": {
      location: "Chennai",
      distance: 45,
      rating: 4.5,
    },
    "Puducherry Market": {
      location: "Puducherry",
      distance: 60,
      rating: 4.4,
    },
    "Vellore Market": {
      location: "Vellore",
      distance: 85,
      rating: 4.2,
    },
    "Coimbatore Market": {
      location: "Coimbatore",
      distance: 120,
      rating: 4.1,
    },
    "Cuddalore Market": {
      location: "Cuddalore",
      distance: 35,
      rating: 4.3,
    },
  };

  // Fetch market prices from backend
  useEffect(() => {
    fetch("https://agri-orbit.onrender.com/api/market-prices")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch market prices");
        }

        return response.json();
      })
      .then((data) => {
        setMarketPrices(data);

        if (data.length > 0) {
          setSelectedCrop(data[0].crop);
        }

        setLoading(false);
      })
      .catch((err) => {
        console.error(
          "Best Market Finder API error:",
          err
        );

        setError(
          "Unable to load market prices from server."
        );

        setLoading(false);
      });
  }, []);

  // Crops available from backend
  const crops = [
    ...new Set(
      marketPrices.map((item) => item.crop)
    ),
  ];

  // Markets available for selected crop
  const availableMarkets = marketPrices
    .filter(
      (item) => item.crop === selectedCrop
    )
    .map((item) => ({
      ...item,
      location:
        item.location ||
        marketDetails[item.market]?.location ||
        item.market,
      distance:
        marketDetails[item.market]?.distance ??
        0,
      rating:
        marketDetails[item.market]?.rating ??
        4.0,
      price: Number(item.price_per_kg),
    }));

  // Find highest-price market
  // If price is same, nearest market is selected.
  const bestMarket = availableMarkets.reduce(
    (best, market) => {
      if (!best) {
        return market;
      }

      if (market.price > best.price) {
        return market;
      }

      if (
        market.price === best.price &&
        market.distance < best.distance
      ) {
        return market;
      }

      return best;
    },
    null
  );

  return (
    <div className="best-market-page">

      {/* Header */}
      <header className="best-market-header">
        <div>
          <h1>AgriOrbit 🌱</h1>
          <p>Best Market Finder</p>
        </div>

        <div className="profile-icon">
          👨‍🌾
        </div>
      </header>

      {/* Main Content */}
      <section className="best-market-content">

        <div className="best-market-title">
          <h2>🏆 Find Best Market</h2>

          <p>
            Select your crop and find the best market
            to sell it.
          </p>
        </div>

        {/* Loading */}
        {loading && (
          <div className="loading-container">
            <div className="loading-spinner"></div>

            <p>
              Loading market prices...
            </p>
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="error-message-container">
            <div className="error-message-icon">
              ⚠️
            </div>

            <h3>
              Unable to Load Markets
            </h3>

            <p>{error}</p>

            <button
              type="button"
              className="error-retry-button"
              onClick={() =>
                window.location.reload()
              }
            >
              Try Again
            </button>
          </div>
        )}

        {/* Main Content */}
        {!loading &&
          !error &&
          marketPrices.length > 0 && (
            <>

              {/* Crop Selection */}
              <div className="crop-selection-box">

                <label htmlFor="best-market-crop">
                  🌾 Select Crop
                </label>

                <select
                  id="best-market-crop"
                  value={selectedCrop}
                  onChange={(e) =>
                    setSelectedCrop(
                      e.target.value
                    )
                  }
                >
                  {crops.map((crop) => (
                    <option
                      key={crop}
                      value={crop}
                    >
                      {crop}
                    </option>
                  ))}
                </select>

              </div>

              {/* Best Market */}
              {bestMarket && (
                <div className="best-market-result">

                  <div className="best-market-badge">
                    🏆 BEST MARKET
                  </div>

                  <div className="best-market-icon">
                    🏪
                  </div>

                  <h2>
                    {bestMarket.market}
                  </h2>

                  <p className="best-market-location">
                    📍 {bestMarket.location}
                  </p>

                  <div className="best-market-stats">

                    <div>
                      <span>💰</span>

                      <small>
                        Price
                      </small>

                      <strong>
                        ₹
                        {bestMarket.price.toFixed(
                          2
                        )}{" "}
                        / KG
                      </strong>
                    </div>

                    <div>
                      <span>🚗</span>

                      <small>
                        Distance
                      </small>

                      <strong>
                        {bestMarket.distance} KM
                      </strong>
                    </div>

                    <div>
                      <span>⭐</span>

                      <small>
                        Rating
                      </small>

                      <strong>
                        {bestMarket.rating}
                      </strong>
                    </div>

                  </div>

                  <div className="best-market-reason">

                    <h3>
                      Why this market? 🤔
                    </h3>

                    <p>
                      This market offers the
                      highest available price for{" "}
                      {selectedCrop} among the
                      available markets.
                    </p>

                  </div>

                </div>
              )}

              {/* Other Markets */}
              <div className="other-markets-section">

                <h3>
                  Other Available Markets
                </h3>

                <div className="other-markets-list">

                  {availableMarkets
                    .filter(
                      (market) =>
                        market.id !==
                        bestMarket?.id
                    )
                    .map((market) => (
                      <div
                        className="other-market-card"
                        key={market.id}
                      >

                        <div>
                          <h4>
                            {market.market}
                          </h4>

                          <p>
                            📍 {market.location}
                          </p>
                        </div>

                        <div className="other-market-price">
                          ₹
                          {market.price.toFixed(
                            2
                          )}{" "}
                          / KG
                        </div>

                        <div className="other-market-distance">
                          🚗 {market.distance} KM
                        </div>

                      </div>
                    ))}

                </div>

              </div>

              {/* No Markets */}
              {!bestMarket && (
                <div className="no-buyers">
                  <div>🏪</div>

                  <h3>
                    No Markets Found
                  </h3>

                  <p>
                    No market price is available
                    for {selectedCrop}.
                  </p>
                </div>
              )}

            </>
          )}

        {/* No Data */}
        {!loading &&
          !error &&
          marketPrices.length === 0 && (
            <div className="no-buyers">
              <div>📊</div>

              <h3>
                No Market Data
              </h3>

              <p>
                No market price information is
                currently available.
              </p>
            </div>
          )}

        {/* Back */}
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

export default BestMarketFinder;
