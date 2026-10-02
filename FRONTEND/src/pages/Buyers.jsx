import { useEffect, useState } from "react";

function Buyers({
  onBackToDashboard,
  onViewBuyer,
}) {
  /* =========================================================
     BUYERS API DATA
  ========================================================= */

  const [buyers, setBuyers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://agri-orbit.onrender.com/api/buyers")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch buyers");
        }

        return response.json();
      })
      .then((data) => {
        const formattedBuyers = data.map((buyer) => ({
          id: buyer.id,
          name: buyer.name,
          mobile: buyer.mobile,
          location: buyer.location,
          crops: buyer.interested_crops,
          requirement:
            buyer.requirement || "Not specified",
          rating: "4.5",
        }));

        setBuyers(formattedBuyers);
        setLoading(false);
      })
      .catch((err) => {
        console.error(
          "Buyers API error:",
          err
        );

        setError(
          "Unable to load buyers from server."
        );

        setLoading(false);
      });
  }, []);

  /* =========================================================
     SEARCH
  ========================================================= */

  const [search, setSearch] = useState("");

  const [recentSearches, setRecentSearches] =
    useState(() => {
      try {
        return (
          JSON.parse(
            localStorage.getItem(
              "buyerRecentSearches"
            )
          ) || []
        );
      } catch {
        return [];
      }
    });

  const [showRecentSearches, setShowRecentSearches] =
    useState(false);

  /* =========================================================
     FILTER BUYERS
  ========================================================= */

  const filteredBuyers = buyers.filter(
    (buyer) =>
      `${buyer.name} ${buyer.location} ${buyer.crops} ${buyer.requirement}`
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  /* =========================================================
     SAVE RECENT SEARCH
  ========================================================= */

  const saveRecentSearch = (value) => {
    const trimmedValue = value.trim();

    if (!trimmedValue) {
      return;
    }

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
      "buyerRecentSearches",
      JSON.stringify(updatedSearches)
    );
  };

  /* =========================================================
     SEARCH SUBMIT
  ========================================================= */

  const handleSearch = (e) => {
    e.preventDefault();

    if (!search.trim()) {
      return;
    }

    saveRecentSearch(search);
    setShowRecentSearches(false);
  };

  /* =========================================================
     SELECT RECENT SEARCH
  ========================================================= */

  const handleRecentSearchClick = (value) => {
    setSearch(value);
    setShowRecentSearches(false);
  };

  /* =========================================================
     DELETE RECENT SEARCH
  ========================================================= */

  const removeRecentSearch = (value) => {
    const updatedSearches =
      recentSearches.filter(
        (item) => item !== value
      );

    setRecentSearches(updatedSearches);

    localStorage.setItem(
      "buyerRecentSearches",
      JSON.stringify(updatedSearches)
    );
  };

  /* =========================================================
     CLEAR ALL RECENT SEARCHES
  ========================================================= */

  const clearRecentSearches = () => {
    setRecentSearches([]);

    localStorage.removeItem(
      "buyerRecentSearches"
    );
  };

  /* =========================================================
     UI
  ========================================================= */

  return (
    <div className="buyers-page">

      {/* Header */}
      <header className="buyers-header">

        <div>
          <h1>AgriOrbit 🌱</h1>

          <p>
            Buyer Search
          </p>
        </div>

        <div className="profile-icon">
          👨‍🌾
        </div>

      </header>

      {/* Main Content */}
      <section className="buyers-content">

        <h2>
          👥 Find Buyers
        </h2>

        <p className="buyers-subtitle">
          Find buyers looking for your crops
        </p>

        {/* =====================================================
            SEARCH BOX
        ===================================================== */}

        <div className="buyer-search-box">

          <form onSubmit={handleSearch}>

            <div className="buyer-search-input-wrapper">

              <span className="buyer-search-icon">
                🔍
              </span>

              <input
                type="text"
                placeholder="Search buyer, location or crop..."
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
                  className="buyer-search-clear"
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

          {/* =================================================
              RECENT SEARCHES
          ================================================= */}

          {showRecentSearches &&
            recentSearches.length > 0 && (

              <div className="buyer-recent-searches">

                <div className="buyer-recent-header">

                  <strong>
                    Recent Searches
                  </strong>

                  <button
                    type="button"
                    onClick={
                      clearRecentSearches
                    }
                  >
                    Clear All
                  </button>

                </div>

                {recentSearches.map(
                  (recentSearch, index) => (

                    <div
                      className="buyer-recent-item"
                      key={`${recentSearch}-${index}`}
                    >

                      <button
                        type="button"
                        className="buyer-recent-main"
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
                        className="buyer-recent-remove"
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

        {/* =====================================================
            LOADING
        ===================================================== */}

        {loading && (

          <div className="no-buyers">

            <div>
              ⏳
            </div>

            <h3>
              Loading Buyers...
            </h3>

            <p>
              Please wait while we load buyers.
            </p>

          </div>

        )}

        {/* =====================================================
            ERROR
        ===================================================== */}

        {!loading && error && (

          <div className="no-buyers">

            <div>
              ⚠️
            </div>

            <h3>
              Unable to Load Buyers
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

        {/* =====================================================
            BUYERS GRID
        ===================================================== */}

        {!loading && !error && (

          <div className="buyers-grid">

            {filteredBuyers.map(
              (buyer) => (

                <div
                  className="buyer-card"
                  key={buyer.id}
                >

                  <div className="buyer-icon">
                    👤
                  </div>

                  <h3>
                    {buyer.name}
                  </h3>

                  <div className="buyer-rating">
                    ⭐ {buyer.rating}
                  </div>

                  <div className="buyer-info">

                    <p>

                      <span>
                        📍
                      </span>

                      <strong>
                        Location
                      </strong>

                      {buyer.location}

                    </p>

                    <p>

                      <span>
                        🌾
                      </span>

                      <strong>
                        Interested Crops
                      </strong>

                      {buyer.crops}

                    </p>

                    <p>

                      <span>
                        📦
                      </span>

                      <strong>
                        Requirement
                      </strong>

                      {buyer.requirement}

                    </p>

                  </div>

                  {/* View Buyer */}
                  <button
                    type="button"
                    onClick={() =>
                      onViewBuyer(buyer)
                    }
                  >
                    👤 View Buyer
                  </button>

                </div>

              )
            )}

          </div>

        )}

        {/* =====================================================
            NO SEARCH RESULTS
        ===================================================== */}

        {!loading &&
          !error &&
          filteredBuyers.length === 0 && (

            <div className="no-buyers">

              <div>
                🔍
              </div>

              <h3>
                No Buyers Found
              </h3>

              <p>
                Try searching with another buyer
                name, location or crop.
              </p>

            </div>

          )}

        {/* =====================================================
            BACK BUTTON
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

export default Buyers;
