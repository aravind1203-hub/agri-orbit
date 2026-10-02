import { useEffect, useState } from "react";

function MyRequirements({
  onBackToBuyerDashboard,
  buyer,
}) {
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [requirements, setRequirements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const buyerId = buyer?.id;

    if (!buyerId) {
      setError(
        "Buyer information not found. Please login again."
      );
      setLoading(false);
      return;
    }

    fetch(
      `https://agri-orbit.onrender.com/api/buyer-requirements?buyer_id=${buyerId}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            "Failed to fetch buyer requirements."
          );
        }

        return response.json();
      })
      .then((data) => {
        setRequirements(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(
          "My Requirements API error:",
          err
        );

        setError(
          "Unable to load your requirements."
        );

        setLoading(false);
      });
  }, [buyer]);

  const filteredRequirements =
    selectedStatus === "All"
      ? requirements
      : requirements.filter(
          (requirement) =>
            requirement.status?.toLowerCase() ===
            selectedStatus.toLowerCase()
        );

  return (
    <div className="my-requirements-page">

      {/* Header */}
      <header className="my-requirements-header">

        <div>
          <h1>AgriOrbit 🌱</h1>
          <p>My Requirements</p>
        </div>

        <div className="buyer-profile-icon">
          🏪
        </div>

      </header>

      {/* Main Content */}
      <main className="my-requirements-content">

        {/* Heading */}
        <div className="requirements-heading">

          <div>
            <h2>📋 My Crop Requirements</h2>

            <p>
              View and manage your posted crop requirements.
            </p>
          </div>

          {!loading && !error && (
            <span className="requirements-count">
              {filteredRequirements.length} Requirements
            </span>
          )}

        </div>

        {/* Filters */}
        {!loading && !error && (
          <div className="requirements-filters">

            <button
              type="button"
              className={
                selectedStatus === "All"
                  ? "requirement-filter active"
                  : "requirement-filter"
              }
              onClick={() => setSelectedStatus("All")}
            >
              All
            </button>

            <button
              type="button"
              className={
                selectedStatus === "Active"
                  ? "requirement-filter active"
                  : "requirement-filter"
              }
              onClick={() => setSelectedStatus("Active")}
            >
              🟢 Active
            </button>

            <button
              type="button"
              className={
                selectedStatus === "Completed"
                  ? "requirement-filter active"
                  : "requirement-filter"
              }
              onClick={() => setSelectedStatus("Completed")}
            >
              🔵 Completed
            </button>

            <button
              type="button"
              className={
                selectedStatus === "Closed"
                  ? "requirement-filter active"
                  : "requirement-filter"
              }
              onClick={() => setSelectedStatus("Closed")}
            >
              🔴 Closed
            </button>

          </div>
        )}

        {/* Loading */}
        {loading && (
          <div className="no-requirements">

            <div className="no-requirements-icon">
              ⏳
            </div>

            <h3>
              Loading Requirements...
            </h3>

            <p>
              Please wait while we load your requirements.
            </p>

          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="no-requirements">

            <div className="no-requirements-icon">
              ⚠️
            </div>

            <h3>
              Unable to Load Requirements
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

        {/* Requirements */}
        {!loading &&
          !error &&
          filteredRequirements.length > 0 && (

            <div className="requirements-list">

              {filteredRequirements.map(
                (requirement) => (

                  <div
                    className="requirement-card"
                    key={requirement.id}
                  >

                    {/* Crop Image */}
                    <div className="requirement-crop-image-box">

                      <img
                        src={`/image/${requirement.crop}.png`}
                        alt={requirement.crop}
                        className="requirement-crop-image"
                        onError={(e) => {
                          e.currentTarget.style.display =
                            "none";
                        }}
                      />

                    </div>

                    {/* Crop Information */}
                    <div className="requirement-main-info">

                      <h3>
                        {requirement.crop}
                      </h3>

                      <p>
                        Required Quantity
                      </p>

                      <strong>
                        {Number(
                          requirement.quantity_kg
                        ).toLocaleString()}{" "}
                        KG
                      </strong>

                    </div>

                    {/* Price */}
                    <div className="requirement-price-info">

                      <span>
                        Expected Price
                      </span>

                      <strong>
                        ₹
                        {Number(
                          requirement.expected_price_per_kg
                        ).toFixed(2)}{" "}
                        / KG
                      </strong>

                    </div>

                    {/* Location */}
                    <div className="requirement-location-info">

                      <span>
                        Collection Location
                      </span>

                      <strong>
                        📍 {requirement.location}
                      </strong>

                      <small>
                        {requirement.district}
                      </small>

                    </div>

                    {/* Status */}
                    <div className="requirement-status-info">

                      <span
                        className={
                          requirement.status?.toLowerCase() ===
                          "active"
                            ? "requirement-status active-status"
                            : requirement.status?.toLowerCase() ===
                              "completed"
                            ? "requirement-status completed-status"
                            : "requirement-status closed-status"
                        }
                      >
                        {requirement.status?.toLowerCase() ===
                          "active" && "🟢 "}

                        {requirement.status?.toLowerCase() ===
                          "completed" && "🔵 "}

                        {requirement.status?.toLowerCase() ===
                          "closed" && "🔴 "}

                        {requirement.status}
                      </span>

                      <small>
                        Posted{" "}
                        {requirement.created_at
                          ? new Date(
                              requirement.created_at
                            ).toLocaleDateString()
                          : "Recently"}
                      </small>

                    </div>

                  </div>

                )
              )}

            </div>
          )}

        {/* No Requirements */}
        {!loading &&
          !error &&
          filteredRequirements.length === 0 && (

            <div className="no-requirements">

              <div className="no-requirements-icon">
                📋
              </div>

              <h3>
                No {selectedStatus} Requirements
              </h3>

              <p>
                You don't have any requirements with
                this status.
              </p>

            </div>
          )}

        {/* Back */}
        <div className="my-requirements-back-section">

          <button
            type="button"
            className="back-dashboard-button"
            onClick={onBackToBuyerDashboard}
          >
            ← Back to Buyer Dashboard
          </button>

        </div>

      </main>

    </div>
  );
}

export default MyRequirements;
