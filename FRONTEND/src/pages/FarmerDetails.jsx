import { useEffect, useState } from "react";

function FarmerDetails({
  farmer,
  onBackToReceivedOffers,
}) {
  const [farmerDetails, setFarmerDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const farmerId =
    farmer?.farmer_id ||
    farmer?.farmerId ||
    farmer?.id;

  // =========================================================
  // FETCH FARMER DETAILS
  // =========================================================

  useEffect(() => {
    const fetchFarmerDetails = async () => {
      if (!farmerId) {
        setError("Farmer information not found.");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `https://agri-orbit.onrender.com/api/farmers/${farmerId}`
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data.error ||
              "Failed to fetch farmer details."
          );
        }

        setFarmerDetails(data);
      } catch (err) {
        console.error(
          "Farmer details error:",
          err
        );

        setError(
          err.message ||
            "Unable to load farmer details."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchFarmerDetails();
  }, [farmerId]);

  // =========================================================
  // LOADING
  // =========================================================

  if (loading) {
    return (
      <div className="farmer-details-page">

        <header className="farmer-details-header">
          <div>
            <h1>AgriOrbit 🌱</h1>
            <p>Farmer Details</p>
          </div>

          <div className="buyer-profile-icon">
            🏪
          </div>
        </header>

        <main className="farmer-details-content">

          <div className="farmer-details-card">

            <div
              style={{
                textAlign: "center",
                padding: "50px 20px",
              }}
            >
              <h3>⏳ Loading Farmer Details...</h3>
              <p>
                Please wait while we fetch the
                farmer information.
              </p>
            </div>

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
      <div className="farmer-details-page">

        <header className="farmer-details-header">
          <div>
            <h1>AgriOrbit 🌱</h1>
            <p>Farmer Details</p>
          </div>

          <div className="buyer-profile-icon">
            🏪
          </div>
        </header>

        <main className="farmer-details-content">

          <div className="farmer-details-card">

            <div
              style={{
                textAlign: "center",
                padding: "50px 20px",
              }}
            >
              <h3>❌ Unable to Load Farmer</h3>

              <p
                style={{
                  color: "#dc3545",
                  marginBottom: "20px",
                }}
              >
                {error}
              </p>

              <button
                type="button"
                className="back-dashboard-button"
                onClick={onBackToReceivedOffers}
              >
                ← Back to Received Offers
              </button>
            </div>

          </div>

        </main>
      </div>
    );
  }

  // =========================================================
  // OFFER DATA
  // =========================================================

  const selectedOffer = farmer || {};

  const offerCrop =
    selectedOffer.crop || "Crop not available";

  const offerQuantity =
    Number(selectedOffer.quantity) || 0;

  const offerPrice =
    Number(selectedOffer.price) || 0;

  const totalValue =
    offerQuantity * offerPrice;

  // =========================================================
  // CONTACT FARMER
  // =========================================================

  const handleContactFarmer = () => {
    if (!farmerDetails?.mobile) {
      alert("Farmer mobile number not available.");
      return;
    }

    window.location.href =
      `tel:+91${farmerDetails.mobile}`;
  };

  return (
    <div className="farmer-details-page">

      {/* Header */}
      <header className="farmer-details-header">

        <div>
          <h1>AgriOrbit 🌱</h1>
          <p>Farmer Details</p>
        </div>

        <div className="buyer-profile-icon">
          🏪
        </div>

      </header>

      {/* Main Content */}
      <main className="farmer-details-content">

        <div className="farmer-details-card">

          {/* Profile */}
          <div className="farmer-details-profile">

            <div className="farmer-avatar">
              👨‍🌾
            </div>

            <h2>
              {farmerDetails.name}
            </h2>

            <p>
              Farmer
            </p>

            <span className="farmer-rating">
              ⭐ 4.7 Rating
            </span>

          </div>

          {/* Farmer Information */}
          <section className="farmer-info-section">

            <h3>
              👤 Farmer Information
            </h3>

            <div className="farmer-info-grid">

              <div className="farmer-info-item">
                <span>📍 Location</span>

                <strong>
                  {farmerDetails.location ||
                    "Not available"}
                </strong>
              </div>

              <div className="farmer-info-item">
                <span>🏙️ District</span>

                <strong>
                  {farmerDetails.district ||
                    "Not available"}
                </strong>
              </div>

              <div className="farmer-info-item">
                <span>📱 Mobile</span>

                <strong>
                  {farmerDetails.mobile ||
                    "Not available"}
                </strong>
              </div>

              <div className="farmer-info-item">
                <span>📧 Email</span>

                <strong>
                  {farmerDetails.email ||
                    "Not available"}
                </strong>
              </div>

              <div className="farmer-info-item">
                <span>🌾 Main Crops</span>

                <strong>
                  {farmerDetails.crops_grown ||
                    "Not available"}
                </strong>
              </div>

              <div className="farmer-info-item">
                <span>🏘️ Village</span>

                <strong>
                  {farmerDetails.village ||
                    "Not available"}
                </strong>
              </div>

            </div>

          </section>

          {/* Offer Details */}
          <section className="farmer-offer-section">

            <h3>
              📦 Offer Details
            </h3>

            <div className="farmer-offer-box">

              <div>
                <span>Crop</span>

                <strong>
                  {offerCrop}
                </strong>
              </div>

              <div>
                <span>Quantity</span>

                <strong>
                  {offerQuantity} KG
                </strong>
              </div>

              <div>
                <span>Offer Price</span>

                <strong className="farmer-offer-price">
                  ₹{offerPrice} / KG
                </strong>
              </div>

              <div>
                <span>Total Value</span>

                <strong>
                  ₹
                  {totalValue.toLocaleString(
                    "en-IN"
                  )}
                </strong>
              </div>

            </div>

          </section>

          {/* Farmer Profile */}
          <section className="farmer-experience-section">

            <h3>
              ⭐ Farmer Profile
            </h3>

            <div className="farmer-experience-grid">

              <div>
                <strong>4.7</strong>
                <span>Rating</span>
              </div>

              <div>
                <strong>28</strong>
                <span>Successful Offers</span>
              </div>

              <div>
                <strong>3+</strong>
                <span>Years Experience</span>
              </div>

            </div>

          </section>

          {/* Actions */}
          <div className="farmer-details-actions">

            <button
              type="button"
              className="contact-farmer-button"
              onClick={handleContactFarmer}
            >
              📞 Contact Farmer
            </button>

            <button
              type="button"
              className="back-dashboard-button"
              onClick={onBackToReceivedOffers}
            >
              ← Back to Received Offers
            </button>

          </div>

        </div>

      </main>

    </div>
  );
}

export default FarmerDetails;