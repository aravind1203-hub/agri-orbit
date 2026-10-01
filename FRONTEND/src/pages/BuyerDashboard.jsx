import React from "react";

function BuyerDashboard({
  onPostRequirement,
  onMyRequirements,
  onReceivedOffers,
  onBackToDashboard,
}) {
  const stats = [
    {
      icon: "📝",
      title: "Post Requirement",
      description: "Tell farmers what crops and quantity you need.",
      button: "Post Requirement",
      action: onPostRequirement,
    },
    {
      icon: "📋",
      title: "My Requirements",
      description: "View and manage your crop requirements.",
      button: "View Requirements",
      action: onMyRequirements,
    },
    {
      icon: "📩",
      title: "Received Offers",
      description: "Check crop offers received from farmers.",
      button: "View Offers",
      action: onReceivedOffers,
    },
  ];

  return (
    <div className="buyer-dashboard-page">

      {/* Header */}
      <header className="buyer-dashboard-header">
        <div>
          <h1>AgriOrbit 🌱</h1>
          <p>Buyer Dashboard</p>
        </div>

        <div className="buyer-profile-icon">
          🏪
        </div>
      </header>

      {/* Main Content */}
      <main className="buyer-dashboard-content">

        {/* Welcome */}
        <section className="buyer-welcome-section">
          <div>
            <h2>Welcome, Buyer 👋</h2>
            <p>
              Manage your crop requirements and connect with farmers.
            </p>
          </div>

          <div className="buyer-welcome-icon">
            🛒
          </div>
        </section>

        {/* Quick Stats */}
        <section className="buyer-stats-grid">

          <div className="buyer-stat-card">
            <div className="buyer-stat-icon">
              📝
            </div>

            <div>
              <span>Active Requirements</span>
              <strong>3</strong>
            </div>
          </div>

          <div className="buyer-stat-card">
            <div className="buyer-stat-icon">
              📩
            </div>

            <div>
              <span>Received Offers</span>
              <strong>8</strong>
            </div>
          </div>

          <div className="buyer-stat-card">
            <div className="buyer-stat-icon">
              🤝
            </div>

            <div>
              <span>Accepted Offers</span>
              <strong>4</strong>
            </div>
          </div>

        </section>

        {/* Quick Actions */}
        <section className="buyer-actions-section">

          <div className="buyer-section-heading">
            <h2>Quick Actions</h2>

            <p>
              Manage your buying activities
            </p>
          </div>

          <div className="buyer-actions-grid">

            {stats.map((item, index) => (
              <div
                className="buyer-action-card"
                key={index}
              >

                <div className="buyer-action-icon">
                  {item.icon}
                </div>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.description}
                </p>

                <button
                  type="button"
                  onClick={item.action}
                >
                  {item.button}
                </button>

              </div>
            ))}

          </div>

        </section>

        {/* Recent Activity */}
        <section className="buyer-recent-section">

          <div className="buyer-section-heading">
            <h2>Recent Activity</h2>

            <p>
              Your latest buyer activities
            </p>
          </div>

          <div className="buyer-activity-list">

            <div className="buyer-activity-item">
              <div className="activity-icon">
                📩
              </div>

              <div>
                <h4>New offer received</h4>
                <p>
                  A farmer sent an offer for Tomato – 100 KG.
                </p>
              </div>

              <span>
                Today
              </span>
            </div>

            <div className="buyer-activity-item">
              <div className="activity-icon">
                📝
              </div>

              <div>
                <h4>Requirement posted</h4>
                <p>
                  Tomato requirement of 500 KG is active.
                </p>
              </div>

              <span>
                Yesterday
              </span>
            </div>

            <div className="buyer-activity-item">
              <div className="activity-icon">
                🤝
              </div>

              <div>
                <h4>Offer accepted</h4>
                <p>
                  Your Onion purchase offer was accepted.
                </p>
              </div>

              <span>
                2 days ago
              </span>
            </div>

          </div>

        </section>

        {/* Back */}
        <div className="buyer-dashboard-back-section">

          <button
            type="button"
            className="back-dashboard-button"
            onClick={onBackToDashboard}
          >
            ← Back to Farmer Dashboard
          </button>

        </div>

      </main>

    </div>
  );
}

export default BuyerDashboard;