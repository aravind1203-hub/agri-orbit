import { useState } from "react";

function PriceTrend({ onBack }) {
  const [crop, setCrop] = useState("Tomato");

  const priceData = {
  Tomato: [
    { day: "Mon", price: 32 },
    { day: "Tue", price: 34 },
    { day: "Wed", price: 35 },
    { day: "Thu", price: 33 },
    { day: "Fri", price: 37 },
    { day: "Sat", price: 38 },
    { day: "Sun", price: 40 },
  ],

  Onion: [
    { day: "Mon", price: 28 },
    { day: "Tue", price: 30 },
    { day: "Wed", price: 29 },
    { day: "Thu", price: 31 },
    { day: "Fri", price: 32 },
    { day: "Sat", price: 34 },
    { day: "Sun", price: 33 },
  ],

  Potato: [
    { day: "Mon", price: 24 },
    { day: "Tue", price: 25 },
    { day: "Wed", price: 27 },
    { day: "Thu", price: 26 },
    { day: "Fri", price: 28 },
    { day: "Sat", price: 29 },
    { day: "Sun", price: 28 },
  ],

  Brinjal: [
    { day: "Mon", price: 30 },
    { day: "Tue", price: 32 },
    { day: "Wed", price: 31 },
    { day: "Thu", price: 34 },
    { day: "Fri", price: 35 },
    { day: "Sat", price: 36 },
    { day: "Sun", price: 35 },
  ],

  Carrot: [
    { day: "Mon", price: 38 },
    { day: "Tue", price: 40 },
    { day: "Wed", price: 39 },
    { day: "Thu", price: 41 },
    { day: "Fri", price: 42 },
    { day: "Sat", price: 44 },
    { day: "Sun", price: 42 },
  ],

  Cabbage: [
    { day: "Mon", price: 22 },
    { day: "Tue", price: 24 },
    { day: "Wed", price: 23 },
    { day: "Thu", price: 25 },
    { day: "Fri", price: 26 },
    { day: "Sat", price: 27 },
    { day: "Sun", price: 25 },
  ],

  Banana: [
    { day: "Mon", price: 40 },
    { day: "Tue", price: 42 },
    { day: "Wed", price: 43 },
    { day: "Thu", price: 44 },
    { day: "Fri", price: 45 },
    { day: "Sat", price: 46 },
    { day: "Sun", price: 45 },
  ],

  "Green Chilli": [
    { day: "Mon", price: 50 },
    { day: "Tue", price: 52 },
    { day: "Wed", price: 51 },
    { day: "Thu", price: 54 },
    { day: "Fri", price: 55 },
    { day: "Sat", price: 57 },
    { day: "Sun", price: 55 },
  ],
};

  const selectedData = priceData[crop];

  const highestPrice = Math.max(
    ...selectedData.map((item) => item.price)
  );

  const lowestPrice = Math.min(
    ...selectedData.map((item) => item.price)
  );

  const currentPrice =
    selectedData[selectedData.length - 1].price;

  return (
    <div className="price-trend-page">

      {/* Header */}
      <header className="price-trend-header">
        <div>
          <h1>AgriOrbit 🌱</h1>
          <p>Crop Price Trend</p>
        </div>

        <div className="profile-icon">
          👨‍🌾
        </div>
      </header>

      {/* Main Content */}
      <main className="price-trend-content">

        <div className="price-trend-title">
          <h2>📈 Price Trend</h2>
          <p>
            Check the price movement of your selected crop.
          </p>
        </div>

        {/* Crop Selection */}
        <div className="price-trend-filter">
          <label>Select Crop</label>

          <select
            value={crop}
            onChange={(e) => setCrop(e.target.value)}
          >
            <option value="Tomato">Tomato</option>
<option value="Onion">Onion</option>
<option value="Potato">Potato</option>
<option value="Brinjal">Brinjal</option>
<option value="Carrot">Carrot</option>
<option value="Cabbage">Cabbage</option>
<option value="Banana">Banana</option>
<option value="Green Chilli">Green Chilli</option>
          </select>
        </div>

        {/* Summary */}
        <div className="price-trend-summary">

          <div className="trend-summary-card">
            <span>Current Price</span>
            <strong>₹{currentPrice} / KG</strong>
          </div>

          <div className="trend-summary-card">
            <span>Highest Price</span>
            <strong>₹{highestPrice} / KG</strong>
          </div>

          <div className="trend-summary-card">
            <span>Lowest Price</span>
            <strong>₹{lowestPrice} / KG</strong>
          </div>

        </div>

        {/* Chart */}
        <section className="price-trend-chart-card">

          <h3>{crop} – 7 Day Price Trend</h3>

          <div className="price-chart">

            {selectedData.map((item) => (
              <div className="price-chart-item" key={item.day}>

                <div className="price-value">
                  ₹{item.price}
                </div>

                <div
                  className="price-bar"
                  style={{
                    height: `${item.price * 5}px`,
                  }}
                ></div>

                <span>{item.day}</span>

              </div>
            ))}

          </div>

        </section>

        {/* Trend Status */}
        <div className="price-trend-status">
          <span>📊 Trend</span>
          <strong>↗ Price is moving upward</strong>
        </div>

        {/* Back */}
        <div className="price-trend-back">
          <button type="button" onClick={onBack}>
            ← Back to Dashboard
          </button>
        </div>

      </main>
    </div>
  );
}

export default PriceTrend;