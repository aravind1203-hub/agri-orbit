function BuyerDetails({
  buyer,
  onBackToBuyers,
  onSendCropOffer,
}) {
  if (!buyer) {
    return (
      <div className="buyer-details-page">
        <div className="buyer-details-empty">

          <h2>
            Buyer Not Found
          </h2>

          <button
            type="button"
            onClick={onBackToBuyers}
          >
            ← Back to Buyers
          </button>

        </div>
      </div>
    );
  }

  /* =========================================================
     CONTACT BUYER
  ========================================================= */

  const handleContactBuyer = () => {
    if (!buyer.mobile) {
      alert(
        `Phone number is not available for ${buyer.name}.`
      );
      return;
    }

    window.location.href = `tel:+91${buyer.mobile}`;
  };

  return (
    <div className="buyer-details-page">

      {/* Header */}
      <header className="buyer-details-header">

        <div>
          <h1>
            AgriOrbit 🌱
          </h1>

          <p>
            Buyer Details
          </p>
        </div>

        <div className="profile-icon">
          👨‍🌾
        </div>

      </header>

      {/* Main Content */}
      <main className="buyer-details-content">

        {/* Back */}
        <button
          type="button"
          className="buyer-details-back"
          onClick={onBackToBuyers}
        >
          ← Back to Buyers
        </button>

        {/* Buyer Profile Card */}
        <section className="buyer-profile-card">

          <div className="buyer-profile-top">

            <div className="buyer-profile-icon">
              👤
            </div>

            <div className="buyer-profile-title">

              <h2>
                {buyer.name}
              </h2>

              <div className="buyer-profile-rating">
                ⭐ {buyer.rating}
              </div>

            </div>

          </div>

          {/* Buyer Information */}
          <div className="buyer-details-info">

            {/* Location */}
            <div className="buyer-detail-item">

              <span className="buyer-detail-icon">
                📍
              </span>

              <div>
                <small>
                  Location
                </small>

                <strong>
                  {buyer.location}
                </strong>
              </div>

            </div>

            {/* Interested Crops */}
            <div className="buyer-detail-item">

              <span className="buyer-detail-icon">
                🌾
              </span>

              <div>
                <small>
                  Interested Crops
                </small>

                <strong>
                  {buyer.crops}
                </strong>
              </div>

            </div>

            {/* Requirement */}
            <div className="buyer-detail-item">

              <span className="buyer-detail-icon">
                📦
              </span>

              <div>
                <small>
                  Current Requirement
                </small>

                <strong>
                  {buyer.requirement}
                </strong>
              </div>

            </div>

            {/* Mobile Number */}
            <div className="buyer-detail-item">

              <span className="buyer-detail-icon">
                📞
              </span>

              <div>
                <small>
                  Mobile
                </small>

                <strong>
                  {buyer.mobile || "Not available"}
                </strong>
              </div>

            </div>

          </div>

          {/* Actions */}
          <div className="buyer-details-actions">

            {/* Contact Buyer */}
            <button
              type="button"
              className="contact-buyer-button"
              onClick={handleContactBuyer}
            >
              📞 Contact Buyer
            </button>

            {/* Send Crop Offer */}
            <button
              type="button"
              className="send-offer-button"
              onClick={() =>
                onSendCropOffer(buyer)
              }
            >
              🌱 Send Crop Offer
            </button>

          </div>

        </section>

      </main>

    </div>
  );
}

export default BuyerDetails;