import { useEffect, useState } from "react";

function CropSearch({
  onBackToDashboard,
  onViewDetails,
  favouriteCrops,
  onToggleFavourite,
}) {
  const [search, setSearch] = useState("");
  const [crops, setCrops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [recentSearches, setRecentSearches] = useState(() => {
    try {
      return (
        JSON.parse(
          localStorage.getItem("cropRecentSearches")
        ) || []
      );
    } catch {
      return [];
    }
  });

  const [showRecentSearches, setShowRecentSearches] =
    useState(false);

  // Load crops from backend
  useEffect(() => {
    const fetchCrops = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          "http://10.19.77.40:5000/api/crops"
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data.error || "Unable to load crops."
          );
        }

        // Active crops only
        const activeCrops = data.filter(
          (crop) =>
            !crop.status ||
            crop.status.toLowerCase() === "active"
        );

        setCrops(activeCrops);
      } catch (error) {
        console.error("Crop loading error:", error);

        setError(
          "Unable to load crops. Please try again."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchCrops();
  }, []);

  const filteredCrops = crops.filter((crop) =>
    crop.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  // Save search
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
      "cropRecentSearches",
      JSON.stringify(updatedSearches)
    );
  };

  // Search submit
  const handleSearch = (e) => {
    e.preventDefault();

    if (!search.trim()) return;

    saveRecentSearch(search);
    setShowRecentSearches(false);
  };

  // Select recent search
  const handleRecentSearchClick = (value) => {
    setSearch(value);
    setShowRecentSearches(false);
  };

  // Remove one search
  const removeRecentSearch = (value) => {
    const updatedSearches = recentSearches.filter(
      (item) => item !== value
    );

    setRecentSearches(updatedSearches);

    localStorage.setItem(
      "cropRecentSearches",
      JSON.stringify(updatedSearches)
    );
  };

  // Clear all searches
  const clearRecentSearches = () => {
    setRecentSearches([]);
    localStorage.removeItem("cropRecentSearches");
  };

  return (
    <div className="crop-search-page">

      {/* HEADER */}
      <header className="crop-search-header">

        <div>
          <h1>AgriOrbit 🌱</h1>
          <p>Crop Search</p>
        </div>

        <div className="profile-icon">
          👨‍🌾
        </div>

      </header>

      {/* MAIN CONTENT */}
      <main className="crop-search-content">

        {/* HEADING */}
        <div className="crop-search-heading">

          <h2>🔍 Search Crops</h2>

          <p>
            Search crops and check today's market prices.
          </p>

        </div>

        {/* SEARCH BOX */}
        <div className="crop-search-box">

          <form onSubmit={handleSearch}>

            <div className="crop-search-input-wrapper">

              <span className="crop-search-icon">
                🔍
              </span>

              <input
                type="text"
                placeholder="Search crop name..."
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
                  className="crop-search-clear"
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

          {/* RECENT SEARCHES */}
          {showRecentSearches &&
            recentSearches.length > 0 && (

              <div className="crop-recent-searches">

                <div className="crop-recent-header">

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
                      className="crop-recent-item"
                      key={`${recentSearch}-${index}`}
                    >

                      <button
                        type="button"
                        className="crop-recent-main"
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
                        className="crop-recent-remove"
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

        {/* LOADING */}
        {loading && (
          <div className="no-crop-found">

            <div className="no-crop-icon">
              🌱
            </div>

            <h3>
              Loading Crops...
            </h3>

            <p>
              Please wait while crops are loading.
            </p>

          </div>
        )}

        {/* ERROR */}
        {!loading && error && (
          <div className="no-crop-found">

            <div className="no-crop-icon">
              ⚠️
            </div>

            <h3>
              Unable to Load Crops
            </h3>

            <p>
              {error}
            </p>

          </div>
        )}

        {/* RESULT COUNT */}
        {!loading && !error && (
          <div className="crop-result-header">

            <h3>
              Available Crops
            </h3>

            <span>
              {filteredCrops.length} Crops
            </span>

          </div>
        )}

        {/* CROP RESULTS */}
        {!loading &&
          !error &&
          filteredCrops.length > 0 && (

            <div className="crop-search-results">

              {filteredCrops.map((crop) => {

                const isFavourite =
                  favouriteCrops.includes(crop.name);

                return (

                  <div
                    className="crop-result-card"
                    key={crop.id || crop.name}
                  >

                    {/* CROP IMAGE */}
                    <div className="crop-result-image">

                      <img
                        src={crop.image}
                        alt={crop.name}
                        onError={(e) => {
                          e.currentTarget.style.display =
                            "none";
                        }}
                      />

                    </div>

                    {/* CROP INFORMATION */}
                    <div className="crop-result-info">

                      <h3>
                        {crop.name}
                      </h3>

                      <p>
                        {crop.category || "Crop"}
                      </p>

                      <strong>
                        {crop.description ||
                          "Available crop"}
                      </strong>

                      <span className="crop-market">
                        🌾 Available in AgriOrbit
                      </span>

                    </div>

                    {/* ACTION BUTTONS */}
                    <div className="crop-card-actions">

                      {/* FAVOURITE */}
                      <button
                        type="button"
                        className={
                          isFavourite
                            ? "crop-favourite-button active"
                            : "crop-favourite-button"
                        }
                        onClick={() =>
                          onToggleFavourite(crop.name)
                        }
                      >
                        {isFavourite
                          ? "⭐ Favourite"
                          : "☆ Add Favourite"}
                      </button>

                      {/* VIEW DETAILS */}
                      <button
                        type="button"
                        className="crop-view-button"
                        onClick={() =>
                          onViewDetails(crop)
                        }
                      >
                        View Details
                      </button>

                    </div>

                  </div>

                );
              })}

            </div>
          )}

        {/* NO RESULT */}
        {!loading &&
          !error &&
          filteredCrops.length === 0 && (

            <div className="no-crop-found">

              <div className="no-crop-icon">
                🌱
              </div>

              <h3>
                No Crop Found
              </h3>

              <p>
                Try searching with another crop name.
              </p>

            </div>
          )}

        {/* BACK BUTTON */}
        <div className="crop-search-back">

          <button
            type="button"
            onClick={onBackToDashboard}
          >
            ← Back to Dashboard
          </button>

        </div>

      </main>

    </div>
  );
}

export default CropSearch;