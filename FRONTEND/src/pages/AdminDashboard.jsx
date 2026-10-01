import { useState } from "react";
const translations = {
  English: {
    adminPanel: "Admin Panel",
    adminMenu: "Admin Menu",
    welcome: "Welcome, Admin",
    welcomeDesc:
      "Manage farmers, buyers, crops, markets, prices and offers from one place.",
    management: "Management",

    farmers: "Manage Farmers",
    farmersDesc: "View and manage registered farmers",

    buyers: "Manage Buyers",
    buyersDesc: "View and manage registered buyers",

    crops: "Manage Crops",
    cropsDesc: "Add and manage available crops",

    markets: "Manage Markets",
    marketsDesc: "Manage agricultural markets",

    prices: "Manage Prices",
    pricesDesc: "Update and manage crop prices",

    offers: "Manage Offers",
    offersDesc: "View and manage crop offers",

    reports: "Reports",
    reportsDesc: "View system reports and statistics",

    farmerCount: "Farmers",
    buyerCount: "Buyers",
    cropCount: "Crops",
    marketCount: "Markets",

    dashboard: "Admin Dashboard",
    profile: "Profile",
    settings: "Settings",
    logout: "Logout",
    darkMode: "Dark Mode",
    lightMode: "Light Mode",
  },

  "தமிழ்": {
    adminPanel: "நிர்வாக குழு",
    adminMenu: "நிர்வாக மெனு",
    welcome: "வணக்கம், Admin",
    welcomeDesc:
      "விவசாயிகள், வாங்குபவர்கள், பயிர்கள், சந்தைகள், விலைகள் மற்றும் ஆஃபர்களை ஒரே இடத்தில் நிர்வகிக்கலாம்.",
    management: "நிர்வாகம்",

    farmers: "விவசாயிகளை நிர்வகிக்கவும்",
    farmersDesc: "பதிவு செய்த விவசாயிகளை பார்க்கவும் நிர்வகிக்கவும்",

    buyers: "வாங்குபவர்களை நிர்வகிக்கவும்",
    buyersDesc: "பதிவு செய்த வாங்குபவர்களை பார்க்கவும் நிர்வகிக்கவும்",

    crops: "பயிர்களை நிர்வகிக்கவும்",
    cropsDesc: "பயிர்களை சேர்த்து நிர்வகிக்கவும்",

    markets: "சந்தைகளை நிர்வகிக்கவும்",
    marketsDesc: "விவசாய சந்தைகளை நிர்வகிக்கவும்",

    prices: "விலைகளை நிர்வகிக்கவும்",
    pricesDesc: "பயிர் விலைகளை புதுப்பித்து நிர்வகிக்கவும்",

    offers: "ஆஃபர்களை நிர்வகிக்கவும்",
    offersDesc: "பயிர் ஆஃபர்களை பார்க்கவும் நிர்வகிக்கவும்",

    reports: "அறிக்கைகள்",
    reportsDesc: "System reports மற்றும் statistics பார்க்கவும்",

    farmerCount: "விவசாயிகள்",
    buyerCount: "வாங்குபவர்கள்",
    cropCount: "பயிர்கள்",
    marketCount: "சந்தைகள்",

    dashboard: "Admin Dashboard",
    profile: "சுயவிவரம்",
    settings: "அமைப்புகள்",
    logout: "வெளியேறு",
    darkMode: "டார்க் மோடு",
    lightMode: "லைட் மோடு",
  },

  "हिन्दी": {
    adminPanel: "एडमिन पैनल",
    adminMenu: "एडमिन मेनू",
    welcome: "स्वागत है, Admin",
    welcomeDesc:
      "किसानों, खरीदारों, फसलों, बाजारों, कीमतों और ऑफर को एक ही जगह से मैनेज करें।",
    management: "प्रबंधन",

    farmers: "किसानों को मैनेज करें",
    farmersDesc: "पंजीकृत किसानों को देखें और मैनेज करें",

    buyers: "खरीदारों को मैनेज करें",
    buyersDesc: "पंजीकृत खरीदारों को देखें और मैनेज करें",

    crops: "फसलों को मैनेज करें",
    cropsDesc: "फसल जोड़ें और मैनेज करें",

    markets: "बाजारों को मैनेज करें",
    marketsDesc: "कृषि बाजारों को मैनेज करें",

    prices: "कीमतों को मैनेज करें",
    pricesDesc: "फसल की कीमत अपडेट और मैनेज करें",

    offers: "ऑफर को मैनेज करें",
    offersDesc: "फसल ऑफर देखें और मैनेज करें",

    reports: "रिपोर्ट्स",
    reportsDesc: "सिस्टम रिपोर्ट और आंकड़े देखें",

    farmerCount: "किसान",
    buyerCount: "खरीदार",
    cropCount: "फसलें",
    marketCount: "बाजार",

    dashboard: "एडमिन डैशबोर्ड",
    profile: "प्रोफाइल",
    settings: "सेटिंग्स",
    logout: "लॉगआउट",
    darkMode: "डार्क मोड",
    lightMode: "लाइट मोड",
  },

  "తెలుగు": {
    adminPanel: "అడ్మిన్ ప్యానెల్",
    adminMenu: "అడ్మిన్ మెను",
    welcome: "స్వాగతం, Admin",
    welcomeDesc:
      "రైతులు, కొనుగోలుదారులు, పంటలు, మార్కెట్లు, ధరలు మరియు ఆఫర్లను ఒకే చోట నిర్వహించండి.",
    management: "నిర్వహణ",

    farmers: "రైతులను నిర్వహించండి",
    farmersDesc: "నమోదైన రైతులను చూడండి మరియు నిర్వహించండి",

    buyers: "కొనుగోలుదారులను నిర్వహించండి",
    buyersDesc: "నమోదైన కొనుగోలుదారులను చూడండి మరియు నిర్వహించండి",

    crops: "పంటలను నిర్వహించండి",
    cropsDesc: "పంటలను జోడించి నిర్వహించండి",

    markets: "మార్కెట్లను నిర్వహించండి",
    marketsDesc: "వ్యవసాయ మార్కెట్లను నిర్వహించండి",

    prices: "ధరలను నిర్వహించండి",
    pricesDesc: "పంట ధరలను నవీకరించి నిర్వహించండి",

    offers: "ఆఫర్లను నిర్వహించండి",
    offersDesc: "పంట ఆఫర్లను చూడండి మరియు నిర్వహించండి",

    reports: "రిపోర్టులు",
    reportsDesc: "సిస్టమ్ రిపోర్టులు మరియు గణాంకాలను చూడండి",

    farmerCount: "రైతులు",
    buyerCount: "కొనుగోలుదారులు",
    cropCount: "పంటలు",
    marketCount: "మార్కెట్లు",

    dashboard: "అడ్మిన్ డాష్‌బోర్డ్",
    profile: "ప్రొఫైల్",
    settings: "సెట్టింగ్స్",
    logout: "లాగౌట్",
    darkMode: "డార్క్ మోడ్",
    lightMode: "లైట్ మోడ్",
  },

  "ಕನ್ನಡ": {
    adminPanel: "ಅಡ್ಮಿನ್ ಪ್ಯಾನೆಲ್",
    adminMenu: "ಅಡ್ಮಿನ್ ಮೆನು",
    welcome: "ಸ್ವಾಗತ, Admin",
    welcomeDesc:
      "ರೈತರು, ಖರೀದಿದಾರರು, ಬೆಳೆಗಳು, ಮಾರುಕಟ್ಟೆಗಳು, ಬೆಲೆಗಳು ಮತ್ತು ಆಫರ್‌ಗಳನ್ನು ಒಂದೇ ಸ್ಥಳದಿಂದ ನಿರ್ವಹಿಸಿ.",
    management: "ನಿರ್ವಹಣೆ",

    farmers: "ರೈತರನ್ನು ನಿರ್ವಹಿಸಿ",
    farmersDesc: "ನೋಂದಾಯಿತ ರೈತರನ್ನು ವೀಕ್ಷಿಸಿ ಮತ್ತು ನಿರ್ವಹಿಸಿ",

    buyers: "ಖರೀದಿದಾರರನ್ನು ನಿರ್ವಹಿಸಿ",
    buyersDesc: "ನೋಂದಾಯಿತ ಖರೀದಿದಾರರನ್ನು ವೀಕ್ಷಿಸಿ ಮತ್ತು ನಿರ್ವಹಿಸಿ",

    crops: "ಬೆಳೆಗಳನ್ನು ನಿರ್ವಹಿಸಿ",
    cropsDesc: "ಬೆಳೆಗಳನ್ನು ಸೇರಿಸಿ ಮತ್ತು ನಿರ್ವಹಿಸಿ",

    markets: "ಮಾರುಕಟ್ಟೆಗಳನ್ನು ನಿರ್ವಹಿಸಿ",
    marketsDesc: "ಕೃಷಿ ಮಾರುಕಟ್ಟೆಗಳನ್ನು ನಿರ್ವಹಿಸಿ",

    prices: "ಬೆಲೆಗಳನ್ನು ನಿರ್ವಹಿಸಿ",
    pricesDesc: "ಬೆಳೆ ಬೆಲೆಗಳನ್ನು ನವೀಕರಿಸಿ ಮತ್ತು ನಿರ್ವಹಿಸಿ",

    offers: "ಆಫರ್‌ಗಳನ್ನು ನಿರ್ವಹಿಸಿ",
    offersDesc: "ಬೆಳೆ ಆಫರ್‌ಗಳನ್ನು ವೀಕ್ಷಿಸಿ ಮತ್ತು ನಿರ್ವಹಿಸಿ",

    reports: "ವರದಿಗಳು",
    reportsDesc: "ಸಿಸ್ಟಮ್ ವರದಿಗಳು ಮತ್ತು ಅಂಕಿಅಂಶಗಳನ್ನು ವೀಕ್ಷಿಸಿ",

    farmerCount: "ರೈತರು",
    buyerCount: "ಖರೀದಿದಾರರು",
    cropCount: "ಬೆಳೆಗಳು",
    marketCount: "ಮಾರುಕಟ್ಟೆಗಳು",

    dashboard: "ಅಡ್ಮಿನ್ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
    profile: "ಪ್ರೊಫೈಲ್",
    settings: "ಸೆಟ್ಟಿಂಗ್ಸ್",
    logout: "ಲಾಗ್‌ಔಟ್",
    darkMode: "ಡಾರ್ಕ್ ಮೋಡ್",
    lightMode: "ಲೈಟ್ ಮೋಡ್",
  },
};

