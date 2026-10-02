import { useEffect, useState } from "react";

function Reports({
  onBackToAdminDashboard,
  onAdminDashboard,
  onManageFarmers,
  onManageBuyers,
  onManageCrops,
  onManageMarkets,
  onManagePrices,
  onManageOffers,
  onReports,
  onProfile,
  onSettings,
  onLogout,
  language = "English",
  languages = [
    "English",
    "தமிழ்",
    "हिन्दी",
    "తెలుగు",
    "ಕನ್ನಡ",
  ],
  onLanguageChange,
  darkMode = false,
  onToggleTheme,
}) {
  const [showMenu, setShowMenu] = useState(false);

  const [reportData, setReportData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  /* =========================================================
     TRANSLATIONS
  ========================================================= */

  const translations = {
    English: {
      page: "Reports",
      dashboard: "Dashboard",
      farmers: "Manage Farmers",
      buyers: "Manage Buyers",
      crops: "Manage Crops",
      markets: "Manage Markets",
      prices: "Manage Prices",
      offers: "Manage Offers",
      reports: "Reports",
      profile: "Profile",
      settings: "Settings",
      theme: "Theme",
      language: "Language",
      logout: "Logout",

      title: "📊 Reports",
      subtitle: "View system reports and statistics",

      totalFarmers: "Total Farmers",
      totalBuyers: "Total Buyers",
      totalCrops: "Total Crops",
      totalMarkets: "Total Markets",

      totalOffers: "Total Offers",
      pendingOffers: "Pending Offers",
      acceptedOffers: "Accepted Offers",
      rejectedOffers: "Rejected Offers",
      priceRecords: "Price Records",

      offerStatus: "Offer Status",
      marketSummary: "Market Summary",
      systemSummary: "System Summary",

      loading: "Loading reports...",
      errorTitle: "Unable to load reports",
      retry: "Retry",

      back: "← Back to Admin Dashboard",

      backendNote:
        "Report data is loaded from the AgriOrbit backend.",
    },

    "தமிழ்": {
      page: "அறிக்கைகள்",
      dashboard: "Dashboard",
      farmers: "விவசாயிகள்",
      buyers: "வாங்குபவர்கள்",
      crops: "பயிர்கள்",
      markets: "சந்தைகள்",
      prices: "விலைகள்",
      offers: "சலுகைகள்",
      reports: "அறிக்கைகள்",
      profile: "Profile",
      settings: "Settings",
      theme: "Theme",
      language: "Language",
      logout: "Logout",

      title: "📊 அறிக்கைகள்",
      subtitle: "System reports மற்றும் statistics பார்க்கலாம்",

      totalFarmers: "மொத்த விவசாயிகள்",
      totalBuyers: "மொத்த வாங்குபவர்கள்",
      totalCrops: "மொத்த பயிர்கள்",
      totalMarkets: "மொத்த சந்தைகள்",

      totalOffers: "மொத்த சலுகைகள்",
      pendingOffers: "நிலுவையில் உள்ள சலுகைகள்",
      acceptedOffers: "ஏற்றுக்கொள்ளப்பட்ட சலுகைகள்",
      rejectedOffers: "நிராகரிக்கப்பட்ட சலுகைகள்",
      priceRecords: "விலை பதிவுகள்",

      offerStatus: "சலுகை நிலை",
      marketSummary: "சந்தை சுருக்கம்",
      systemSummary: "System சுருக்கம்",

      loading: "Reports ஏற்றப்படுகிறது...",
      errorTitle: "Reports ஏற்ற முடியவில்லை",
      retry: "மீண்டும் முயற்சி",

      back: "← Admin Dashboard-க்கு செல்ல",

      backendNote:
        "Report data AgriOrbit backend-லிருந்து பெறப்படுகிறது.",
    },

    "हिन्दी": {
      page: "रिपोर्ट्स",
      dashboard: "Dashboard",
      farmers: "Farmers",
      buyers: "Buyers",
      crops: "Crops",
      markets: "Markets",
      prices: "Prices",
      offers: "Offers",
      reports: "Reports",
      profile: "Profile",
      settings: "Settings",
      theme: "Theme",
      language: "Language",
      logout: "Logout",

      title: "📊 Reports",
      subtitle: "System reports और statistics देखें",

      totalFarmers: "कुल किसान",
      totalBuyers: "कुल खरीदार",
      totalCrops: "कुल फसलें",
      totalMarkets: "कुल बाजार",

      totalOffers: "कुल Offers",
      pendingOffers: "Pending Offers",
      acceptedOffers: "Accepted Offers",
      rejectedOffers: "Rejected Offers",
      priceRecords: "Price Records",

      offerStatus: "Offer Status",
      marketSummary: "Market Summary",
      systemSummary: "System Summary",

      loading: "Reports लोड हो रहे हैं...",
      errorTitle: "Reports लोड नहीं हो सके",
      retry: "Retry",

      back: "← Admin Dashboard",

      backendNote:
        "Report data AgriOrbit backend से लिया गया है.",
    },

    "తెలుగు": {
      page: "Reports",
      dashboard: "Dashboard",
      farmers: "Farmers",
      buyers: "Buyers",
      crops: "Crops",
      markets: "Markets",
      prices: "Prices",
      offers: "Offers",
      reports: "Reports",
      profile: "Profile",
      settings: "Settings",
      theme: "Theme",
      language: "Language",
      logout: "Logout",

      title: "📊 Reports",
      subtitle: "System reports మరియు statistics చూడండి",

      totalFarmers: "మొత్తం రైతులు",
      totalBuyers: "మొత్తం కొనుగోలుదారులు",
      totalCrops: "మొత్తం పంటలు",
      totalMarkets: "మొత్తం మార్కెట్లు",

      totalOffers: "మొత్తం Offers",
      pendingOffers: "Pending Offers",
      acceptedOffers: "Accepted Offers",
      rejectedOffers: "Rejected Offers",
      priceRecords: "Price Records",

      offerStatus: "Offer Status",
      marketSummary: "Market Summary",
      systemSummary: "System Summary",

      loading: "Reports loading...",
      errorTitle: "Reports load కాలేదు",
      retry: "Retry",

      back: "← Admin Dashboard",

      backendNote:
        "Report data AgriOrbit backend నుండి వస్తుంది.",
    },

    "ಕನ್ನಡ": {
      page: "Reports",
      dashboard: "Dashboard",
      farmers: "Farmers",
      buyers: "Buyers",
      crops: "Crops",
      markets: "Markets",
      prices: "Prices",
      offers: "Offers",
      reports: "Reports",
      profile: "Profile",
      settings: "Settings",
      theme: "Theme",
      language: "Language",
      logout: "Logout",

      title: "📊 Reports",
      subtitle: "System reports ಮತ್ತು statistics ನೋಡಿ",

      totalFarmers: "ಒಟ್ಟು ರೈತರು",
      totalBuyers: "ಒಟ್ಟು ಖರೀದಿದಾರರು",
      totalCrops: "ಒಟ್ಟು ಬೆಳೆಗಳು",
      totalMarkets: "ಒಟ್ಟು ಮಾರುಕಟ್ಟೆಗಳು",

      totalOffers: "ಒಟ್ಟು Offers",
      pendingOffers: "Pending Offers",
      acceptedOffers: "Accepted Offers",
      rejectedOffers: "Rejected Offers",
      priceRecords: "Price Records",

      offerStatus: "Offer Status",
      marketSummary: "Market Summary",
      systemSummary: "System Summary",

      loading: "Reports loading...",
      errorTitle: "Reports load ಆಗಲಿಲ್ಲ",
      retry: "Retry",

      back: "← Admin Dashboard",

      backendNote:
        "Report data AgriOrbit backend ನಿಂದ ಬರುತ್ತದೆ.",
    },
  };

  const t =
    translations[language] ||
    translations.English;

  /* =========================================================
     LOAD REPORTS
  ========================================================= */

  const loadReports = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        "https://agri-orbit.onrender.com/api/admin/reports"
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Unable to load reports."
        );
      }

      setReportData(data);
    } catch (err) {
      console.error(
        "Reports loading error:",
        err
      );

      setError(
        err.message ||
        "Unable to load reports."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadReports();
  }, []);

  /* =========================================================
     NAVIGATION
  ========================================================= */

  const goTo = (callback) => {
    setShowMenu(false);

    if (typeof callback === "function") {
      callback();
    }
  };

  /* =========================================================
     LOADING
  ========================================================= */

  if (loading) {
    return (
      <div className="admin-reports-page">

        <header className="admin-dashboard-header">

          <div className="admin-header-left">

            <button
              type="button"
              className="admin-menu-button"
              onClick={() =>
                setShowMenu(true)
              }
            >
              ☰
            </button>

            <div>
              <h1>AgriOrbit 🌱</h1>
              <p>{t.page}</p>
            </div>

          </div>

          <div className="admin-profile">
            🛡️
          </div>

        </header>

        {showMenu && (
          <AdminDrawer
            t={t}
            language={language}
            languages={languages}
            onLanguageChange={onLanguageChange}
            darkMode={darkMode}
            onToggleTheme={onToggleTheme}
            onAdminDashboard={onAdminDashboard}
            onManageFarmers={onManageFarmers}
            onManageBuyers={onManageBuyers}
            onManageCrops={onManageCrops}
            onManageMarkets={onManageMarkets}
            onManagePrices={onManagePrices}
            onManageOffers={onManageOffers}
            onReports={onReports}
            onProfile={onProfile}
            onSettings={onSettings}
            onLogout={onLogout}
            goTo={goTo}
          />
        )}

        <main className="admin-reports-content">

          <div className="admin-loading">
            <div className="admin-loading-spinner"></div>
            <p>{t.loading}</p>
          </div>

        </main>

      </div>
    );
  }

  /* =========================================================
     ERROR
  ========================================================= */

  if (error) {
    return (
      <div className="admin-reports-page">

        <header className="admin-dashboard-header">

          <div className="admin-header-left">

            <button
              type="button"
              className="admin-menu-button"
              onClick={() =>
                setShowMenu(true)
              }
            >
              ☰
            </button>

            <div>
              <h1>AgriOrbit 🌱</h1>
              <p>{t.page}</p>
            </div>

          </div>

          <div className="admin-profile">
            🛡️
          </div>

        </header>

        {showMenu && (
          <AdminDrawer
            t={t}
            language={language}
            languages={languages}
            onLanguageChange={onLanguageChange}
            darkMode={darkMode}
            onToggleTheme={onToggleTheme}
            onAdminDashboard={onAdminDashboard}
            onManageFarmers={onManageFarmers}
            onManageBuyers={onManageBuyers}
            onManageCrops={onManageCrops}
            onManageMarkets={onManageMarkets}
            onManagePrices={onManagePrices}
            onManageOffers={onManageOffers}
            onReports={onReports}
            onProfile={onProfile}
            onSettings={onSettings}
            onLogout={onLogout}
            goTo={goTo}
          />
        )}

        <main className="admin-reports-content">

          <div className="admin-error-box">

            <div className="admin-error-icon">
              ⚠️
            </div>

            <h2>{t.errorTitle}</h2>

            <p>{error}</p>

            <button
              type="button"
              className="admin-retry-button"
              onClick={loadReports}
            >
              🔄 {t.retry}
            </button>

          </div>

        </main>

      </div>
    );
  }

  const data = reportData || {};

  /* =========================================================
     MAIN REPORT PAGE
  ========================================================= */

  return (
    <div className="admin-reports-page">

      {/* Header */}
      <header className="admin-dashboard-header">

        <div className="admin-header-left">

          <button
            type="button"
            className="admin-menu-button"
            onClick={() =>
              setShowMenu(true)
            }
          >
            ☰
          </button>

          <div>
            <h1>AgriOrbit 🌱</h1>
            <p>{t.page}</p>
          </div>

        </div>

        <div className="admin-profile">
          🛡️
        </div>

      </header>

      {/* Drawer */}
      {showMenu && (
        <AdminDrawer
          t={t}
          language={language}
          languages={languages}
          onLanguageChange={onLanguageChange}
          darkMode={darkMode}
          onToggleTheme={onToggleTheme}
          onAdminDashboard={onAdminDashboard}
          onManageFarmers={onManageFarmers}
          onManageBuyers={onManageBuyers}
          onManageCrops={onManageCrops}
          onManageMarkets={onManageMarkets}
          onManagePrices={onManagePrices}
          onManageOffers={onManageOffers}
          onReports={onReports}
          onProfile={onProfile}
          onSettings={onSettings}
          onLogout={onLogout}
          goTo={goTo}
        />
      )}

      {/* Main */}
      <main className="admin-reports-content">

        {/* Title */}
        <div className="admin-page-title">

          <h2>{t.title}</h2>

          <p>
            {t.subtitle}
          </p>

        </div>

        {/* System Statistics */}
        <section className="admin-report-section">

          <h2>📈 {t.systemSummary}</h2>

          <div className="admin-report-stats-grid">

            <div className="admin-report-stat-card">

              <div className="admin-report-stat-icon">
                👨‍🌾
              </div>

              <div>
                <h3>
                  {data.farmers ?? 0}
                </h3>

                <p>
                  {t.totalFarmers}
                </p>
              </div>

            </div>

            <div className="admin-report-stat-card">

              <div className="admin-report-stat-icon">
                🏪
              </div>

              <div>
                <h3>
                  {data.buyers ?? 0}
                </h3>

                <p>
                  {t.totalBuyers}
                </p>
              </div>

            </div>

            <div className="admin-report-stat-card">

              <div className="admin-report-stat-icon">
                🌾
              </div>

              <div>
                <h3>
                  {data.crops ?? 0}
                </h3>

                <p>
                  {t.totalCrops}
                </p>
              </div>

            </div>

            <div className="admin-report-stat-card">

              <div className="admin-report-stat-icon">
                🏬
              </div>

              <div>
                <h3>
                  {data.markets ?? 0}
                </h3>

                <p>
                  {t.totalMarkets}
                </p>
              </div>

            </div>

          </div>

        </section>

        {/* Offer Status */}
        <section className="admin-report-section">

          <h2>📦 {t.offerStatus}</h2>

          <div className="admin-offer-status-grid">

            <div className="admin-offer-status-card">

              <div className="admin-offer-status-icon">
                📦
              </div>

              <div>
                <h3>
                  {data.offers ?? 0}
                </h3>

                <p>
                  {t.totalOffers}
                </p>
              </div>

            </div>

            <div className="admin-offer-status-card">

              <div className="admin-offer-status-icon">
                ⏳
              </div>

              <div>
                <h3>
                  {data.pendingOffers ?? 0}
                </h3>

                <p>
                  {t.pendingOffers}
                </p>
              </div>

            </div>

            <div className="admin-offer-status-card">

              <div className="admin-offer-status-icon">
                ✅
              </div>

              <div>
                <h3>
                  {data.acceptedOffers ?? 0}
                </h3>

                <p>
                  {t.acceptedOffers}
                </p>
              </div>

            </div>

            <div className="admin-offer-status-card">

              <div className="admin-offer-status-icon">
                ❌
              </div>

              <div>
                <h3>
                  {data.rejectedOffers ?? 0}
                </h3>

                <p>
                  {t.rejectedOffers}
                </p>
              </div>

            </div>

          </div>

        </section>

        {/* Market Summary */}
        <section className="admin-report-section">

          <h2>🏬 {t.marketSummary}</h2>

          <div className="admin-market-report-grid">

            <div className="admin-market-report-card">

              <h3>👨‍🌾 Farmers</h3>

              <p>
                Registered farmers
              </p>

              <strong>
                {data.farmers ?? 0}
              </strong>

            </div>

            <div className="admin-market-report-card">

              <h3>🏪 Buyers</h3>

              <p>
                Registered buyers
              </p>

              <strong>
                {data.buyers ?? 0}
              </strong>

            </div>

            <div className="admin-market-report-card">

              <h3>🌾 Crops</h3>

              <p>
                Available crops
              </p>

              <strong>
                {data.crops ?? 0}
              </strong>

            </div>

            <div className="admin-market-report-card">

              <h3>💰 Price Records</h3>

              <p>
                Stored market prices
              </p>

              <strong>
                {data.priceRecords ?? 0}
              </strong>

            </div>

          </div>

        </section>

        {/* Backend Note */}
        <div className="admin-report-note">

          <div className="admin-report-note-icon">
            ℹ️
          </div>

          <div>

            <h3>
              AgriOrbit Report
            </h3>

            <p>
              {t.backendNote}
            </p>

          </div>

        </div>

        {/* Back */}
        <div className="admin-back-section">

          <button
            type="button"
            className="admin-back-button"
            onClick={() =>
              goTo(onBackToAdminDashboard)
            }
          >
            {t.back}
          </button>

        </div>

      </main>

    </div>
  );
}

