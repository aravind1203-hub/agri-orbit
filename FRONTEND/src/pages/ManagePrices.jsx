import { useEffect, useState } from "react";

const translations = {
  English: {
    page: "Manage Market Prices",
    title: "💰 Market Prices",
    subtitle:
      "Monitor crop prices collected from market data sources",

    dashboard: "Admin Dashboard",
    farmers: "Manage Farmers",
    buyers: "Manage Buyers",
    crops: "Manage Crops",
    markets: "Manage Markets",
    prices: "Manage Prices",
    offers: "Manage Offers",
    reports: "Reports",
    profile: "Profile",
    settings: "Settings",
    logout: "Logout",
    darkMode: "Dark Mode",
    lightMode: "Light Mode",
    language: "Language",

    backendConnected: "Backend Connected",

    marketPriceData: "Market Price Data",
    marketPriceInfo:
      "Market price records are fetched from the AgriOrbit backend and stored in MySQL.",

    totalRecords: "Total Price Records",
    marketCount: "Markets",
    lastUpdated: "Last Updated",

    search:
      "🔍 Search crop, market or district...",

    loading: "Loading Market Prices...",
    loadingText:
      "Fetching price information from backend.",

    unable: "Unable to Load Market Prices",
    retry: "🔄 Retry",

    crop: "Crop",
    market: "Market",
    district: "District",
    priceKg: "Price / KG",
    updated: "Updated",
    source: "Source",

    noRecords: "No Price Records Found",
    noRecordsText:
      "Try searching with another crop, market or district.",

    backendIntegration: "🔗 Backend Integration",
    backendFlow:
      "MySQL Market Prices → Node.js / Express → React Manage Prices",

    back: "← Back to Admin Dashboard",
  },

  "தமிழ்": {
    page: "சந்தை விலைகளை நிர்வகிக்கவும்",
    title: "💰 சந்தை விலைகள்",
    subtitle:
      "சந்தை தரவுகளில் இருந்து பெறப்பட்ட பயிர் விலைகளை கண்காணிக்கவும்",

    dashboard: "Admin Dashboard",
    farmers: "விவசாயிகள்",
    buyers: "வாங்குபவர்கள்",
    crops: "பயிர்கள்",
    markets: "சந்தைகள்",
    prices: "விலைகள்",
    offers: "சலுகைகள்",
    reports: "அறிக்கைகள்",
    profile: "சுயவிவரம்",
    settings: "அமைப்புகள்",
    logout: "வெளியேறு",
    darkMode: "Dark Mode",
    lightMode: "Light Mode",
    language: "மொழி",

    backendConnected: "Backend இணைக்கப்பட்டுள்ளது",

    marketPriceData: "சந்தை விலை தரவு",
    marketPriceInfo:
      "சந்தை விலை பதிவுகள் AgriOrbit backend-லிருந்து பெறப்பட்டு MySQL-ல் சேமிக்கப்படுகின்றன.",

    totalRecords: "மொத்த விலை பதிவுகள்",
    marketCount: "சந்தைகள்",
    lastUpdated: "கடைசியாக புதுப்பிக்கப்பட்டது",

    search:
      "🔍 பயிர், சந்தை அல்லது மாவட்டத்தை தேடவும்...",

    loading: "சந்தை விலைகள் ஏற்றப்படுகிறது...",
    loadingText:
      "Backend-லிருந்து விலை தகவல்கள் பெறப்படுகின்றன.",

    unable: "சந்தை விலைகளை ஏற்ற முடியவில்லை",
    retry: "🔄 மீண்டும் முயற்சி",

    crop: "பயிர்",
    market: "சந்தை",
    district: "மாவட்டம்",
    priceKg: "விலை / KG",
    updated: "புதுப்பிக்கப்பட்டது",
    source: "மூலம்",

    noRecords: "விலை பதிவுகள் எதுவும் இல்லை",
    noRecordsText:
      "வேறு பயிர், சந்தை அல்லது மாவட்டத்தை தேடிப் பார்க்கவும்.",

    backendIntegration: "🔗 Backend Integration",
    backendFlow:
      "MySQL Market Prices → Node.js / Express → React Manage Prices",

    back: "← Admin Dashboard-க்கு திரும்பு",
  },

  "हिन्दी": {
    page: "बाज़ार कीमत प्रबंधन",
    title: "💰 बाज़ार कीमतें",
    subtitle:
      "बाज़ार डेटा से प्राप्त फसल कीमतों की निगरानी करें",

    dashboard: "Admin Dashboard",
    farmers: "किसान",
    buyers: "खरीदार",
    crops: "फसलें",
    markets: "बाज़ार",
    prices: "कीमतें",
    offers: "ऑफ़र",
    reports: "रिपोर्ट",
    profile: "प्रोफ़ाइल",
    settings: "सेटिंग्स",
    logout: "लॉगआउट",
    darkMode: "Dark Mode",
    lightMode: "Light Mode",
    language: "भाषा",

    backendConnected: "Backend Connected",

    marketPriceData: "बाज़ार मूल्य डेटा",
    marketPriceInfo:
      "बाज़ार मूल्य रिकॉर्ड AgriOrbit backend से प्राप्त होकर MySQL में संग्रहीत होते हैं।",

    totalRecords: "कुल मूल्य रिकॉर्ड",
    marketCount: "बाज़ार",
    lastUpdated: "अंतिम अपडेट",

    search:
      "🔍 फसल, बाज़ार या जिला खोजें...",

    loading: "बाज़ार कीमतें लोड हो रही हैं...",
    loadingText:
      "Backend से मूल्य जानकारी प्राप्त की जा रही है।",

    unable: "बाज़ार कीमतें लोड नहीं हो सकीं",
    retry: "🔄 पुनः प्रयास",

    crop: "फसल",
    market: "बाज़ार",
    district: "जिला",
    priceKg: "कीमत / KG",
    updated: "अपडेट",
    source: "स्रोत",

    noRecords: "कोई मूल्य रिकॉर्ड नहीं मिला",
    noRecordsText:
      "दूसरी फसल, बाज़ार या जिला खोजकर देखें।",

    backendIntegration: "🔗 Backend Integration",
    backendFlow:
      "MySQL Market Prices → Node.js / Express → React Manage Prices",

    back: "← Admin Dashboard पर वापस जाएं",
  },

  "తెలుగు": {
    page: "మార్కెట్ ధరల నిర్వహణ",
    title: "💰 మార్కెట్ ధరలు",
    subtitle:
      "మార్కెట్ డేటా నుండి పొందిన పంట ధరలను పర్యవేక్షించండి",

    dashboard: "Admin Dashboard",
    farmers: "రైతులు",
    buyers: "కొనుగోలుదారులు",
    crops: "పంటలు",
    markets: "మార్కెట్లు",
    prices: "ధరలు",
    offers: "ఆఫర్లు",
    reports: "రిపోర్టులు",
    profile: "ప్రొఫైల్",
    settings: "సెట్టింగ్స్",
    logout: "లాగౌట్",
    darkMode: "Dark Mode",
    lightMode: "Light Mode",
    language: "భాష",

    backendConnected: "Backend Connected",

    marketPriceData: "మార్కెట్ ధరల డేటా",
    marketPriceInfo:
      "మార్కెట్ ధరల రికార్డులు AgriOrbit backend నుండి పొందబడి MySQL లో నిల్వ చేయబడతాయి.",

    totalRecords: "మొత్తం ధరల రికార్డులు",
    marketCount: "మార్కెట్లు",
    lastUpdated: "చివరిగా నవీకరించబడింది",

    search:
      "🔍 పంట, మార్కెట్ లేదా జిల్లాను వెతకండి...",

    loading: "మార్కెట్ ధరలు లోడ్ అవుతున్నాయి...",
    loadingText:
      "Backend నుండి ధరల సమాచారం పొందుతోంది.",

    unable: "మార్కెట్ ధరలను లోడ్ చేయలేకపోయాము",
    retry: "🔄 మళ్లీ ప్రయత్నించండి",

    crop: "పంట",
    market: "మార్కెట్",
    district: "జిల్లా",
    priceKg: "ధర / KG",
    updated: "నవీకరణ",
    source: "మూలం",

    noRecords: "ధరల రికార్డులు కనుగొనబడలేదు",
    noRecordsText:
      "వేరే పంట, మార్కెట్ లేదా జిల్లాను వెతకండి.",

    backendIntegration: "🔗 Backend Integration",
    backendFlow:
      "MySQL Market Prices → Node.js / Express → React Manage Prices",

    back: "← Admin Dashboard కి తిరిగి వెళ్లండి",
  },

  "ಕನ್ನಡ": {
    page: "ಮಾರುಕಟ್ಟೆ ಬೆಲೆ ನಿರ್ವಹಣೆ",
    title: "💰 ಮಾರುಕಟ್ಟೆ ಬೆಲೆಗಳು",
    subtitle:
      "ಮಾರುಕಟ್ಟೆ ಡೇಟಾದಿಂದ ಪಡೆದ ಬೆಳೆ ಬೆಲೆಗಳನ್ನು ಮೇಲ್ವಿಚಾರಣೆ ಮಾಡಿ",

    dashboard: "Admin Dashboard",
    farmers: "ರೈತರು",
    buyers: "ಖರೀದಿದಾರರು",
    crops: "ಬೆಳೆಗಳು",
    markets: "ಮಾರುಕಟ್ಟೆಗಳು",
    prices: "ಬೆಲೆಗಳು",
    offers: "ಆಫರ್‌ಗಳು",
    reports: "ವರದಿಗಳು",
    profile: "ಪ್ರೊಫೈಲ್",
    settings: "ಸೆಟ್ಟಿಂಗ್ಸ್",
    logout: "ಲಾಗ್‌ಔಟ್",
    darkMode: "Dark Mode",
    lightMode: "Light Mode",
    language: "ಭಾಷೆ",

    backendConnected: "Backend Connected",

    marketPriceData: "ಮಾರುಕಟ್ಟೆ ಬೆಲೆ ಡೇಟಾ",
    marketPriceInfo:
      "ಮಾರುಕಟ್ಟೆ ಬೆಲೆ ದಾಖಲೆಗಳನ್ನು AgriOrbit backend ನಿಂದ ಪಡೆದು MySQL ನಲ್ಲಿ ಸಂಗ್ರಹಿಸಲಾಗುತ್ತದೆ.",

    totalRecords: "ಒಟ್ಟು ಬೆಲೆ ದಾಖಲೆಗಳು",
    marketCount: "ಮಾರುಕಟ್ಟೆಗಳು",
    lastUpdated: "ಕೊನೆಯ ನವೀಕರಣ",

    search:
      "🔍 ಬೆಳೆ, ಮಾರುಕಟ್ಟೆ ಅಥವಾ ಜಿಲ್ಲೆಯನ್ನು ಹುಡುಕಿ...",

    loading: "ಮಾರುಕಟ್ಟೆ ಬೆಲೆಗಳು ಲೋಡ್ ಆಗುತ್ತಿವೆ...",
    loadingText:
      "Backend ನಿಂದ ಬೆಲೆ ಮಾಹಿತಿಯನ್ನು ಪಡೆಯಲಾಗುತ್ತಿದೆ.",

    unable: "ಮಾರುಕಟ್ಟೆ ಬೆಲೆಗಳನ್ನು ಲೋಡ್ ಮಾಡಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ",
    retry: "🔄 ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ",

    crop: "ಬೆಳೆ",
    market: "ಮಾರುಕಟ್ಟೆ",
    district: "ಜಿಲ್ಲೆ",
    priceKg: "ಬೆಲೆ / KG",
    updated: "ನವೀಕರಿಸಲಾಗಿದೆ",
    source: "ಮೂಲ",

    noRecords: "ಯಾವುದೇ ಬೆಲೆ ದಾಖಲೆಗಳು ಕಂಡುಬಂದಿಲ್ಲ",
    noRecordsText:
      "ಬೇರೆ ಬೆಳೆ, ಮಾರುಕಟ್ಟೆ ಅಥವಾ ಜಿಲ್ಲೆಯನ್ನು ಹುಡುಕಿ.",

    backendIntegration: "🔗 Backend Integration",
    backendFlow:
      "MySQL Market Prices → Node.js / Express → React Manage Prices",

    back: "← Admin Dashboard ಗೆ ಹಿಂತಿರುಗಿ",
  },
};

