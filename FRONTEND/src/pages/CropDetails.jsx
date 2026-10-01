function CropDetails({ crop, onBack }) {
  if (!crop) {
    return (
      <div className="crop-details-page">
        <div className="crop-details-empty">
          <h2>Crop details not found</h2>

          
        </div>
      </div>
    );
  }

  return (
    <div className="crop-details-page">

      {/* =========================
          HEADER
      ========================= */}

      <header className="crop-details-header">

        <div>
          <h1>AgriOrbit 🌱</h1>
          <p>Crop Details</p>
        </div>

        <div className="profile-icon">
          👨‍🌾
        </div>

      </header>


      {/* =========================
          MAIN CONTENT
      ========================= */}

      <main className="crop-details-content">

        <div className="crop-details-top">

         

        </div>


        {/* =========================
            DETAILS CARD
        ========================= */}

        <div className="crop-details-card">

          {/* Crop Image */}

          <div className="crop-details-image-box">

            <img
              src={crop.image}
              alt={crop.name}
              className="crop-details-image"
            />

          </div>


          {/* Crop Information */}

          <div className="crop-details-info">

            <span className="crop-details-label">
              CROP
            </span>

            <h2>
              {crop.name}
            </h2>

            <p className="crop-details-description">
              Current market information for {crop.name}.
            </p>


            {/* Price */}

            <div className="crop-price-box">

              <span>
                Today's Market Price
              </span>

              <strong>
                {crop.price}
              </strong>

            </div>


            {/* Market */}

            <div className="crop-market-box">

              <span>
                📍 Market
              </span>

              <strong>
                {crop.market}
              </strong>

            </div>

          </div>

        </div>


        {/* =========================
            PRICE INFORMATION
        ========================= */}

        <section className="crop-price-section">

          <h3>
            💰 Price Information
          </h3>

          <p>
            Today's available market price for {crop.name}.
          </p>


          <div className="crop-price-summary">

            <div className="price-summary-card">

              <span>
                Today's Price
              </span>

              <strong>
                {crop.price}
              </strong>

            </div>


            <div className="price-summary-card">

              <span>
                Market
              </span>

              <strong>
                {crop.market}
              </strong>

            </div>


            <div className="price-summary-card">

              <span>
                Price Status
              </span>

              <strong className="price-status">
                🟢 Available
              </strong>

            </div>

          </div>

        </section>


        {/* =========================
            BACK BUTTON
        ========================= */}

        <div className="crop-details-bottom">

          <button
            type="button"
            onClick={onBack}
          >
            ← Back to Crop Search
          </button>

        </div>

      </main>

    </div>
  );
}

export default CropDetails;