/* =========================================================
   ADMIN DRAWER
========================================================= */

function AdminDrawer({
  t,
  language,
  languages,
  onLanguageChange,
  darkMode,
  onToggleTheme,

  onAdminDashboard,
  onManageFarmers,
  onManageBuyers,
  onManageCrops,
  onManageMarkets,
  onManagePrices,
  onManageOffers,
  onReports,

  onProfile,
  onSettings,
  onLogout,

  goTo,
}) {
  return (
    <>
      {/* Overlay */}
      <div
        className="admin-drawer-overlay"
        onClick={() => goTo(null)}
      ></div>

      {/* Drawer */}
      <aside className="admin-side-drawer">

        {/* Drawer Header */}
        <div className="admin-drawer-header">

          <div>
            <h2>AgriOrbit 🌱</h2>
            <p>Admin Panel</p>
          </div>

          <button
            type="button"
            className="admin-drawer-close"
            onClick={() => goTo(null)}
          >
            ✕
          </button>

        </div>

        {/* Navigation */}
        <div className="admin-drawer-content">

          <button
            type="button"
            className="admin-drawer-item"
            onClick={() =>
              goTo(onAdminDashboard)
            }
          >
            🏠 {t.dashboard}
          </button>

          <button
            type="button"
            className="admin-drawer-item"
            onClick={() =>
              goTo(onManageFarmers)
            }
          >
            👨‍🌾 {t.farmers}
          </button>

          <button
            type="button"
            className="admin-drawer-item"
            onClick={() =>
              goTo(onManageBuyers)
            }
          >
            🏪 {t.buyers}
          </button>

          <button
            type="button"
            className="admin-drawer-item"
            onClick={() =>
              goTo(onManageCrops)
            }
          >
            🌾 {t.crops}
          </button>

          <button
            type="button"
            className="admin-drawer-item"
            onClick={() =>
              goTo(onManageMarkets)
            }
          >
            🏬 {t.markets}
          </button>

          <button
            type="button"
            className="admin-drawer-item"
            onClick={() =>
              goTo(onManagePrices)
            }
          >
            💰 {t.prices}
          </button>

          <button
            type="button"
            className="admin-drawer-item"
            onClick={() =>
              goTo(onManageOffers)
            }
          >
            📦 {t.offers}
          </button>

          <button
            type="button"
            className="admin-drawer-item active"
            onClick={() =>
              goTo(onReports)
            }
          >
            📊 {t.reports}
          </button>

          <div className="admin-drawer-divider"></div>

          <button
            type="button"
            className="admin-drawer-item"
            onClick={() =>
              goTo(onProfile)
            }
          >
            👤 {t.profile}
          </button>

          <button
            type="button"
            className="admin-drawer-item"
            onClick={() =>
              goTo(onSettings)
            }
          >
            ⚙️ {t.settings}
          </button>

          <button
            type="button"
            className="admin-drawer-item"
            onClick={() =>
              onToggleTheme()
            }
          >
            {darkMode ? "☀️" : "🌙"} {t.theme}
          </button>

          <div className="admin-language-box">

            <label>
              🌐 {t.language}
            </label>

            <select
              value={language}
              onChange={(e) =>
                onLanguageChange(
                  e.target.value
                )
              }
            >
              {languages.map(
                (item) => (
                  <option
                    key={item}
                    value={item}
                  >
                    {item}
                  </option>
                )
              )}
            </select>

          </div>

          <button
            type="button"
            className="admin-drawer-item admin-drawer-logout"
            onClick={() =>
              goTo(onLogout)
            }
          >
            🚪 {t.logout}
          </button>

        </div>

      </aside>
    </>
  );
}

export default Reports;