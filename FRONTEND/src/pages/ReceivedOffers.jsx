import { useEffect, useState } from "react";

function ReceivedOffers({
  buyer,
  onFarmerDetails,
  onBackToBuyerDashboard,
}) {
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [actionLoading, setActionLoading] = useState(null);

  const buyerId = buyer?.buyer_id || buyer?.id;

  // =========================================================
  // FETCH RECEIVED OFFERS
  // =========================================================

  const fetchReceivedOffers = async () => {
    if (!buyerId) {
      setError(
        "Buyer information not found. Please login again."
      );
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        `https://agri-orbit.onrender.com/api/crop-offers?buyer_id=${buyerId}`
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error ||
            "Failed to fetch received offers."
        );
      }

      const formattedOffers = data.map((offer) => ({
        id: offer.id,

        crop: offer.crop,

        quantity: Number(
          offer.quantity_kg
        ),

        price: Number(
          offer.offered_price_per_kg
        ),

        farmer:
          offer.farmer ||
          offer.farmer_name ||
          "Unknown Farmer",

        location:
          offer.location ||
          "Location not available",

        district:
          offer.district ||
          "District not available",

        status:
          offer.status === "pending"
            ? "Pending"
            : offer.status === "accepted"
            ? "Accepted"
            : offer.status === "rejected"
            ? "Rejected"
            : offer.status,

        date:
          offer.received_date ||
          offer.created_at ||
          null,
      }));

      setOffers(formattedOffers);
    } catch (err) {
      console.error(
        "Received offers error:",
        err
      );

      setError(
        err.message ||
          "Unable to load received offers."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReceivedOffers();
  }, [buyerId]);

  // =========================================================
  // FORMAT DATE
  // =========================================================

  const formatReceivedDate = (dateValue) => {
    if (!dateValue) {
      return "Date not available";
    }

    const date = new Date(dateValue);

    if (Number.isNaN(date.getTime())) {
      return "Date not available";
    }

    const today = new Date();

    const todayStart = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    );

    const receivedStart = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate()
    );

    const difference =
      todayStart.getTime() -
      receivedStart.getTime();

    const oneDay =
      24 * 60 * 60 * 1000;

    if (difference === 0) {
      return "Today";
    }

    if (difference === oneDay) {
      return "Yesterday";
    }

    if (
      difference > 0 &&
      difference < 7 * oneDay
    ) {
      const days = Math.floor(
        difference / oneDay
      );

      return `${days} days ago`;
    }

    return date.toLocaleDateString(
      "en-IN",
      {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }
    );
  };

  // =========================================================
  // UPDATE OFFER STATUS
  // =========================================================

  const updateOfferStatus = async (
    offer,
    newStatus
  ) => {
    if (!offer?.id) {
      alert("Offer ID not found.");
      return;
    }

    const actionText =
      newStatus === "accepted"
        ? "accept"
        : "reject";

    const confirmed = window.confirm(
      `Are you sure you want to ${actionText} this ${offer.crop} offer from ${offer.farmer}?`
    );

    if (!confirmed) {
      return;
    }

    try {
      setActionLoading(offer.id);
      setError("");

      const response = await fetch(
        `https://agri-orbit.onrender.com/api/crop-offers/${offer.id}/status`,
        {
          method: "PUT",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            status: newStatus,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error ||
            "Unable to update offer status."
        );
      }

      // Update UI immediately
      setOffers((previousOffers) =>
        previousOffers.map((item) =>
          item.id === offer.id
            ? {
                ...item,
                status:
                  newStatus === "accepted"
                    ? "Accepted"
                    : "Rejected",
              }
            : item
        )
      );

      alert(
        newStatus === "accepted"
          ? "Crop offer accepted successfully!"
          : "Crop offer rejected successfully!"
      );
    } catch (err) {
      console.error(
        "Offer status update error:",
        err
      );

      alert(
        err.message ||
          "Unable to update offer status."
      );
    } finally {
      setActionLoading(null);
    }
  };

  // =========================================================
  // ACCEPT / REJECT
  // =========================================================

  const handleAccept = (offer) => {
    updateOfferStatus(
      offer,
      "accepted"
    );
  };

  const handleReject = (offer) => {
    updateOfferStatus(
      offer,
      "rejected"
    );
  };

  // =========================================================
  // FILTER
  // =========================================================

  const filteredOffers =
    selectedStatus === "All"
      ? offers
      : offers.filter(
          (offer) =>
            offer.status === selectedStatus
        );

  const pendingCount = offers.filter(
    (offer) =>
      offer.status === "Pending"
  ).length;

  const acceptedCount = offers.filter(
    (offer) =>
      offer.status === "Accepted"
  ).length;

  const rejectedCount = offers.filter(
    (offer) =>
      offer.status === "Rejected"
  ).length;

  // =========================================================
  // LOADING
  // =========================================================

  if (loading) {
    return (
      <div className="received-offers-page">

        <header className="received-offers-header">

          <div>
            <h1>AgriOrbit 🌱</h1>
            <p>Received Offers</p>
          </div>

          <div className="buyer-profile-icon">
            🏪
          </div>

        </header>

        <main className="received-offers-content">

          <div className="no-received-offers">

            <div className="no-received-offers-icon">
              ⏳
            </div>

            <h3>
              Loading Received Offers...
            </h3>

            <p>
              Please wait.
            </p>

          </div>

        </main>

      </div>
    );
  }

  // =========================================================
  // ERROR
  // =========================================================

  if (error) {
    return (
      <div className="received-offers-page">

        <header className="received-offers-header">

          <div>
            <h1>AgriOrbit 🌱</h1>
            <p>Received Offers</p>
          </div>

          <div className="buyer-profile-icon">
            🏪
          </div>

        </header>

        <main className="received-offers-content">

          <div className="no-received-offers">

            <div className="no-received-offers-icon">
              ⚠️
            </div>

            <h3>
              Unable to Load Offers
            </h3>

            <p>
              {error}
            </p>

          </div>

          <div className="received-offers-back-section">

            <button
              type="button"
              className="back-dashboard-button"
              onClick={
                onBackToBuyerDashboard
              }
            >
              ← Back to Buyer Dashboard
            </button>

          </div>

        </main>

      </div>
    );
  }

  // =========================================================
  // MAIN PAGE
  // =========================================================

  return (
    <div className="received-offers-page">

      {/* Header */}
      <header className="received-offers-header">

        <div>
          <h1>AgriOrbit 🌱</h1>

          <p>
            Received Offers
          </p>
        </div>

        <div className="buyer-profile-icon">
          🏪
        </div>

      </header>

      {/* Main */}
      <main className="received-offers-content">

        {/* Heading */}
        <div className="received-offers-heading">

          <div>

            <h2>
              📩 Received Crop Offers
            </h2>

            <p>
              Review offers received from farmers.
            </p>

          </div>

          <span className="received-offers-count">
            {filteredOffers.length} Offers
          </span>

        </div>

        {/* Summary */}
        <section className="received-offer-summary">

          <div className="received-summary-card">

            <span>
              Total Offers
            </span>

            <strong>
              {offers.length}
            </strong>

          </div>

          <div className="received-summary-card">

            <span>
              Pending
            </span>

            <strong>
              {pendingCount}
            </strong>

          </div>

          <div className="received-summary-card">

            <span>
              Accepted
            </span>

            <strong>
              {acceptedCount}
            </strong>

          </div>

          <div className="received-summary-card">

            <span>
              Rejected
            </span>

            <strong>
              {rejectedCount}
            </strong>

          </div>

        </section>

        {/* Filters */}
        <div className="received-offer-filters">

          <button
            type="button"
            className={
              selectedStatus === "All"
                ? "received-filter active"
                : "received-filter"
            }
            onClick={() =>
              setSelectedStatus("All")
            }
          >
            All
          </button>

          <button
            type="button"
            className={
              selectedStatus === "Pending"
                ? "received-filter active"
                : "received-filter"
            }
            onClick={() =>
              setSelectedStatus("Pending")
            }
          >
            🟡 Pending
          </button>

          <button
            type="button"
            className={
              selectedStatus === "Accepted"
                ? "received-filter active"
                : "received-filter"
            }
            onClick={() =>
              setSelectedStatus("Accepted")
            }
          >
            🟢 Accepted
          </button>

          <button
            type="button"
            className={
              selectedStatus === "Rejected"
                ? "received-filter active"
                : "received-filter"
            }
            onClick={() =>
              setSelectedStatus("Rejected")
            }
          >
            🔴 Rejected
          </button>

        </div>

        {/* Offers */}
        <section className="received-offers-list">

          {filteredOffers.length > 0 ? (

            filteredOffers.map((offer) => (

              <div
                className="received-offer-card"
                key={offer.id}
              >

                {/* Crop */}
                <div className="received-crop-section">

                  <div className="received-crop-image-box">

                    <img
                      src={`/image/${offer.crop}.png`}
                      alt={offer.crop}
                      className="received-crop-image"
                      onError={(e) => {
                        e.currentTarget.style.display =
                          "none";
                      }}
                    />

                  </div>

                  <div>

                    <h3>
                      {offer.crop}
                    </h3>

                    <p>
                      Quantity
                    </p>

                    <strong>
                      {offer.quantity} KG
                    </strong>

                  </div>

                </div>

                {/* Price */}
                <div className="received-price-section">

                  <span>
                    Farmer Offer
                  </span>

                  <strong>
                    ₹{offer.price.toFixed(2)} / KG
                  </strong>

                  <small>
                    Total ₹
                    {(
                      offer.quantity *
                      offer.price
                    ).toLocaleString(
                      "en-IN"
                    )}
                  </small>

                </div>

                {/* Farmer */}
                <div className="received-farmer-section">

                  <span>
                    Farmer
                  </span>

                  <strong>
                    👨‍🌾 {offer.farmer}
                  </strong>

                  <small>
                    📍 {offer.location},{" "}
                    {offer.district}
                  </small>

                  <button
                    type="button"
                    className="view-farmer-button"
                    onClick={() =>
                      onFarmerDetails(offer)
                    }
                  >
                    View Farmer
                  </button>

                </div>

                {/* Status */}
                <div className="received-status-section">

                  {offer.status === "Pending" && (
                    <>

                      <span className="received-pending-status">
                        🟡 Pending
                      </span>

                      <div className="received-offer-actions">

                        <button
                          type="button"
                          className="accept-offer-button"
                          disabled={
                            actionLoading ===
                            offer.id
                          }
                          onClick={() =>
                            handleAccept(offer)
                          }
                        >
                          {actionLoading ===
                          offer.id
                            ? "Processing..."
                            : "✓ Accept"}
                        </button>

                        <button
                          type="button"
                          className="reject-offer-button"
                          disabled={
                            actionLoading ===
                            offer.id
                          }
                          onClick={() =>
                            handleReject(offer)
                          }
                        >
                          {actionLoading ===
                          offer.id
                            ? "Processing..."
                            : "✕ Reject"}
                        </button>

                      </div>

                    </>
                  )}

                  {offer.status === "Accepted" && (
                    <span className="received-accepted-status">
                      🟢 Accepted
                    </span>
                  )}

                  {offer.status === "Rejected" && (
                    <span className="received-rejected-status">
                      🔴 Rejected
                    </span>
                  )}

                  <small>
                    Received{" "}
                    {formatReceivedDate(
                      offer.date
                    )}
                  </small>

                </div>

              </div>

            ))

          ) : (

            <div className="no-received-offers">

              <div className="no-received-offers-icon">
                📩
              </div>

              <h3>
                No {selectedStatus} Offers
              </h3>

              <p>
                There are no offers with this status.
              </p>

            </div>

          )}

        </section>

        {/* Back */}
        <div className="received-offers-back-section">

          <button
            type="button"
            className="back-dashboard-button"
            onClick={
              onBackToBuyerDashboard
            }
          >
            ← Back to Buyer Dashboard
          </button>

        </div>

      </main>

    </div>
  );
}

export default ReceivedOffers;