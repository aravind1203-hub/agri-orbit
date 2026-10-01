import { useState } from "react";

function NearbyMarkets({ onBackToDashboard, onViewMarket }) {
  const [search, setSearch] = useState("");

  const [recentSearches, setRecentSearches] = useState(() => {
    try {
      return (
        JSON.parse(
          localStorage.getItem("marketRecentSearches")
        ) || []
      );
    } catch {
      return [];
    }
  });

  const [showRecentSearches, setShowRecentSearches] =
    useState(false);

  const markets = [
    {
      name: "Koyambedu Market",
      location: "Chennai",
      distance: "45 KM",
      crops: "Vegetables, Fruits",
      icon: "🏪",
      rating: "4.5",
      phone: "9988098967",
    },
    {
      name: "Villupuram Market",
      location: "Villupuram",
      distance: "30 KM",
      crops: "Tomato, Onion, Brinjal",
      icon: "🏪",
      rating: "4.3",
      phone: "6324568790",
    },
    {
      name: "Pondicherry Market",
      location: "Pondicherry",
      distance: "55 KM",
      crops: "Vegetables, Banana",
      icon: "🏪",
      rating: "4.4",
      phone: "9089098767",
    },
    {
      name: "Tindivanam Market",
      location: "Tindivanam",
      distance: "20 KM",
      crops: "Tomato, Potato, Onion",
      icon: "🏪",
      rating: "4.6",
      phone: "9987656789",
    },
  ];

  const filteredMarkets = markets.filter((market) =>
    `${market.name} ${market.location} ${market.crops}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const saveRecentSearch = (value) => {
    const trimmedValue = value.trim();

    if (!trimmedValue) return;

    const updatedSearches = [
      trimmedValue,
      ...recentSearches.filter(
        (item) =>
          item.toLowerCase() !==
          trimmedValue.toLowerCase()
      ),
    ].slice(0, 5);

    setRecentSearches(updatedSearches);

    localStorage.setItem(
      "marketRecentSearches",
      JSON.stringify(updatedSearches)
    );
  };

  const handleSearch = (e) => {
    e.preventDefault();

    if (!search.trim()) return;

    saveRecentSearch(search);
    setShowRecentSearches(false);
  };

  const handleRecentSearchClick = (value) => {
    setSearch(value);
    setShowRecentSearches(false);
  };

  const removeRecentSearch = (value) => {
    const updatedSearches = recentSearches.filter(
      (item) => item !== value
    );

    setRecentSearches(updatedSearches);

    localStorage.setItem(
      "marketRecentSearches",
      JSON.stringify(updatedSearches)
    );
  };

  const clearRecentSearches = () => {
    setRecentSearches([]);
    localStorage.removeItem("marketRecentSearches");
  };

  return (
    <div className="nearby-markets-page">

      {/* Header */}
      <header className="nearby-markets-header">
        <div>
          <h1>AgriOrbit 🌱</h1>
          <p>Nearby Markets</p>
        </div>

        <div className="profile-icon">
          👨‍🌾
        </div>
      </header>

      {/* Main Content */}
      <section className="nearby-markets-content">

        {/* Title */}
        <div className="nearby-title-section">
          <h2>Nearby Markets 📍</h2>

          <p className="nearby-subtitle">
            Find the best markets near your location
          </p>
        </div>

        {/* Search */}
        <div className="market-search-box">

          <form onSubmit={handleSearch}>

            <div className="market-search-input-wrapper">

              <span className="market-search-icon">
                🔍
              </span>

              <input
                type="text"
                placeholder="Search market, location or crop..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                onFocus={() =>
                  setShowRecentSearches(true)
                }
              />

              {search && (
                <button
                  type="button"
                  className="market-search-clear"
                  onClick={() => {
                    setSearch("");
                    setShowRecentSearches(true);
                  }}
                >
                  ✕
                </button>
              )}

            </div>

          </form>

          {/* Recent Searches */}
          {showRecentSearches &&
            recentSearches.length > 0 && (
              <div className="market-recent-searches">

                <div className="market-recent-header">

                  <strong>
                    Recent Searches
                  </strong>

                  <button
                    type="button"
                    onClick={clearRecentSearches}
                  >
                    Clear All
                  </button>

                </div>

                {recentSearches.map(
                  (recentSearch, index) => (
                    <div
                      className="market-recent-item"
                      key={`${recentSearch}-${index}`}
                    >

                      <button
                        type="button"
                        className="market-recent-main"
                        onClick={() =>
                          handleRecentSearchClick(
                            recentSearch
                          )
                        }
                      >
                        <span className="recent-search-icon">
                          🕘
                        </span>

                        <span>
                          {recentSearch}
                        </span>
                      </button>

                      <button
                        type="button"
                        className="market-recent-remove"
                        onClick={() =>
                          removeRecentSearch(
                            recentSearch
                          )
                        }
                      >
                        ×
                      </button>

                    </div>
                  )
                )}

              </div>
            )}

        </div>

        {/* Markets */}
        {filteredMarkets.length > 0 ? (

          <div className="markets-grid">

            {filteredMarkets.map(
              (market, index) => (

                <div
                  className="market-card"
                  key={index}
                >

                  {/* Recommended */}
                  {market.name ===
                    "Tindivanam Market" && (
                    <div className="nearby-best-badge">
                      ⭐ Recommended
                    </div>
                  )}

                  {/* Icon */}
                  <div className="market-icon">
                    {market.icon}
                  </div>

                  {/* Name */}
                  <h3>
                    {market.name}
                  </h3>

                  {/* Rating */}
                  <div className="market-rating">
                    ⭐ {market.rating}
                  </div>

                  {/* Information */}
                  <div className="market-info">

                    <p>
                      <span>📍</span>

                      <strong>
                        Location
                      </strong>

                      {market.location}
                    </p>

                    <p>
                      <span>🚗</span>

                      <strong>
                        Distance
                      </strong>

                      {market.distance}
                    </p>

                    <p>
                      <span>🌾</span>

                      <strong>
                        Crops
                      </strong>

                      {market.crops}
                    </p>

                  </div>

                  {/* View Market */}
                  <button
                    type="button"
                    onClick={() =>
                      onViewMarket({
                        ...market,
                        crop: market.crops,
                        price: "Check Current Price",
                      })
                    }
                  >
                    View Market
                  </button>

                </div>

              )
            )}

          </div>

        ) : (

          /* No Markets */
          <div className="no-markets">

            <div className="no-market-icon">
              🔍
            </div>

            <h3>
              No Markets Found
            </h3>

            <p>
              Try searching with another market name,
              location or crop.
            </p>

          </div>

        )}

        {/* Back Button */}
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

export default NearbyMarkets;