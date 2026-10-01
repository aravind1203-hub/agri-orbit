import { useState } from "react";

function SendCropOffer({
  buyer,
  farmer,
  onBack,
}) {
  const [crop, setCrop] = useState("");
  const [market, setMarket] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const crops = [
    { id: 1, name: "Tomato" },
    { id: 2, name: "Onion" },
    { id: 3, name: "Potato" },
    { id: 4, name: "Brinjal" },
    { id: 5, name: "Carrot" },
    { id: 6, name: "Cabbage" },
    { id: 7, name: "Banana" },
    { id: 8, name: "Green Chilli" },
  ];

  const markets = [
    { id: 1, name: "Villupuram Market" },
    { id: 2, name: "Cuddalore Market" },
    { id: 3, name: "Tindivanam Market" },
    { id: 4, name: "Puducherry Market" },
    { id: 5, name: "Koyambedu Market" },
    { id: 6, name: "Vellore Market" },
    { id: 7, name: "Coimbatore Market" },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    if (!crop || !market || !quantity || !price) {
      setError("Please fill all required fields.");
      return;
    }

    if (!farmer || !farmer.id) {
      setError(
        "Farmer information not found. Please login again."
      );
      return;
    }

    if (!buyer || !buyer.id) {
      setError(
        "Buyer information not found. Please select the buyer again."
      );
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "http://10.19.77.40:5000/api/crop-offers",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            farmer_id: farmer.farmer_id || farmer.id,
            buyer_id: buyer.id,
            crop_id: Number(crop),
            quantity_kg: Number(quantity),
            offered_price_per_kg: Number(price),
            market_id: Number(market),
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error ||
          "Unable to send crop offer."
        );
      }

      console.log(
        "Crop offer created:",
        data
      );

      alert(
        `Crop Offer Sent Successfully! 🎉\n\n` +
        `Buyer: ${buyer.name}\n` +
        `Crop: ${
          crops.find(
            (item) =>
              item.id === Number(crop)
          )?.name
        }\n` +
        `Market: ${
          markets.find(
            (item) =>
              item.id === Number(market)
          )?.name
        }\n` +
        `Quantity: ${quantity} KG\n` +
        `Price: ₹${price} / KG`
      );

      setCrop("");
      setMarket("");
      setQuantity("");
      setPrice("");
      setMessage("");
      setError("");

    } catch (err) {
      console.error(
        "Crop offer API error:",
        err
      );

      setError(
        err.message ||
        "Unable to send crop offer."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="send-offer-page">

      {/* Header */}
      <header className="send-offer-header">

        <div>
          <h1>AgriOrbit 🌱</h1>
          <p>Send Crop Offer</p>
        </div>

        <div className="profile-icon">
          👨‍🌾
        </div>

      </header>

      {/* Content */}
      <section className="send-offer-content">

        <div className="send-offer-card">

          <h2>📤 Send Crop Offer</h2>

          <p className="send-offer-subtitle">
            Send your crop offer to{" "}
            {buyer?.name}
          </p>

          {/* Buyer Information */}
          <div className="offer-buyer-box">

            <strong>Buyer</strong>
            <span>
              {buyer?.name}
            </span>

            <strong>Location</strong>
            <span>
              {buyer?.location}
            </span>

            <strong>Requirement</strong>
            <span>
              {buyer?.requirement}
            </span>

          </div>

          {/* Error */}
          {error && (
            <div
              style={{
                background: "#fdeaea",
                color: "#dc3545",
                padding: "10px 12px",
                borderRadius: "8px",
                fontSize: "13px",
                marginBottom: "15px",
              }}
            >
              {error}
            </div>
          )}

          {/* Offer Form */}
          <form onSubmit={handleSubmit}>

            {/* Crop */}
            <div className="offer-form-group">

              <label>
                🌾 Crop
              </label>

              <select
                value={crop}
                onChange={(e) => {
                  setCrop(e.target.value);
                  setError("");
                }}
              >

                <option value="">
                  Select Crop
                </option>

                {crops.map((item) => (
                  <option
                    key={item.id}
                    value={item.id}
                  >
                    {item.name}
                  </option>
                ))}

              </select>

            </div>

            {/* Market */}
            <div className="offer-form-group">

              <label>
                🏪 Market
              </label>

              <select
                value={market}
                onChange={(e) => {
                  setMarket(e.target.value);
                  setError("");
                }}
              >

                <option value="">
                  Select Market
                </option>

                {markets.map((item) => (
                  <option
                    key={item.id}
                    value={item.id}
                  >
                    {item.name}
                  </option>
                ))}

              </select>

            </div>

            {/* Quantity */}
            <div className="offer-form-group">

              <label>
                📦 Quantity (KG)
              </label>

              <input
                type="number"
                placeholder="Enter quantity"
                min="1"
                value={quantity}
                onChange={(e) => {
                  setQuantity(
                    e.target.value
                  );
                  setError("");
                }}
              />

            </div>

            {/* Price */}
            <div className="offer-form-group">

              <label>
                💰 Price (₹ / KG)
              </label>

              <input
                type="number"
                placeholder="Enter price per KG"
                min="1"
                step="0.01"
                value={price}
                onChange={(e) => {
                  setPrice(
                    e.target.value
                  );
                  setError("");
                }}
              />

            </div>

            {/* Message */}
            <div className="offer-form-group">

              <label>
                📝 Message
              </label>

              <textarea
                placeholder="Enter your message..."
                value={message}
                onChange={(e) =>
                  setMessage(
                    e.target.value
                  )
                }
              />

            </div>

            {/* Submit */}
            <button
              type="submit"
              className="submit-offer-button"
              disabled={loading}
            >
              {loading
                ? "⏳ Sending..."
                : "📤 Send Crop Offer"}
            </button>

          </form>

          {/* Back */}
          <button
            type="button"
            className="back-dashboard-button"
            onClick={onBack}
            disabled={loading}
          >
            ← Back to Buyer
          </button>

        </div>

      </section>

    </div>
  );
}

export default SendCropOffer;
