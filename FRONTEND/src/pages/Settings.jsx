import { useState } from "react";

function Settings({ onBackToDashboard }) {
  const [notifications, setNotifications] = useState(true);
  const [priceAlerts, setPriceAlerts] = useState(true);
  const [buyerAlerts, setBuyerAlerts] = useState(true);
  const [marketUpdates, setMarketUpdates] = useState(true);

  const handleSave = () => {
    alert("Settings saved successfully!");
  };

  return (
    <div className="settings-page">

      {/* =========================
          HEADER
      ========================= */}

      <header className="settings-header">

        <div>
          <h1>AgriOrbit 🌱</h1>
          <p>Settings</p>
        </div>

        <div className="profile-icon">
          👨‍🌾
        </div>

      </header>


      {/* =========================
          SETTINGS CONTENT
      ========================= */}

      <section className="settings-content">

        <div className="settings-card">

          <div className="settings-icon">
            ⚙️
          </div>

          <h2>Settings</h2>

          <p className="settings-subtitle">
            Manage your AgriOrbit preferences
          </p>


          {/* =========================
              NOTIFICATIONS
          ========================= */}

          <div className="settings-section">

            <h3>
              🔔 Notifications
            </h3>

            <div className="settings-item">

              <div>
                <strong>Enable Notifications</strong>

                <p>
                  Receive important updates and notifications.
                </p>
              </div>

              <label className="switch">

                <input
                  type="checkbox"
                  checked={notifications}
                  onChange={(e) =>
                    setNotifications(e.target.checked)
                  }
                />

                <span className="slider"></span>

              </label>

            </div>

          </div>


          {/* =========================
              PRICE ALERTS
          ========================= */}

          <div className="settings-section">

            <h3>
              💰 Price Alerts
            </h3>

            <div className="settings-item">

              <div>
                <strong>Crop Price Alerts</strong>

                <p>
                  Get notified when your crop prices change.
                </p>
              </div>

              <label className="switch">

                <input
                  type="checkbox"
                  checked={priceAlerts}
                  onChange={(e) =>
                    setPriceAlerts(e.target.checked)
                  }
                />

                <span className="slider"></span>

              </label>

            </div>

          </div>


          {/* =========================
              BUYER ALERTS
          ========================= */}

          <div className="settings-section">

            <h3>
              👥 Buyer Updates
            </h3>

            <div className="settings-item">

              <div>
                <strong>Buyer Alerts</strong>

                <p>
                  Get updates about buyer requirements.
                </p>
              </div>

              <label className="switch">

                <input
                  type="checkbox"
                  checked={buyerAlerts}
                  onChange={(e) =>
                    setBuyerAlerts(e.target.checked)
                  }
                />

                <span className="slider"></span>

              </label>

            </div>

          </div>


          {/* =========================
              MARKET UPDATES
          ========================= */}

          <div className="settings-section">

            <h3>
              📍 Market Updates
            </h3>

            <div className="settings-item">

              <div>
                <strong>Market Updates</strong>

                <p>
                  Receive updates about nearby markets.
                </p>
              </div>

              <label className="switch">

                <input
                  type="checkbox"
                  checked={marketUpdates}
                  onChange={(e) =>
                    setMarketUpdates(e.target.checked)
                  }
                />

                <span className="slider"></span>

              </label>

            </div>

          </div>


          {/* =========================
              SAVE BUTTON
          ========================= */}

          <button
            type="button"
            className="save-settings-button"
            onClick={handleSave}
          >
            💾 Save Settings
          </button>


          {/* =========================
              BACK BUTTON
          ========================= */}

          <button
            type="button"
            className="back-dashboard-button"
            onClick={onBackToDashboard}
          >
            ← Back to Dashboard
          </button>

        </div>

      </section>

    </div>
  );
}

export default Settings;