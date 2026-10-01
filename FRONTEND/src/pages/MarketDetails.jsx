function MarketDetails({ market, onBack }) {
  /*
    Market price comes from the backend data
    passed through the selected market object.
  */
  const displayPrice =
    typeof market.price === "number"
      ? `₹${market.price.toFixed(2)} / KG`
      : market.price || "Price not available";

  const handleContactMarket = () => {
    if (!market.phone) {
      alert(
        `Phone number is not available for ${market.name}.`
      );
      return;
    }

    window.location.href = `tel:${market.phone}`;
  };

  return (
    <div className="market-details-page">

      {/* Header */}
      <header className="market-details-header">

        <div>
          <h1>AgriOrbit 🌱</h1>
          <p>Market Details</p>
        </div>

        <div className="profile-icon">
          👨‍🌾
        </div>

      </header>

      {/* Content */}
      <section className="market-details-content">

        <div className="market-details-card">

          {/* Market Icon */}
          <div className="market-details-icon">
            🏪
          </div>

          {/* Market Name */}
          <h2>
            {market.name}
          </h2>

          {/* Market Information */}
          <div className="market-details-info">

            {/* Location */}
            <div className="market-detail-item">

              <span>📍</span>

              <div>
                <small>
                  Location
                </small>

                <strong>
                  {market.location}
                </strong>
              </div>

            </div>

            {/* Crop */}
            <div className="market-detail-item">

              <span>🌾</span>

              <div>
                <small>
                  Crop
                </small>

                <strong>
                  {market.crop || "N/A"}
                </strong>
              </div>

            </div>

            {/* Current Price */}
            <div className="market-detail-item">

              <span>💰</span>

              <div>
                <small>
                  Current Price
                </small>

                <strong>
                  {displayPrice}
                </strong>
              </div>

            </div>

            {/* Distance */}
            <div className="market-detail-item">

              <span>🚗</span>

              <div>
                <small>
                  Distance
                </small>

                <strong>
                  {market.distance || "N/A"}
                </strong>
              </div>

            </div>

          </div>

          {/* Market Information */}
          <div className="market-info-box">

            <h3>
              Market Information
            </h3>

            <p>
              This market provides crop buying
              and selling facilities for farmers.
            </p>

            <p>
              Farmers can check the current crop
              price and contact the market for
              more information.
            </p>

          </div>

          {/* Actions */}
          <div className="market-details-actions">

            {/* Contact Market */}
            <button
              type="button"
              className="contact-market-button"
              onClick={handleContactMarket}
            >
              📞 Contact Market
            </button>

            {/* View Location */}
            <button
              type="button"
              className="view-location-button"
              onClick={() => {
                window.open(
                  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    `${market.name}, ${market.location}`
                  )}`,
                  "_blank"
                );
              }}
            >
              📍 View Location
            </button>

          </div>

          {/* Back */}
          <button
            type="button"
            className="back-dashboard-button"
            onClick={onBack}
          >
            ← Back
          </button>

        </div>

      </section>

    </div>
  );
}

export default MarketDetails;
