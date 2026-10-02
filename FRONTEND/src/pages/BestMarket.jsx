import { useEffect, useState } from "react";

function BestMarket({ onBackToDashboard, onViewMarket }) {
  const [selectedCrop, setSelectedCrop] = useState("Tomato");
  const [marketPrices, setMarketPrices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  /*
    Demo distance and score.
    Market price comes from backend/MySQL.
  */
  const marketDetails = {
    "Tindivanam Market": {
      distance: 20,
      score: 95,
    },
    "Koyambedu Market": {
      distance: 45,
      score: 82,
    },
    "Villupuram Market": {
      distance: 30,
      score: 75,
    },
    "Cuddalore Market": {
      distance: 35,
      score: 78,
    },
    "Puducherry Market": {
      distance: 60,
      score: 80,
    },
    "Vellore Market": {
      distance: 85,
      score: 72,
    },
    "Coimbatore Market": {
      distance: 120,
      score: 70,
    },
  };

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
        console.error("Best market API error:", err);

        setError(
          "Unable to load market prices from server."
        );

        setLoading(false);
      });
  }, []);

  const cropNames = [
    ...new Set(
      marketPrices.map((item) => item.crop)
    ),
  ];

  const markets = marketPrices
    .filter(
      (item) => item.crop === selectedCrop
    )
    .map((item) => {
      const details =
        marketDetails[item.market] || {
          distance: 0,
          score: 70,
        };

      return {
        id: item.id,
        name: item.market,
        location: item.location,
        district: item.district,
        price: Number(item.price_per_kg),
        pricePerQuintal: Number(
          item.price_per_quintal
        ),
        distance: details.distance,
        score: details.score,
      };
    });

  const bestMarket =
    markets.length > 0
      ? markets.reduce((best, market) =>
          market.score > best.score
            ? market
            : best
        )
      : null;

  return (
    <div className="best-market-page">

      {/* =========================
          HEADER
      ========================= */}

      <header className="best-market-header">

        <div>
          <h1>AgriOrbit 🌱</h1>
          <p>Best Market Finder</p>
        </div>

        <div className="profile-icon">
          👨‍🌾
        </div>

      </header>


      {/* =========================
          CONTENT
      ========================= */}

      <section className="best-market-content">

        <h2>🏆 Find Best Market</h2>

        <p className="best-market-subtitle">
          Find the best market based on price,
          distance and overall score
        </p>


        {/* =========================
            LOADING
        ========================= */}

        {loading && (
          <div className="loading-container">
            <div className="loading-spinner"></div>

            <p>
              Loading market prices...
            </p>
          </div>
        )}


        {/* =========================
            ERROR
        ========================= */}

        {!loading && error && (
          <div className="error-message-container">

            <div className="error-message-icon">
              ⚠️
            </div>

            <h3>
              Unable to Load Market Data
            </h3>

            <p>
              {error}
            </p>

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


        {/* =========================
            MAIN CONTENT
        ========================= */}

        {!loading &&
          !error &&
          marketPrices.length > 0 && (
            <>

              {/* =========================
                  CROP SELECTOR
              ========================= */}

              <div className="best-crop-selector">

                <label htmlFor="bestCrop">
                  🌾 Select Your Crop
                </label>

                <select
                  id="bestCrop"
                  value={selectedCrop}
                  onChange={(e) =>
                    setSelectedCrop(
                      e.target.value
                    )
                  }
                >

                  {cropNames.map((crop) => (
                    <option
                      key={crop}
                      value={crop}
                    >
                      {crop}
                    </option>
                  ))}

                </select>

              </div>


              {/* =========================
                  BEST MARKET RESULT
              ========================= */}

              {bestMarket && (
                <div className="best-market-result">

                  <div className="best-result-icon">
                    🏆
                  </div>

                  <div className="best-result-content">

                    <span className="best-result-label">
                      BEST MARKET FOR{" "}
                      {selectedCrop.toUpperCase()}
                    </span>

                    <h3>
                      {bestMarket.name}
                    </h3>

                    <p>
                      📍 {bestMarket.location}
                    </p>

                    <div className="best-result-stats">

                      <div>
                        <span>💰</span>

                        <strong>
                          ₹
                          {bestMarket.price.toFixed(
                            2
                          )}{" "}
                          / KG
                        </strong>

                        <small>
                          Current Price
                        </small>
                      </div>


                      <div>
                        <span>🚗</span>

                        <strong>
                          {bestMarket.distance} KM
                        </strong>

                        <small>
                          Distance
                        </small>
                      </div>


                      <div>
                        <span>⭐</span>

                        <strong>
                          {bestMarket.score}/100
                        </strong>

                        <small>
                          Market Score
                        </small>
                      </div>

                    </div>

                  </div>

                </div>
              )}


              {/* =========================
                  MARKET COMPARISON
              ========================= */}

              <div className="market-comparison-section">

                <h2>
                  📊 Market Comparison
                </h2>

                <p>
                  Compare markets before choosing
                  where to sell.
                </p>


                {markets.length > 0 ? (
                  <div className="comparison-table-wrapper">

                    <table className="comparison-table">

                      <thead>

                        <tr>
                          <th>Market</th>
                          <th>Price / KG</th>
                          <th>Distance</th>
                          <th>Score</th>
                          <th>Action</th>
                        </tr>

                      </thead>


                      <tbody>

                        {markets.map((market) => (

                          <tr key={market.id}>

                            {/* MARKET */}

                            <td>

                              <strong>
                                {market.name}
                              </strong>

                              <small>
                                📍 {market.location}
                              </small>

                            </td>


                            {/* PRICE */}

                            <td>

                              <strong>
                                ₹
                                {market.price.toFixed(
                                  2
                                )}
                              </strong>

                            </td>


                            {/* DISTANCE */}

                            <td>
                              🚗{" "}
                              {market.distance} KM
                            </td>


                            {/* SCORE */}

                            <td>

                              <span className="score-badge">
                                ⭐ {market.score}
                              </span>

                            </td>


                            {/* VIEW MARKET */}

                            <td>

                              <button
                                type="button"
                                className="best-view-button"
                                onClick={() =>
                                  onViewMarket({
                                    ...market,
                                    crop: selectedCrop,
                                    price: `₹${market.price.toFixed(
                                      2
                                    )} / KG`,
                                  })
                                }
                              >
                                View Market
                              </button>

                            </td>

                          </tr>

                        ))}

                      </tbody>

                    </table>

                  </div>
                ) : (
                  <div className="no-buyers">

                    <div>📊</div>

                    <h3>
                      No Market Data Found
                    </h3>

                    <p>
                      No price information is
                      available for this crop.
                    </p>

                  </div>
                )}

              </div>

            </>
          )}


        {/* =========================
            NO DATA
        ========================= */}

        {!loading &&
          !error &&
          marketPrices.length === 0 && (
            <div className="no-buyers">

              <div>📊</div>

              <h3>
                No Market Price Data
              </h3>

              <p>
                No market price information is
                currently available.
              </p>

            </div>
          )}


        {/* =========================
            BACK BUTTON
        ========================= */}

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

export default BestMarket;
