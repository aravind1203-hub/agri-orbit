import { useState } from "react";

function PostRequirement({ onBackToBuyerDashboard }) {
  const [crop, setCrop] = useState("Tomato");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [district, setDistrict] = useState("Villupuram");
  const [deliveryLocation, setDeliveryLocation] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !crop ||
      !quantity ||
      !price ||
      !district ||
      !deliveryLocation
    ) {
      alert("Please fill all required fields");
      return;
    }

    alert("Crop requirement posted successfully!");

    setQuantity("");
    setPrice("");
    setDeliveryLocation("");
    setDescription("");
  };

  return (
    <div className="post-requirement-page">

      {/* Header */}
      <header className="post-requirement-header">
        <div>
          <h1>AgriOrbit 🌱</h1>
          <p>Post Crop Requirement</p>
        </div>

        <div className="buyer-profile-icon">
          🏪
        </div>
      </header>

      {/* Content */}
      <main className="post-requirement-content">

        <div className="post-requirement-card">

          <div className="requirement-icon">
            📝
          </div>

          <h2>Post New Requirement</h2>

          <p className="requirement-subtitle">
            Tell farmers what crops you are looking to buy.
          </p>

          <form onSubmit={handleSubmit}>

            {/* Crop */}
            <div className="requirement-field">
              <label>
                Crop <span>*</span>
              </label>

              <select
                value={crop}
                onChange={(e) => setCrop(e.target.value)}
              >
                <option>Tomato</option>
                <option>Onion</option>
                <option>Potato</option>
                <option>Brinjal</option>
                <option>Carrot</option>
                <option>Cabbage</option>
                <option>Banana</option>
                <option>Green Chilli</option>
              </select>
            </div>

            {/* Quantity */}
            <div className="requirement-field">
              <label>
                Required Quantity (KG) <span>*</span>
              </label>

              <input
                type="number"
                min="1"
                placeholder="Example: 500"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>

            {/* Price */}
            <div className="requirement-field">
              <label>
                Expected Price (₹ / KG) <span>*</span>
              </label>

              <input
                type="number"
                min="1"
                placeholder="Example: 40"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            {/* District */}
            <div className="requirement-field">
              <label>
                District <span>*</span>
              </label>

              <select
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
              >
                <option>Villupuram</option>
                <option>Cuddalore</option>
                <option>Puducherry</option>
                <option>Chennai</option>
                <option>Vellore</option>
                <option>Ranipet</option>
                <option>Tiruvannamalai</option>
                <option>Kanchipuram</option>
              </select>
            </div>

            {/* Delivery Location */}
            <div className="requirement-field">
              <label>
                Delivery / Collection Location <span>*</span>
              </label>

              <input
                type="text"
                placeholder="Example: Tindivanam Market"
                value={deliveryLocation}
                onChange={(e) =>
                  setDeliveryLocation(e.target.value)
                }
              />
            </div>

            {/* Description */}
            <div className="requirement-field">
              <label>
                Additional Details
              </label>

              <textarea
                placeholder="Add quality, delivery or other requirements..."
                value={description}
                onChange={(e) =>
                  setDescription(e.target.value)
                }
                rows="4"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="post-requirement-button"
            >
              📤 Post Requirement
            </button>

          </form>

          {/* Back */}
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

export default PostRequirement;