function ManagePrices({
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
  const t =
    translations[language] ||
    translations.English;

  const [prices, setPrices] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showMenu, setShowMenu] = useState(false);

  // =========================================================
  // FETCH PRICES
  // =========================================================

  const fetchPrices = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        "http://10.19.77.40:5000/api/market-prices"
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error ||
            "Failed to fetch market prices."
        );
      }

      const formattedPrices = data.map(
        (item) => ({
          id: item.id,
          crop: item.crop,
          market: item.market,
          district: item.district,
          price: Number(
            item.price_per_kg
          ),
          unit: "KG",
          updated: item.price_date
            ? new Date(
                item.price_date
              ).toLocaleDateString()
            : "Today",
          source:
            item.source ||
            "Market Data",
        })
      );

      setPrices(formattedPrices);
    } catch (err) {
      console.error(
        "Manage prices error:",
        err
      );

      setError(
        err.message ||
          "Unable to load market prices."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPrices();
  }, []);

  // =========================================================
  // SEARCH
  // =========================================================

  const filteredPrices =
    prices.filter((item) =>
      `${item.crop} ${item.market} ${item.district}`
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );

  const marketCount = new Set(
    prices.map(
      (item) => item.market
    )
  ).size;

  // =========================================================
  // DRAWER NAVIGATION
  // =========================================================

  const goTo = (callback) => {
    setShowMenu(false);

    if (callback) {
      callback();
    }
  };

  // =========================================================
  // PAGE
  // =========================================================

  return (
    <div
      className={`admin-manage-page ${
        darkMode
          ? "dark-mode"
          : ""
      }`}
    >

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
            <h1>
              AgriOrbit 🌱
            </h1>

            <p>
              {t.page}
            </p>
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
          onLanguageChange={
            onLanguageChange
          }
          darkMode={darkMode}
          onToggleTheme={
            onToggleTheme
          }
          onClose={() =>
            setShowMenu(false)
          }
          onAdminDashboard={() =>
            goTo(
              onAdminDashboard ||
                onBackToAdminDashboard
            )
          }
          onManageFarmers={() =>
            goTo(
              onManageFarmers
            )
          }
          onManageBuyers={() =>
            goTo(
              onManageBuyers
            )
          }
          onManageCrops={() =>
            goTo(
              onManageCrops
            )
          }
          onManageMarkets={() =>
            goTo(
              onManageMarkets
            )
          }
          onManagePrices={() =>
            goTo(
              onManagePrices
            )
          }
          onManageOffers={() =>
            goTo(
              onManageOffers
            )
          }
          onReports={() =>
            goTo(onReports)
          }
          onProfile={() =>
            goTo(onProfile)
          }
          onSettings={() =>
            goTo(onSettings)
          }
          onLogout={() =>
            goTo(onLogout)
          }
        />
      )}

      {/* Main Content */}
      <main className="admin-manage-content">

        {/* Page Title */}
        <div className="admin-page-title">

          <div>
            <h2>
              {t.title}
            </h2>

            <p>
              {t.subtitle}
            </p>
          </div>

          <div className="price-api-status">

            <span className="api-status-dot"></span>

            {t.backendConnected}

          </div>

        </div>

        {/* Info Card */}
        <div className="price-info-card">

          <div className="price-info-icon">
            🔄
          </div>

          <div>
            <h3>
              {t.marketPriceData}
            </h3>

            <p>
              {t.marketPriceInfo}
            </p>
          </div>

        </div>

        {/* Summary */}
        <div className="admin-summary-card">

          <div>
            <span>
              {t.totalRecords}
            </span>

            <strong>
              {prices.length}
            </strong>
          </div>

          <div>
            <span>
              {t.marketCount}
            </span>

            <strong>
              {marketCount}
            </strong>
          </div>

          <div>
            <span>
              {t.lastUpdated}
            </span>

            <strong>
              {prices.length > 0
                ? prices[0]
                    .updated
                : "-"}
            </strong>
          </div>

        </div>

        {/* Search */}
        <div className="admin-search-box">

          <input
            type="text"
            placeholder={
              t.search
            }
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
          />

        </div>

        {/* Loading */}
        {loading && (
          <div className="admin-loading">

            <div className="admin-loading-icon">
              🔄
            </div>

            <h3>
              {t.loading}
            </h3>

            <p>
              {t.loadingText}
            </p>

          </div>
        )}

        {/* Error */}
        {!loading &&
          error && (
            <div className="admin-no-results">

              <div>⚠️</div>

              <h3>
                {t.unable}
              </h3>

              <p>
                {error}
              </p>

              <button
                type="button"
                className="admin-view-button"
                onClick={
                  fetchPrices
                }
                style={{
                  marginTop:
                    "12px",
                }}
              >
                {t.retry}
              </button>

            </div>
          )}

        {/* Price Table */}
        {!loading &&
          !error && (
            <div className="admin-table-container">

              <table className="admin-table price-table">

                <thead>
                  <tr>
                    <th>
                      {t.crop}
                    </th>

                    <th>
                      {t.market}
                    </th>

                    <th>
                      {t.district}
                    </th>

                    <th>
                      {t.priceKg}
                    </th>

                    <th>
                      {t.updated}
                    </th>

                    <th>
                      {t.source}
                    </th>
                  </tr>
                </thead>

                <tbody>

                  {filteredPrices.map(
                    (item) => (
                      <tr
                        key={
                          item.id
                        }
                      >

                        <td>
                          <div className="price-crop-name">

                            <div className="price-crop-icon">
                              🌾
                            </div>

                            <strong>
                              {
                                item.crop
                              }
                            </strong>

                          </div>
                        </td>

                        <td>
                          {
                            item.market
                          }
                        </td>

                        <td>
                          {
                            item.district
                          }
                        </td>

                        <td>

                          <strong className="market-price">
                            ₹
                            {
                              item.price
                            }
                          </strong>

                          <span className="price-unit">
                            /{" "}
                            {
                              item.unit
                            }
                          </span>

                        </td>

                        <td>
                          <span className="price-updated">
                            🕒{" "}
                            {
                              item.updated
                            }
                          </span>
                        </td>

                        <td>
                          <span className="price-source">
                            {
                              item.source
                            }
                          </span>
                        </td>

                      </tr>
                    )
                  )}

                </tbody>

              </table>

              {/* No Results */}
              {filteredPrices.length ===
                0 && (
                <div className="admin-no-results">

                  <div>🔍</div>

                  <h3>
                    {t.noRecords}
                  </h3>

                  <p>
                    {
                      t.noRecordsText
                    }
                  </p>

                </div>
              )}

            </div>
          )}

        {/* Backend Note */}
        <div className="price-backend-note">

          <strong>
            {t.backendIntegration}
          </strong>

          <p>
            {t.backendFlow}
          </p>

        </div>

        {/* Back Button */}
        <div className="admin-back-section">

          <button
            type="button"
            className="admin-back-button"
            onClick={
              onBackToAdminDashboard
            }
          >
            {t.back}
          </button>

        </div>

      </main>

    </div>
  );
}

