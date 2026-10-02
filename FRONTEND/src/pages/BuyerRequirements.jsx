import { useEffect, useState } from "react";

function BuyerRequirements({ onBackToDashboard }) {
  const [requirements, setRequirements] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://agri-orbit.onrender.com/api/buyer-requirements")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch buyer requirements");
        }

        return response.json();
      })
      .then((data) => {
        setRequirements(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(
          "Buyer requirements API error:",
          err
        );

        setError(
          "Unable to load buyer requirements from server."
        );

        setLoading(false);
      });
  }, []);

  const filteredRequirements = requirements.filter(
    (item) =>
      `${item.buyer} ${item.location} ${item.crop}`
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <div className="buyer-requirements-page">

      {/* Header */}
      <header className="buyer-requirements-header">
        <div>
          <h1>AgriOrbit 🌱</h1>
          <p>Buyer Requirements</p>
        </div>

        <div className="profile-icon">
          👨‍🌾
        </div>
      </header>

      {/* Main */}
      <main className="buyer-requirements-content">

        <div className="buyer-requirements-heading">
          <h2>📦 Buyer Requirements</h2>

          <p>
            Find buyers who are currently looking for your crops.
          </p>
        </div>

        {/* Loading */}
        {loading && (
          <div className="loading-container">
            <div className="loading-spinner"></div>

            <p>
              Loading buyer requirements...
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
              Unable to Load Requirements
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

        {/* Content */}
        {!loading && !error && (
          <>

            {/* Search */}
            <div className="buyer-requirements-search">

              <span>🔍</span>

              <input
                type="text"
                placeholder="Search buyer, crop or location..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
              />

            </div>

            {/* Count */}
            <div className="buyer-requirements-count">

              <h3>
                Available Requirements
              </h3>

              <span>
                {filteredRequirements.length} Requirements
              </span>

            </div>

            {/* Requirements */}
            {filteredRequirements.length > 0 ? (
              <div className="buyer-requirements-grid">

                {filteredRequirements.map(
                  (item) => (
                    <div
                      className="buyer-requirement-card"
                      key={item.id}
                    >

                      {/* Card Top */}
                      <div className="requirement-card-top">

                        <div className="requirement-buyer-icon">
                          👤
                        </div>

                        <div>
                          <h3>
                            {item.buyer}
                          </h3>

                          <p>
                            📍 {item.location}
                          </p>
                        </div>

                      </div>

                      {/* Crop */}
                      <div className="requirement-crop">

                        <div className="requirement-crop-icon">
                          🌾
                        </div>

                        <div>
                          <small>
                            Required Crop
                          </small>

                          <strong>
                            {item.crop}
                          </strong>
                        </div>

                      </div>

                      {/* Details */}
                      <div className="requirement-details">

                        <div>
                          <small>
                            Quantity
                          </small>

                          <strong>
                            {Number(
                              item.quantity_kg
                            ).toFixed(0)}{" "}
                            KG
                          </strong>
                        </div>

                        <div>
                          <small>
                            Expected Price
                          </small>

                          <strong>
                            ₹
                            {Number(
                              item.expected_price_per_kg
                            ).toFixed(2)}{" "}
                            / KG
                          </strong>
                        </div>

                      </div>

                      {/* Status */}
                      <div className="requirement-status">
                        🟢{" "}
                        {item.status ===
                        "active"
                          ? "Currently Buying"
                          : item.status}
                      </div>

                    </div>
                  )
                )}

              </div>
            ) : (
              <div className="no-requirements">

                <div>📦</div>

                <h3>
                  No Requirements Found
                </h3>

                <p>
                  Try searching with another
                  buyer, crop or location.
                </p>

              </div>
            )}

          </>
        )}

        {/* Back */}
        <div className="buyer-requirements-back">

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

export default BuyerRequirements;
