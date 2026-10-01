import { useEffect, useState } from "react";

const translations = {
  English: {
    adminMenu: "Admin Menu",
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

    pageTitle: "Manage Farmers",
    pageDesc: "View and manage registered farmers",
    farmersTitle: "Farmers",

    total: "Total Farmers",
    active: "Active",
    blocked: "Blocked",
    showing: "Showing",

    search: "Search farmer, district, village or crop...",

    farmer: "Farmer",
    mobile: "Mobile",
    location: "Location",
    crops: "Crops",
    status: "Status",
    action: "Action",

    view: "View",
    block: "Block",
    unblock: "Unblock",

    loading: "Loading Farmers...",
    loadingDesc:
      "Please wait while farmer data is loading.",

    unableLoad: "Unable to Load Farmers",

    noFarmers: "No Farmers Found",
    noFarmersDesc:
      "Try searching with another farmer name, district, village or crop.",

    back: "Back to Admin Dashboard",

    farmerDetails: "Farmer",
    now: "is now",
  },

  "தமிழ்": {
    adminMenu: "நிர்வாக மெனு",
    dashboard: "Admin Dashboard",
    farmers: "விவசாயிகளை நிர்வகிக்கவும்",
    buyers: "வாங்குபவர்களை நிர்வகிக்கவும்",
    crops: "பயிர்களை நிர்வகிக்கவும்",
    markets: "சந்தைகளை நிர்வகிக்கவும்",
    prices: "விலைகளை நிர்வகிக்கவும்",
    offers: "ஆஃபர்களை நிர்வகிக்கவும்",
    reports: "அறிக்கைகள்",
    profile: "சுயவிவரம்",
    settings: "அமைப்புகள்",
    logout: "வெளியேறு",
    darkMode: "டார்க் மோடு",
    lightMode: "லைட் மோடு",

    pageTitle: "விவசாயிகளை நிர்வகிக்கவும்",
    pageDesc: "பதிவு செய்த விவசாயிகளை பார்க்கவும் நிர்வகிக்கவும்",
    farmersTitle: "விவசாயிகள்",

    total: "மொத்த விவசாயிகள்",
    active: "செயலில்",
    blocked: "தடுக்கப்பட்டவர்கள்",
    showing: "காட்டப்படுவது",

    search: "விவசாயி, மாவட்டம், கிராமம் அல்லது பயிரை தேடுங்கள்...",

    farmer: "விவசாயி",
    mobile: "மொபைல்",
    location: "இடம்",
    crops: "பயிர்கள்",
    status: "நிலை",
    action: "செயல்",

    view: "பார்க்க",
    block: "தடுக்க",
    unblock: "தடை நீக்கு",

    loading: "விவசாயிகளை ஏற்றுகிறது...",
    loadingDesc:
      "விவசாயிகளின் தகவல் ஏற்றப்படுகிறது. காத்திருக்கவும்.",

    unableLoad: "விவசாயிகளை ஏற்ற முடியவில்லை",

    noFarmers: "விவசாயிகள் கிடைக்கவில்லை",
    noFarmersDesc:
      "வேறு விவசாயி பெயர், மாவட்டம், கிராமம் அல்லது பயிரை தேடுங்கள்.",

    back: "Admin Dashboard-க்கு திரும்பு",

    farmerDetails: "விவசாயி",
    now: "இப்போது",
  },

  "हिन्दी": {
    adminMenu: "एडमिन मेनू",
    dashboard: "एडमिन डैशबोर्ड",
    farmers: "किसानों को मैनेज करें",
    buyers: "खरीदारों को मैनेज करें",
    crops: "फसलों को मैनेज करें",
    markets: "बाजारों को मैनेज करें",
    prices: "कीमतों को मैनेज करें",
    offers: "ऑफर को मैनेज करें",
    reports: "रिपोर्ट्स",
    profile: "प्रोफाइल",
    settings: "सेटिंग्स",
    logout: "लॉगआउट",
    darkMode: "डार्क मोड",
    lightMode: "लाइट मोड",

    pageTitle: "किसानों को मैनेज करें",
    pageDesc: "पंजीकृत किसानों को देखें और मैनेज करें",
    farmersTitle: "किसान",

    total: "कुल किसान",
    active: "सक्रिय",
    blocked: "ब्लॉक किए गए",
    showing: "दिखाए जा रहे हैं",

    search: "किसान, जिला, गांव या फसल खोजें...",

    farmer: "किसान",
    mobile: "मोबाइल",
    location: "स्थान",
    crops: "फसलें",
    status: "स्थिति",
    action: "एक्शन",

    view: "देखें",
    block: "ब्लॉक",
    unblock: "अनब्लॉक",

    loading: "किसान लोड हो रहे हैं...",
    loadingDesc:
      "कृपया प्रतीक्षा करें।",

    unableLoad: "किसान लोड नहीं हो सके",

    noFarmers: "कोई किसान नहीं मिला",
    noFarmersDesc:
      "किसी अन्य किसान, जिले, गांव या फसल के नाम से खोजें।",

    back: "एडमिन डैशबोर्ड पर वापस जाएं",

    farmerDetails: "किसान",
    now: "अब",
  },

  "తెలుగు": {
    adminMenu: "అడ్మిన్ మెను",
    dashboard: "అడ్మిన్ డాష్‌బోర్డ్",
    farmers: "రైతులను నిర్వహించండి",
    buyers: "కొనుగోలుదారులను నిర్వహించండి",
    crops: "పంటలను నిర్వహించండి",
    markets: "మార్కెట్లను నిర్వహించండి",
    prices: "ధరలను నిర్వహించండి",
    offers: "ఆఫర్లను నిర్వహించండి",
    reports: "రిపోర్టులు",
    profile: "ప్రొఫైల్",
    settings: "సెట్టింగ్స్",
    logout: "లాగౌట్",
    darkMode: "డార్క్ మోడ్",
    lightMode: "లైట్ మోడ్",

    pageTitle: "రైతులను నిర్వహించండి",
    pageDesc: "నమోదైన రైతులను చూడండి మరియు నిర్వహించండి",
    farmersTitle: "రైతులు",

    total: "మొత్తం రైతులు",
    active: "యాక్టివ్",
    blocked: "బ్లాక్ చేయబడినవి",
    showing: "చూపిస్తున్నవి",

    search: "రైతు, జిల్లా, గ్రామం లేదా పంటను శోధించండి...",

    farmer: "రైతు",
    mobile: "మొబైల్",
    location: "ప్రాంతం",
    crops: "పంటలు",
    status: "స్థితి",
    action: "చర్య",

    view: "చూడండి",
    block: "బ్లాక్",
    unblock: "అన్‌బ్లాక్",

    loading: "రైతులను లోడ్ చేస్తోంది...",
    loadingDesc:
      "రైతుల సమాచారం లోడ్ అవుతోంది. దయచేసి వేచి ఉండండి.",

    unableLoad: "రైతులను లోడ్ చేయలేకపోయాము",

    noFarmers: "రైతులు కనబడలేదు",
    noFarmersDesc:
      "మరొక రైతు పేరు, జిల్లా, గ్రామం లేదా పంటతో శోధించండి.",

    back: "అడ్మిన్ డాష్‌బోర్డ్‌కు తిరిగి వెళ్లండి",

    farmerDetails: "రైతు",
    now: "ఇప్పుడు",
  },

  "ಕನ್ನಡ": {
    adminMenu: "ಅಡ್ಮಿನ್ ಮೆನು",
    dashboard: "ಅಡ್ಮಿನ್ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
    farmers: "ರೈತರನ್ನು ನಿರ್ವಹಿಸಿ",
    buyers: "ಖರೀದಿದಾರರನ್ನು ನಿರ್ವಹಿಸಿ",
    crops: "ಬೆಳೆಗಳನ್ನು ನಿರ್ವಹಿಸಿ",
    markets: "ಮಾರುಕಟ್ಟೆಗಳನ್ನು ನಿರ್ವಹಿಸಿ",
    prices: "ಬೆಲೆಗಳನ್ನು ನಿರ್ವಹಿಸಿ",
    offers: "ಆಫರ್‌ಗಳನ್ನು ನಿರ್ವಹಿಸಿ",
    reports: "ವರದಿಗಳು",
    profile: "ಪ್ರೊಫೈಲ್",
    settings: "ಸೆಟ್ಟಿಂಗ್ಸ್",
    logout: "ಲಾಗ್‌ಔಟ್",
    darkMode: "ಡಾರ್ಕ್ ಮೋಡ್",
    lightMode: "ಲೈಟ್ ಮೋಡ್",

    pageTitle: "ರೈತರನ್ನು ನಿರ್ವಹಿಸಿ",
    pageDesc: "ನೋಂದಾಯಿತ ರೈತರನ್ನು ವೀಕ್ಷಿಸಿ ಮತ್ತು ನಿರ್ವಹಿಸಿ",
    farmersTitle: "ರೈತರು",

    total: "ಒಟ್ಟು ರೈತರು",
    active: "ಸಕ್ರಿಯ",
    blocked: "ಬ್ಲಾಕ್ ಮಾಡಲಾಗಿದೆ",
    showing: "ತೋರಿಸಲಾಗುತ್ತಿದೆ",

    search: "ರೈತ, ಜಿಲ್ಲೆ, ಗ್ರಾಮ ಅಥವಾ ಬೆಳೆಯನ್ನು ಹುಡುಕಿ...",

    farmer: "ರೈತ",
    mobile: "ಮೊಬೈಲ್",
    location: "ಸ್ಥಳ",
    crops: "ಬೆಳೆಗಳು",
    status: "ಸ್ಥಿತಿ",
    action: "ಕ್ರಿಯೆ",

    view: "ವೀಕ್ಷಿಸಿ",
    block: "ಬ್ಲಾಕ್",
    unblock: "ಅನ್‌ಬ್ಲಾಕ್",

    loading: "ರೈತರನ್ನು ಲೋಡ್ ಮಾಡಲಾಗುತ್ತಿದೆ...",
    loadingDesc:
      "ರೈತರ ಮಾಹಿತಿಯನ್ನು ಲೋಡ್ ಮಾಡಲಾಗುತ್ತಿದೆ. ದಯವಿಟ್ಟು ಕಾಯಿರಿ.",

    unableLoad: "ರೈತರನ್ನು ಲೋಡ್ ಮಾಡಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ",

    noFarmers: "ಯಾವುದೇ ರೈತರು ಕಂಡುಬಂದಿಲ್ಲ",
    noFarmersDesc:
      "ಬೇರೆ ರೈತ, ಜಿಲ್ಲೆ, ಗ್ರಾಮ ಅಥವಾ ಬೆಳೆಯ ಹೆಸರಿನಿಂದ ಹುಡುಕಿ.",

    back: "ಅಡ್ಮಿನ್ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್‌ಗೆ ಹಿಂತಿರುಗಿ",

    farmerDetails: "ರೈತ",
    now: "ಈಗ",
  },
};