// =========================================================
// ADMIN DRAWER
// =========================================================

function AdminDrawer({
  t,
  language,
  languages,
  onLanguageChange,
  darkMode,
  onToggleTheme,
  onClose,
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
}) {
  return (
    <>
      <div
        className="admin-drawer-overlay"
        onClick={onClose}
      />

      <aside className="admin-side-drawer">

        {/* Drawer Header */}
        <div className="admin-drawer-header">

          <div>
            <strong>
              AgriOrbit 🌱
            </strong>

            <span>
              Admin Panel
            </span>
          </div>

          <button
            type="button"
            className="admin-drawer-close"
            onClick={onClose}
          >
            ✕
          </button>

        </div>

        {/* Drawer Items */}
        <div className="admin-drawer-content">

          <button
            type="button"
            className="admin-drawer-item"
            onClick={
              onAdminDashboard
            }
          >
            🏠 {t.dashboard}
          </button>

          <button
            type="button"
            className="admin-drawer-item"
            onClick={
              onManageFarmers
            }
          >
            👨‍🌾 {t.farmers}
          </button>

          <button
            type="button"
            className="admin-drawer-item"
            onClick={
              onManageBuyers
            }
          >
            🏪 {t.buyers}
          </button>

          <button
            type="button"
            className="admin-drawer-item"
            onClick={
              onManageCrops
            }
          >
            🌾 {t.crops}
          </button>

          <button
            type="button"
            className="admin-drawer-item"
            onClick={
              onManageMarkets
            }
          >
            🏬 {t.markets}
          </button>

          <button
            type="button"
            className="admin-drawer-item active"
            onClick={
              onManagePrices
            }
          >
            💰 {t.prices}
          </button>

          <button
            type="button"
            className="admin-drawer-item"
            onClick={
              onManageOffers
            }
          >
            📦 {t.offers}
          </button>

          <button
            type="button"
            className="admin-drawer-item"
            onClick={onReports}
          >
            📊 {t.reports}
          </button>

          <div className="admin-drawer-divider" />

          <button
            type="button"
            className="admin-drawer-item"
            onClick={onProfile}
          >
            👤 {t.profile}
          </button>

          <button
            type="button"
            className="admin-drawer-item"
            onClick={onSettings}
          >
            ⚙️ {t.settings}
          </button>

          <button
            type="button"
            className="admin-drawer-item"
            onClick={
              onToggleTheme
            }
          >
            {darkMode
              ? "☀️"
              : "🌙"}{" "}
            {darkMode
              ? t.lightMode
              : t.darkMode}
          </button>

          <div className="admin-language-box">

            <label>
              🌐 {t.language}
            </label>

            <select
              value={
                language
              }
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
            className="admin-drawer-item admin-logout-item"
            onClick={
              onLogout
            }
          >
            🚪 {t.logout}
          </button>

        </div>

      </aside>
    </>
  );
}

export default ManagePrices;