function AdminDashboard({
  onManageFarmers,
  onManageBuyers,
  onManageCrops,
  onManageMarkets,
  onManagePrices,
  onManageOffers,
  onReports,
  onLogout,
  onProfile,
  onSettings,

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
    translations[language] || translations.English;

  const [showMenu, setShowMenu] = useState(false);

  /*
   * ---------------------------------------------------------
   * MENU HANDLER
   * ---------------------------------------------------------
   * Close drawer first, then execute the selected action.
   * Only onClick is used so mobile touch does not fire
   * duplicate actions.
   */
  const handleMenuAction = (action) => {
    setShowMenu(false);

    if (typeof action === "function") {
      action();
    }
  };

  /*
   * ---------------------------------------------------------
   * ADMIN MODULES
   * ---------------------------------------------------------
   */
  const adminModules = [
    {
      icon: "👨‍🌾",
      title: t.farmers,
      description: t.farmersDesc,
      onClick: onManageFarmers,
    },
    {
      icon: "🏪",
      title: t.buyers,
      description: t.buyersDesc,
      onClick: onManageBuyers,
    },
    {
      icon: "🌾",
      title: t.crops,
      description: t.cropsDesc,
      onClick: onManageCrops,
    },
    {
      icon: "🏬",
      title: t.markets,
      description: t.marketsDesc,
      onClick: onManageMarkets,
    },
    {
      icon: "💰",
      title: t.prices,
      description: t.pricesDesc,
      onClick: onManagePrices,
    },
    {
      icon: "📦",
      title: t.offers,
      description: t.offersDesc,
      onClick: onManageOffers,
    },
    {
      icon: "📊",
      title: t.reports,
      description: t.reportsDesc,
      onClick: onReports,
    },
  ];

  return (
    <div
      className={`admin-dashboard-page ${
        darkMode ? "dark-mode" : ""
      }`}
    >

      {/* =====================================================
          SIDE DRAWER
      ===================================================== */}

      {showMenu && (
        <div
          className="admin-drawer-overlay"
          onClick={() => setShowMenu(false)}
        >

          <aside
            className="admin-side-drawer"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Drawer Header */}
            <div className="admin-drawer-header">

              <div>
                <h2>AgriOrbit 🌱</h2>
                <p>{t.adminMenu}</p>
              </div>

              <button
                type="button"
                className="admin-drawer-close"
                onClick={() => setShowMenu(false)}
                aria-label="Close admin menu"
              >
                ✕
              </button>

            </div>

            {/* Dashboard */}
            <button
              type="button"
              className="admin-drawer-item active"
              onClick={() => setShowMenu(false)}
            >
              <span>🏠</span>
              <span>{t.dashboard}</span>
            </button>

            {/* Farmers */}
            <button
              type="button"
              className="admin-drawer-item"
              onClick={() =>
                handleMenuAction(onManageFarmers)
              }
            >
              <span>👨‍🌾</span>
              <span>{t.farmers}</span>
            </button>

            {/* Buyers */}
            <button
              type="button"
              className="admin-drawer-item"
              onClick={() =>
                handleMenuAction(onManageBuyers)
              }
            >
              <span>🏪</span>
              <span>{t.buyers}</span>
            </button>

            {/* Crops */}
            <button
              type="button"
              className="admin-drawer-item"
              onClick={() =>
                handleMenuAction(onManageCrops)
              }
            >
              <span>🌾</span>
              <span>{t.crops}</span>
            </button>

            {/* Markets */}
            <button
              type="button"
              className="admin-drawer-item"
              onClick={() =>
                handleMenuAction(onManageMarkets)
              }
            >
              <span>🏬</span>
              <span>{t.markets}</span>
            </button>

            {/* Prices */}
            <button
              type="button"
              className="admin-drawer-item"
              onClick={() =>
                handleMenuAction(onManagePrices)
              }
            >
              <span>💰</span>
              <span>{t.prices}</span>
            </button>

            {/* Offers */}
            <button
              type="button"
              className="admin-drawer-item"
              onClick={() =>
                handleMenuAction(onManageOffers)
              }
            >
              <span>📦</span>
              <span>{t.offers}</span>
            </button>

            {/* Reports */}
            <button
              type="button"
              className="admin-drawer-item"
              onClick={() =>
                handleMenuAction(onReports)
              }
            >
              <span>📊</span>
              <span>{t.reports}</span>
            </button>

            <div className="admin-drawer-divider" />

            {/* Profile */}
            <button
              type="button"
              className="admin-drawer-item"
              onClick={() =>
                handleMenuAction(onProfile)
              }
            >
              <span>👤</span>
              <span>{t.profile}</span>
            </button>

            {/* Settings */}
            <button
              type="button"
              className="admin-drawer-item"
              onClick={() =>
                handleMenuAction(onSettings)
              }
            >
              <span>⚙️</span>
              <span>{t.settings}</span>
            </button>

            {/* Theme */}
            <button
              type="button"
              className="admin-drawer-item"
              onClick={() => {
                if (typeof onToggleTheme === "function") {
                  onToggleTheme();
                }
              }}
            >
              <span>
                {darkMode ? "☀️" : "🌙"}
              </span>

              <span>
                {darkMode
                  ? t.lightMode
                  : t.darkMode}
              </span>
            </button>

            {/* Language */}
            <div className="admin-language-box">

              <span>🌐</span>

              <select
                value={language}
                onChange={(e) => {
                  if (
                    typeof onLanguageChange ===
                    "function"
                  ) {
                    onLanguageChange(
                      e.target.value
                    );
                  }
                }}
              >
                {languages.map((lang) => (
                  <option
                    value={lang}
                    key={lang}
                  >
                    {lang}
                  </option>
                ))}
              </select>

            </div>

            <div className="admin-drawer-divider" />

            {/* Logout */}
            <button
              type="button"
              className="admin-drawer-item admin-logout-item"
              onClick={() =>
                handleMenuAction(onLogout)
              }
            >
              <span>🚪</span>
              <span>{t.logout}</span>
            </button>

          </aside>

        </div>
      )}

      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="admin-dashboard-header">

        <div className="admin-header-left">

          {/* 3 BAR MENU */}
          <button
            type="button"
            className="admin-menu-button"
            onClick={() => setShowMenu(true)}
            aria-label="Open admin menu"
          >
            ☰
          </button>

          <div>
            <h1>AgriOrbit 🌱</h1>
            <p>{t.adminPanel}</p>
          </div>

        </div>

        <div className="admin-profile">
          🛡️
        </div>

      </header>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <main className="admin-dashboard-content">

        {/* Welcome */}
        <div className="admin-welcome">

          <h2>
            👋 {t.welcome}
          </h2>

          <p>
            {t.welcomeDesc}
          </p>

        </div>

        {/* =================================================
            STATISTICS
        ================================================= */}

        <div className="admin-stats-grid">

          {/* Farmers */}
          <div className="admin-stat-card">

            <div className="admin-stat-icon">
              👨‍🌾
            </div>

            <div>
              <h3>120</h3>
              <p>{t.farmerCount}</p>
            </div>

          </div>

          {/* Buyers */}
          <div className="admin-stat-card">

            <div className="admin-stat-icon">
              🏪
            </div>

            <div>
              <h3>48</h3>
              <p>{t.buyerCount}</p>
            </div>

          </div>

          {/* Crops */}
          <div className="admin-stat-card">

            <div className="admin-stat-icon">
              🌾
            </div>

            <div>
              <h3>25</h3>
              <p>{t.cropCount}</p>
            </div>

          </div>

          {/* Markets */}
          <div className="admin-stat-card">

            <div className="admin-stat-icon">
              🏬
            </div>

            <div>
              <h3>18</h3>
              <p>{t.marketCount}</p>
            </div>

          </div>

        </div>

        {/* =================================================
            MANAGEMENT
        ================================================= */}

        <section className="admin-modules-section">

          <h2>
            ⚙️ {t.management}
          </h2>

          <div className="admin-modules-grid">

            {adminModules.map(
              (module, index) => (
                <button
                  type="button"
                  className="admin-module-card"
                  key={index}
                  onClick={() => {
                    if (
                      typeof module.onClick ===
                      "function"
                    ) {
                      module.onClick();
                    }
                  }}
                >

                  <div className="admin-module-icon">
                    {module.icon}
                  </div>

                  <div className="admin-module-content">

                    <h3>
                      {module.title}
                    </h3>

                    <p>
                      {module.description}
                    </p>

                  </div>

                  <div className="admin-module-arrow">
                    →
                  </div>

                </button>
              )
            )}

          </div>

        </section>

        {/* =================================================
            LOGOUT
        ================================================= */}

        <div className="admin-logout-section">

          <button
            type="button"
            className="admin-logout-button"
            onClick={() => {
              if (typeof onLogout === "function") {
                onLogout();
              }
            }}
          >
            🚪 {t.logout}
          </button>

        </div>

      </main>

    </div>
  );
}

export default AdminDashboard;