function ManageFarmers({
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

  const [farmers, setFarmers] = useState([]);
  const [search, setSearch] = useState("");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [showMenu, setShowMenu] =
    useState(false);

  // =========================================================
  // FETCH FARMERS FROM BACKEND
  // =========================================================

  useEffect(() => {
    const fetchFarmers = async () => {
      setLoading(true);
      setError("");

      try {
        const response = await fetch(
          "http://10.19.77.40:5000/api/admin/farmers"
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data.error ||
              "Failed to fetch farmers."
          );
        }

        const formattedFarmers =
          data.map((farmer) => ({
            id: farmer.farmer_id,
            name: farmer.name,
            mobile: farmer.mobile,
            email: farmer.email,
            district: farmer.district,
            village: farmer.village,
            location: farmer.location,
            crops: farmer.crops_grown,
            status: "Active",
          }));

        setFarmers(formattedFarmers);
      } catch (err) {
        console.error(
          "Admin farmers fetch error:",
          err
        );

        setError(
          err.message ||
            "Unable to load farmers."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchFarmers();
  }, []);

  // =========================================================
  // SEARCH
  // =========================================================

  const filteredFarmers =
    farmers.filter((farmer) =>
      `
        ${farmer.name}
        ${farmer.mobile}
        ${farmer.email}
        ${farmer.district}
        ${farmer.village}
        ${farmer.location}
        ${farmer.crops}
      `
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  // =========================================================
  // FARMER ACTION
  // =========================================================

  const handleAction = async (
    farmer,
    action
  ) => {
    if (action === "view") {
      alert(
        `${t.farmerDetails}: ${farmer.name}\n` +
        `Mobile: ${farmer.mobile}\n` +
        `Email: ${farmer.email}\n` +
        `District: ${farmer.district}\n` +
        `Village: ${farmer.village}\n` +
        `Location: ${farmer.location}\n` +
        `Crops: ${farmer.crops}`
      );

      return;
    }

    if (action === "block") {
      const newStatus =
        farmer.status === "Active"
          ? "Blocked"
          : "Active";

      try {
        const response = await fetch(
          `http://10.19.77.40:5000/api/admin/farmers/${farmer.id}/status`,
          {
            method: "PUT",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify({
              status: newStatus,
            }),
          }
        );

        const data =
          await response.json();

        if (!response.ok) {
          throw new Error(
            data.error ||
              "Failed to update farmer status."
          );
        }

        setFarmers(
          (currentFarmers) =>
            currentFarmers.map(
              (item) =>
                item.id === farmer.id
                  ? {
                      ...item,
                      status:
                        newStatus,
                    }
                  : item
            )
        );

        alert(
          `${farmer.name} ${t.now} ${newStatus}.`
        );
      } catch (error) {
        console.error(
          "Farmer status update error:",
          error
        );

        alert(
          error.message ||
            "Unable to update farmer status."
        );
      }
    }
  };

  // =========================================================
  // SUMMARY
  // =========================================================

  const activeFarmers =
    farmers.filter(
      (farmer) =>
        farmer.status === "Active"
    ).length;

  const blockedFarmers =
    farmers.filter(
      (farmer) =>
        farmer.status === "Blocked"
    ).length;

  // =========================================================
  // MENU
  // =========================================================

  const closeMenu = () => {
    setShowMenu(false);
  };

  const handleMenuAction = (
    action
  ) => {
    closeMenu();

    if (action) {
      action();
    }
  };

  // =========================================================
  // UI
  // =========================================================

  return (
    <div
      className={`admin-manage-page ${
        darkMode ? "dark-mode" : ""
      }`}
    >

      {/* =====================================================
          SIDE DRAWER
      ===================================================== */}

      {showMenu && (
        <div
          className="admin-drawer-overlay"
          onClick={closeMenu}
        >
          <aside
            className="admin-side-drawer"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <div className="admin-drawer-header">

              <div>
                <h2>
                  AgriOrbit 🌱
                </h2>

                <p>
                  {t.adminMenu}
                </p>
              </div>

              <button
                type="button"
                className="admin-drawer-close"
                onClick={closeMenu}
              >
                ✕
              </button>

            </div>

            {/* Dashboard */}
            <button
              type="button"
              className="admin-drawer-item"
              onClick={() =>
                handleMenuAction(
                  onAdminDashboard ||
                    onBackToAdminDashboard
                )
              }
            >
              <span>🏠</span>
              <span>
                {t.dashboard}
              </span>
            </button>

            {/* Farmers */}
            <button
              type="button"
              className="admin-drawer-item active"
              onClick={closeMenu}
            >
              <span>👨‍🌾</span>
              <span>
                {t.farmers}
              </span>
            </button>

            {/* Buyers */}
            <button
              type="button"
              className="admin-drawer-item"
              onClick={() =>
                handleMenuAction(
                  onManageBuyers
                )
              }
            >
              <span>🏪</span>
              <span>
                {t.buyers}
              </span>
            </button>

            {/* Crops */}
            <button
              type="button"
              className="admin-drawer-item"
              onClick={() =>
                handleMenuAction(
                  onManageCrops
                )
              }
            >
              <span>🌾</span>
              <span>
                {t.crops}
              </span>
            </button>

            {/* Markets */}
            <button
              type="button"
              className="admin-drawer-item"
              onClick={() =>
                handleMenuAction(
                  onManageMarkets
                )
              }
            >
              <span>🏬</span>
              <span>
                {t.markets}
              </span>
            </button>

            {/* Prices */}
            <button
              type="button"
              className="admin-drawer-item"
              onClick={() =>
                handleMenuAction(
                  onManagePrices
                )
              }
            >
              <span>💰</span>
              <span>
                {t.prices}
              </span>
            </button>

            {/* Offers */}
            <button
              type="button"
              className="admin-drawer-item"
              onClick={() =>
                handleMenuAction(
                  onManageOffers
                )
              }
            >
              <span>📦</span>
              <span>
                {t.offers}
              </span>
            </button>

            {/* Reports */}
            <button
              type="button"
              className="admin-drawer-item"
              onClick={() =>
                handleMenuAction(
                  onReports
                )
              }
            >
              <span>📊</span>
              <span>
                {t.reports}
              </span>
            </button>

            <div className="admin-drawer-divider" />

            {/* Profile */}
            <button
              type="button"
              className="admin-drawer-item"
              onClick={() =>
                handleMenuAction(
                  onProfile
                )
              }
            >
              <span>👤</span>
              <span>
                {t.profile}
              </span>
            </button>

            {/* Settings */}
            <button
              type="button"
              className="admin-drawer-item"
              onClick={() =>
                handleMenuAction(
                  onSettings
                )
              }
            >
              <span>⚙️</span>
              <span>
                {t.settings}
              </span>
            </button>

            {/* Theme */}
            <button
              type="button"
              className="admin-drawer-item"
              onClick={() => {
                if (onToggleTheme) {
                  onToggleTheme();
                }
              }}
            >
              <span>
                {darkMode
                  ? "☀️"
                  : "🌙"}
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
                onChange={(e) =>
                  onLanguageChange &&
                  onLanguageChange(
                    e.target.value
                  )
                }
              >
                {languages.map(
                  (lang) => (
                    <option
                      value={lang}
                      key={lang}
                    >
                      {lang}
                    </option>
                  )
                )}
              </select>

            </div>

            <div className="admin-drawer-divider" />

            {/* Logout */}
            <button
              type="button"
              className="admin-drawer-item admin-logout-item"
              onClick={() =>
                handleMenuAction(
                  onLogout
                )
              }
            >
              <span>🚪</span>
              <span>
                {t.logout}
              </span>
            </button>

          </aside>
        </div>
      )}

      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="admin-dashboard-header">

        <div className="admin-header-left">

          <button
            type="button"
            className="admin-menu-button"
            onClick={() =>
              setShowMenu(true)
            }
            aria-label="Open admin menu"
          >
            ☰
          </button>

          <div>
            <h1>
              AgriOrbit 🌱
            </h1>

            <p>
              {t.pageTitle}
            </p>
          </div>

        </div>

        <div className="admin-profile">
          🛡️
        </div>

      </header>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <main className="admin-manage-content">

        <div className="admin-page-title">

          <h2>
            👨‍🌾 {t.farmersTitle}
          </h2>

          <p>
            {t.pageDesc}
          </p>

        </div>

        {/* LOADING */}

        {loading && (
          <div className="admin-no-results">

            <div>⏳</div>

            <h3>
              {t.loading}
            </h3>

            <p>
              {t.loadingDesc}
            </p>

          </div>
        )}

        {/* ERROR */}

        {!loading && error && (
          <div className="admin-no-results">

            <div>⚠️</div>

            <h3>
              {t.unableLoad}
            </h3>

            <p>
              {error}
            </p>

          </div>
        )}

        {/* DATA */}

        {!loading && !error && (
          <>

            {/* Summary */}

            <div className="admin-summary-card">

              <div>
                <span>
                  {t.total}
                </span>

                <strong>
                  {farmers.length}
                </strong>
              </div>

              <div>
                <span>
                  {t.active}
                </span>

                <strong>
                  {activeFarmers}
                </strong>
              </div>

              <div>
                <span>
                  {t.blocked}
                </span>

                <strong>
                  {blockedFarmers}
                </strong>
              </div>

              <div>
                <span>
                  {t.showing}
                </span>

                <strong>
                  {filteredFarmers.length}
                </strong>
              </div>

            </div>

            {/* Search */}

            <div className="admin-search-box">

              <input
                type="text"
                placeholder={`🔍 ${t.search}`}
                value={search}
                onChange={(e) =>
                  setSearch(
                    e.target.value
                  )
                }
              />

            </div>

            {/* Table */}

            <div className="admin-table-container">

              <table className="admin-table">

                <thead>

                  <tr>
                    <th>
                      {t.farmer}
                    </th>

                    <th>
                      {t.mobile}
                    </th>

                    <th>
                      {t.location}
                    </th>

                    <th>
                      {t.crops}
                    </th>

                    <th>
                      {t.status}
                    </th>

                    <th>
                      {t.action}
                    </th>
                  </tr>

                </thead>

                <tbody>

                  {filteredFarmers.map(
                    (farmer) => (

                      <tr
                        key={
                          farmer.id
                        }
                      >

                        <td>

                          <div className="admin-farmer-name">

                            <div className="admin-table-avatar">
                              👨‍🌾
                            </div>

                            <strong>
                              {farmer.name}
                            </strong>

                          </div>

                        </td>

                        <td>
                          {farmer.mobile}
                        </td>

                        <td>

                          <div>

                            {farmer.village}

                            <small>
                              {
                                farmer.district
                              }
                            </small>

                          </div>

                        </td>

                        <td>
                          {farmer.crops}
                        </td>

                        <td>

                          <span
                            className={
                              farmer.status ===
                              "Active"
                                ? "admin-status active"
                                : "admin-status blocked"
                            }
                          >
                            {
                              farmer.status
                            }
                          </span>

                        </td>

                        <td>

                          <div className="admin-action-buttons">

                            <button
                              type="button"
                              className="admin-view-button"
                              onClick={() =>
                                handleAction(
                                  farmer,
                                  "view"
                                )
                              }
                            >
                              👁️{" "}
                              {t.view}
                            </button>

                            <button
                              type="button"
                              className="admin-block-button"
                              onClick={() =>
                                handleAction(
                                  farmer,
                                  "block"
                                )
                              }
                            >
                              {farmer.status ===
                              "Active"
                                ? `🚫 ${t.block}`
                                : `🔓 ${t.unblock}`}
                            </button>

                          </div>

                        </td>

                      </tr>

                    )
                  )}

                </tbody>

              </table>

              {/* NO RESULTS */}

              {filteredFarmers.length ===
                0 && (

                <div className="admin-no-results">

                  <div>🔍</div>

                  <h3>
                    {t.noFarmers}
                  </h3>

                  <p>
                    {t.noFarmersDesc}
                  </p>

                </div>
              )}

            </div>

          </>
        )}

        {/* BACK */}

        <div className="admin-back-section">

          <button
            type="button"
            className="admin-back-button"
            onClick={
              onBackToAdminDashboard
            }
          >
            ← {t.back}
          </button>

        </div>

      </main>
    </div>
  );
}

export default ManageFarmers;
