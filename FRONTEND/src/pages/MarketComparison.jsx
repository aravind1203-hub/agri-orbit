import { useEffect, useState } from "react";

function MarketComparison({ onBackToDashboard }) {
  const [marketPrices, setMarketPrices] = useState([]);
  const [selectedCrop, setSelectedCrop] = useState("Tomato");
  const [selectedMarkets, setSelectedMarkets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  /*
    Demo market information.
    Price and crop data come from backend.
  */
  const marketInfo = {
    "Tindivanam Market": {
      distance: "20 KM",
      rating: "4.6",
    },
    "Villupuram Market": {
      distance: "30 KM",
      rating: "4.3",
    },
    "Cuddalore Market": {
      distance: "35 KM",
      rating: "4.4",
    },
    "Puducherry Market": {
      distance: "60 KM",
      rating: "4.5",
    },
    "Koyambedu Market": {
      distance: "45 KM",
      rating: "4.5",
    },
    "Vellore Market": {
      distance: "85 KM",
      rating: "4.2",
    },
    "Coimbatore Market": {
      distance: "120 KM",
      rating: "4.3",
    },
  };

  /*
    Fetch market prices from backend.
  */
  useEffect(() => {
    fetch("https://agri-orbit.onrender.com/api/market-prices")
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            "Failed to fetch market prices"
          );
        }

        return response.json();
      })
      .then((data) => {
        setMarketPrices(data);

        /*
          Select first available crop.
        */
        if (data.length > 0) {
          const firstCrop = data[0].crop;

          setSelectedCrop(firstCrop);
        }

        setLoading(false);
      })
      .catch((err) => {
        console.error(
          "Market comparison API error:",
          err
        );

        setError(
          "Unable to load market data from server."
        );

        setLoading(false);
      });
  }, []);

  /*
    Get unique crop names from backend.
  */
  const cropNames = [
    ...new Set(
      marketPrices.map(
        (item) => item.crop
      )
    ),
  ];

  /*
    Get markets available for selected crop.
  */
  const availableMarkets = marketPrices
    .filter(
      (item) =>
        item.crop === selectedCrop
    )
    .map((item) => {
      const info =
        marketInfo[item.market] || {
          distance: "N/A",
          rating: "N/A",
        };

      return {
        id: item.id,
        name: item.market,
        location: item.location,
        district: item.district,
        crop: item.crop,
        price: Number(
          item.price_per_kg
        ),
        pricePerQuintal: Number(
          item.price_per_quintal
        ),
        distance: info.distance,
        rating: info.rating,
      };
    });

  /*
    When crop changes:
    automatically select the first two
    available markets if possible.
  */
  useEffect(() => {
    if (availableMarkets.length === 0) {
      setSelectedMarkets([]);
      return;
    }

    const marketNames =
      availableMarkets.map(
        (market) => market.name
      );

    const previousSelected =
      selectedMarkets.filter(
        (name) =>
          marketNames.includes(name)
      );

    if (previousSelected.length > 0) {
      setSelectedMarkets(
        previousSelected
      );
    } else {
      setSelectedMarkets(
        marketNames.slice(0, 2)
      );
    }
  }, [selectedCrop, marketPrices]);

  /*
    Select / unselect market.
  */
  const handleMarketChange = (
    marketName
  ) => {
    if (
      selectedMarkets.includes(
        marketName
      )
    ) {
      setSelectedMarkets(
        selectedMarkets.filter(
          (name) =>
            name !== marketName
        )
      );

      return;
    }

    if (
      selectedMarkets.length >= 3
    ) {
      alert(
        "You can compare up to 3 markets."
      );

      return;
    }

    setSelectedMarkets([
      ...selectedMarkets,
      marketName,
    ]);
  };

  /*
    Markets selected for comparison.
  */
  const comparedMarkets =
    availableMarkets.filter(
      (market) =>
        selectedMarkets.includes(
          market.name
        )
    );

  /*
    Find highest price among selected markets.
  */
  const bestPrice =
    comparedMarkets.length > 0
      ? Math.max(
          ...comparedMarkets.map(
            (market) =>
              market.price
          )
        )
      : null;

  return (
    <div className="market-comparison-page">

      {/* =========================
          HEADER
      ========================= */}

      <header className="market-comparison-header">

        <div>
          <h1>AgriOrbit 🌱</h1>

          <p>
            Market Comparison
          </p>
        </div>

        <div className="profile-icon">
          👨‍🌾
        </div>

      </header>


      {/* =========================
          MAIN CONTENT
      ========================= */}

      <section className="market-comparison-content">

        <div className="market-comparison-title">

          <h2>
            ⚖️ Compare Markets
          </h2>

          <p>
            Compare crop prices across
            different markets before
            choosing where to sell.
          </p>

        </div>


        {/* =========================
            LOADING
        ========================= */}

        {loading && (
          <div className="loading-container">

            <div className="loading-spinner"></div>

            <p>
              Loading market data...
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
            MAIN DATA
        ========================= */}

        {!loading &&
          !error &&
          marketPrices.length > 0 && (
            <>

              {/* =========================
                  CROP SELECTOR
              ========================= */}

              <div className="market-selection-box">

                <h3>
                  🌾 Select Crop
                </h3>

                <p>
                  Select a crop to compare
                  its current market prices.
                </p>

                <select
                  value={selectedCrop}
                  onChange={(e) =>
                    setSelectedCrop(
                      e.target.value
                    )
                  }
                  style={{
                    width: "100%",
                    maxWidth: "420px",
                    padding: "12px 14px",
                    marginTop: "10px",
                    border:
                      "1px solid #d8dfdb",
                    borderRadius: "9px",
                    background:
                      "#ffffff",
                    fontSize: "14px",
                    color: "#222",
                    outline: "none",
                  }}
                >

                  {cropNames.map(
                    (crop) => (
                      <option
                        key={crop}
                        value={crop}
                      >
                        {crop}
                      </option>
                    )
                  )}

                </select>

              </div>


              {/* =========================
                  MARKET SELECTION
              ========================= */}

              {availableMarkets.length >
                0 && (
                <div className="market-selection-box">

                  <h3>
                    Select Markets
                  </h3>

                  <p>
                    Select up to 3 markets
                    for comparison.
                  </p>

                  <div className="market-selection-list">

                    {availableMarkets.map(
                      (market) => (

                        <label
                          className="market-selection-item"
                          key={market.name}
                        >

                          <input
                            type="checkbox"
                            checked={selectedMarkets.includes(
                              market.name
                            )}
                            onChange={() =>
                              handleMarketChange(
                                market.name
                              )
                            }
                          />

                          <span>
                            {market.name}
                          </span>

                        </label>

                      )
                    )}

                  </div>

                </div>
              )}


              {/* =========================
                  NO MARKET FOR CROP
              ========================= */}

              {availableMarkets.length ===
                0 && (
                <div className="no-comparison-markets">

                  <div>
                    📊
                  </div>

                  <h3>
                    No Markets Available
                  </h3>

                  <p>
                    No market price is
                    currently available
                    for {selectedCrop}.
                  </p>

                </div>
              )}


              {/* =========================
                  COMPARISON
              ========================= */}

              {comparedMarkets.length >
                0 ? (

                <div className="market-comparison-table">

                  <div className="comparison-heading">

                    <h3>
                      {selectedCrop} Market
                      Comparison
                    </h3>

                    <span>
                      {
                        comparedMarkets.length
                      }{" "}
                      Markets Selected
                    </span>

                  </div>


                  <div className="comparison-grid">

                    {/* =====================
                        LABEL COLUMN
                    ===================== */}

                    <div className="comparison-label-column">

                      <div className="comparison-label">
                        Market
                      </div>

                      <div className="comparison-label">
                        📍 Location
                      </div>

                      <div className="comparison-label">
                        🚗 Distance
                      </div>

                      <div className="comparison-label">
                        ⭐ Rating
                      </div>

                      <div className="comparison-label">
                        🌾 Crop
                      </div>

                      <div className="comparison-label">
                        💰 Price / KG
                      </div>

                      <div className="comparison-label">
                        📦 Price / Quintal
                      </div>

                    </div>


                    {/* =====================
                        MARKET COLUMNS
                    ===================== */}

                    {comparedMarkets.map(
                      (market) => {

                        const isBestPrice =
                          market.price ===
                          bestPrice;

                        return (
                          <div
                            className="comparison-market-column"
                            key={market.name}
                          >

                            {isBestPrice && (
                              <div className="comparison-best-badge">
                                🏆 Best Price
                              </div>
                            )}


                            <div className="comparison-market-name">
                              {market.name}
                            </div>


                            <div>
                              {market.location}
                            </div>


                            <div>
                              {market.distance}
                            </div>


                            <div className="comparison-rating">
                              ⭐{" "}
                              {market.rating}
                            </div>


                            <div>
                              {market.crop}
                            </div>


                            <div className="comparison-price">

                              ₹
                              {market.price.toFixed(
                                2
                              )}{" "}
                              / KG

                            </div>


                            <div className="comparison-price">

                              ₹
                              {market.pricePerQuintal.toFixed(
                                2
                              )}

                            </div>

                          </div>
                        );
                      }
                    )}

                  </div>

                </div>

              ) : (

                <div className="no-comparison-markets">

                  <div>
                    ⚖️
                  </div>

                  <h3>
                    No Markets Selected
                  </h3>

                  <p>
                    Select at least one
                    market to start
                    comparison.
                  </p>

                </div>

              )}

            </>
          )}


        {/* =========================
            NO DATA
        ========================= */}

        {!loading &&
          !error &&
          marketPrices.length ===
            0 && (
            <div className="no-comparison-markets">

              <div>
                📊
              </div>

              <h3>
                No Market Price Data
              </h3>

              <p>
                No market price
                information is
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
            onClick={
              onBackToDashboard
            }
          >
            ← Back to Dashboard
          </button>

        </div>

      </section>

    </div>
  );
}

export default MarketComparison;
