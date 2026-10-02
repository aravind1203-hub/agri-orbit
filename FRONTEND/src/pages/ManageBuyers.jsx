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

    pageTitle: "Manage Buyers",
    pageDesc: "View and manage registered buyers",
    buyersTitle: "Buyers",

    total: "Total Buyers",
    active: "Active",
    blocked: "Blocked",
    showing: "Showing",

    search:
      "Search buyer, location, district or crop...",

    buyer: "Buyer",
    mobile: "Mobile",
    location: "Location",
    crops: "Interested Crops",
    requirement: "Requirement",
    rating: "Rating",
    status: "Status",
    action: "Action",

    view: "View",
    block: "Block",
    unblock: "Unblock",

    loading: "Loading Buyers...",
    loadingDesc:
      "Please wait while buyer data is loading.",

    unableLoad: "Unable to Load Buyers",

    noBuyers: "No Buyers Found",
    noBuyersDesc:
      "Try searching with another buyer name, location, district or crop.",

    back: "Back to Admin Dashboard",

    buyerDetails: "Buyer",
    notSpecified: "Not specified",
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

    pageTitle: "வாங்குபவர்களை நிர்வகிக்கவும்",
    pageDesc:
      "பதிவு செய்த வாங்குபவர்களை பார்க்கவும் நிர்வகிக்கவும்",
    buyersTitle: "வாங்குபவர்கள்",

    total: "மொத்த வாங்குபவர்கள்",
    active: "செயலில்",
    blocked: "தடுக்கப்பட்டவர்கள்",
    showing: "காட்டப்படுவது",

    search:
      "வாங்குபவர், இடம், மாவட்டம் அல்லது பயிரை தேடுங்கள்...",

    buyer: "வாங்குபவர்",
    mobile: "மொபைல்",
    location: "இடம்",
    crops: "விருப்பமான பயிர்கள்",
    requirement: "தேவை",
    rating: "மதிப்பீடு",
    status: "நிலை",
    action: "செயல்",

    view: "பார்க்க",
    block: "தடுக்க",
    unblock: "தடை நீக்கு",

    loading: "வாங்குபவர்களை ஏற்றுகிறது...",
    loadingDesc:
      "வாங்குபவர்களின் தகவல் ஏற்றப்படுகிறது. காத்திருக்கவும்.",

    unableLoad:
      "வாங்குபவர்களை ஏற்ற முடியவில்லை",

    noBuyers: "வாங்குபவர்கள் கிடைக்கவில்லை",
    noBuyersDesc:
      "வேறு வாங்குபவர் பெயர், இடம், மாவட்டம் அல்லது பயிரை தேடுங்கள்.",

    back: "Admin Dashboard-க்கு திரும்பு",

    buyerDetails: "வாங்குபவர்",
    notSpecified: "குறிப்பிடப்படவில்லை",
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

    pageTitle: "खरीदारों को मैनेज करें",
    pageDesc:
      "पंजीकृत खरीदारों को देखें और मैनेज करें",
    buyersTitle: "खरीदार",

    total: "कुल खरीदार",
    active: "सक्रिय",
    blocked: "ब्लॉक किए गए",
    showing: "दिखाए जा रहे हैं",

    search:
      "खरीदार, स्थान, जिला या फसल खोजें...",

    buyer: "खरीदार",
    mobile: "मोबाइल",
    location: "स्थान",
    crops: "रुचि वाली फसलें",
    requirement: "आवश्यकता",
    rating: "रेटिंग",
    status: "स्थिति",
    action: "एक्शन",

    view: "देखें",
    block: "ब्लॉक",
    unblock: "अनब्लॉक",

    loading: "खरीदार लोड हो रहे हैं...",
    loadingDesc:
      "कृपया प्रतीक्षा करें।",

    unableLoad:
      "खरीदार लोड नहीं हो सके",

    noBuyers: "कोई खरीदार नहीं मिला",
    noBuyersDesc:
      "किसी अन्य खरीदार, स्थान, जिले या फसल के नाम से खोजें।",

    back: "एडमिन डैशबोर्ड पर वापस जाएं",

    buyerDetails: "खरीदार",
    notSpecified: "निर्दिष्ट नहीं",
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

    pageTitle: "కొనుగోలుదారులను నిర్వహించండి",
    pageDesc:
      "నమోదైన కొనుగోలుదారులను చూడండి మరియు నిర్వహించండి",
    buyersTitle: "కొనుగోలుదారులు",

    total: "మొత్తం కొనుగోలుదారులు",
    active: "యాక్టివ్",
    blocked: "బ్లాక్ చేయబడినవి",
    showing: "చూపిస్తున్నవి",

    search:
      "కొనుగోలుదారు, ప్రాంతం, జిల్లా లేదా పంటను శోధించండి...",

    buyer: "కొనుగోలుదారు",
    mobile: "మొబైల్",
    location: "ప్రాంతం",
    crops: "ఆసక్తి ఉన్న పంటలు",
    requirement: "అవసరం",
    rating: "రేటింగ్",
    status: "స్థితి",
    action: "చర్య",

    view: "చూడండి",
    block: "బ్లాక్",
    unblock: "అన్‌బ్లాక్",

    loading: "కొనుగోలుదారులను లోడ్ చేస్తోంది...",
    loadingDesc:
      "కొనుగోలుదారుల సమాచారం లోడ్ అవుతోంది. దయచేసి వేచి ఉండండి.",

    unableLoad:
      "కొనుగోలుదారులను లోడ్ చేయలేకపోయాము",

    noBuyers: "కొనుగోలుదారులు కనబడలేదు",
    noBuyersDesc:
      "మరొక కొనుగోలుదారు, ప్రాంతం, జిల్లా లేదా పంటతో శోధించండి.",

    back: "అడ్మిన్ డాష్‌బోర్డ్‌కు తిరిగి వెళ్లండి",

    buyerDetails: "కొనుగోలుదారు",
    notSpecified: "పేర్కొనలేదు",
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

    pageTitle: "ಖರೀದಿದಾರರನ್ನು ನಿರ್ವಹಿಸಿ",
    pageDesc:
      "ನೋಂದಾಯಿತ ಖರೀದಿದಾರರನ್ನು ವೀಕ್ಷಿಸಿ ಮತ್ತು ನಿರ್ವಹಿಸಿ",
    buyersTitle: "ಖರೀದಿದಾರರು",

    total: "ಒಟ್ಟು ಖರೀದಿದಾರರು",
    active: "ಸಕ್ರಿಯ",
    blocked: "ಬ್ಲಾಕ್ ಮಾಡಲಾಗಿದೆ",
    showing: "ತೋರಿಸಲಾಗುತ್ತಿದೆ",

    search:
      "ಖರೀದಿದಾರ, ಸ್ಥಳ, ಜಿಲ್ಲೆ ಅಥವಾ ಬೆಳೆಯನ್ನು ಹುಡುಕಿ...",

    buyer: "ಖರೀದಿದಾರ",
    mobile: "ಮೊಬೈಲ್",
    location: "ಸ್ಥಳ",
    crops: "ಆಸಕ್ತಿಯ ಬೆಳೆಗಳು",
    requirement: "ಅವಶ್ಯಕತೆ",
    rating: "ರೇಟಿಂಗ್",
    status: "ಸ್ಥಿತಿ",
    action: "ಕ್ರಿಯೆ",

    view: "ವೀಕ್ಷಿಸಿ",
    block: "ಬ್ಲಾಕ್",
    unblock: "ಅನ್‌ಬ್ಲಾಕ್",

    loading: "ಖರೀದಿದಾರರನ್ನು ಲೋಡ್ ಮಾಡಲಾಗುತ್ತಿದೆ...",
    loadingDesc:
      "ಖರೀದಿದಾರರ ಮಾಹಿತಿಯನ್ನು ಲೋಡ್ ಮಾಡಲಾಗುತ್ತಿದೆ. ದಯವಿಟ್ಟು ಕಾಯಿರಿ.",

    unableLoad:
      "ಖರೀದಿದಾರರನ್ನು ಲೋಡ್ ಮಾಡಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ",

    noBuyers: "ಯಾವುದೇ ಖರೀದಿದಾರರು ಕಂಡುಬಂದಿಲ್ಲ",
    noBuyersDesc:
      "ಬೇರೆ ಖರೀದಿದಾರ, ಸ್ಥಳ, ಜಿಲ್ಲೆ ಅಥವಾ ಬೆಳೆಯ ಹೆಸರಿನಿಂದ ಹುಡುಕಿ.",

    back: "ಅಡ್ಮಿನ್ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್‌ಗೆ ಹಿಂತಿರುಗಿ",

    buyerDetails: "ಖರೀದಿದಾರ",
    notSpecified: "ನಿರ್ದಿಷ್ಟಪಡಿಸಿಲ್ಲ",
    now: "ಈಗ",
  },
};

function ManageBuyers({
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

  const [buyers, setBuyers] = useState([]);
  const [search, setSearch] = useState("");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [showMenu, setShowMenu] =
    useState(false);

  // =========================================================
  // FETCH BUYERS FROM BACKEND
  // =========================================================

  useEffect(() => {
    const fetchBuyers = async () => {
      setLoading(true);
      setError("");

      try {
        const response = await fetch(
          "https://agri-orbit.onrender.com/api/admin/buyers"
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data.error ||
              "Failed to fetch buyers."
          );
        }

        const formattedBuyers =
          data.map((buyer) => ({
            id: buyer.buyer_id,
            name:
              buyer.business_name ||
              buyer.name,
            mobile: buyer.mobile,
            email: buyer.email,
            contactPerson:
              buyer.contact_person,
            district: buyer.district,
            location: buyer.location,
            crops:
              buyer.interested_crops,
            requirement:
              buyer.requirement ||
              "Not specified",
            rating: "4.5",
            status:
              buyer.status ||
              "Active",
          }));

        setBuyers(formattedBuyers);
      } catch (err) {
        console.error(
          "Admin buyers fetch error:",
          err
        );

        setError(
          err.message ||
            "Unable to load buyers."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchBuyers();
  }, []);

  // =========================================================
  // SEARCH
  // =========================================================

  const filteredBuyers =
    buyers.filter((buyer) =>
      `
        ${buyer.name}
        ${buyer.mobile}
        ${buyer.email}
        ${buyer.district}
        ${buyer.location}
        ${buyer.crops}
        ${buyer.requirement}
      `
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );

  // =========================================================
  // VIEW / BLOCK / UNBLOCK
  // =========================================================

  const handleAction = async (
    buyer,
    action
  ) => {
    if (action === "view") {
      alert(
        `${t.buyerDetails}: ${buyer.name}\n` +
        `Mobile: ${buyer.mobile}\n` +
        `Email: ${buyer.email}\n` +
        `Contact Person: ${
          buyer.contactPerson ||
          t.notSpecified
        }\n` +
        `District: ${buyer.district}\n` +
        `Location: ${buyer.location}\n` +
        `Interested Crops: ${buyer.crops}\n` +
        `Requirement: ${buyer.requirement}\n` +
        `Rating: ${buyer.rating}`
      );

      return;
    }

    if (action === "block") {
      const newStatus =
        buyer.status === "Active"
          ? "Blocked"
          : "Active";

      try {
        const response = await fetch(
          `https://agri-orbit.onrender.com/api/admin/buyers/${buyer.id}/status`,
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
              "Failed to update buyer status."
          );
        }

        setBuyers(
          (currentBuyers) =>
            currentBuyers.map(
              (item) =>
                item.id === buyer.id
                  ? {
                      ...item,
                      status:
                        newStatus,
                    }
                  : item
            )
        );

        alert(
          `${buyer.name} ${t.now} ${newStatus}.`
        );
      } catch (err) {
        console.error(
          "Buyer status update error:",
          err
        );

        alert(
          err.message ||
            "Unable to update buyer status."
        );
      }
    }
  };

  // =========================================================
  // SUMMARY
  // =========================================================

  const activeBuyers =
    buyers.filter(
      (buyer) =>
        buyer.status === "Active"
    ).length;

  const blockedBuyers =
    buyers.filter(
      (buyer) =>
        buyer.status === "Blocked"
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
              className="admin-drawer-item"
              onClick={() =>
                handleMenuAction(
                  onManageFarmers
                )
              }
            >
              <span>👨‍🌾</span>
              <span>
                {t.farmers}
              </span>
            </button>

            {/* Buyers */}
            <button
              type="button"
              className="admin-drawer-item active"
              onClick={closeMenu}
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
            🏪 {t.buyersTitle}
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
                  {buyers.length}
                </strong>
              </div>

              <div>
                <span>
                  {t.active}
                </span>

                <strong>
                  {activeBuyers}
                </strong>
              </div>

              <div>
                <span>
                  {t.blocked}
                </span>

                <strong>
                  {blockedBuyers}
                </strong>
              </div>

              <div>
                <span>
                  {t.showing}
                </span>

                <strong>
                  {filteredBuyers.length}
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

            {/* Buyer Table */}

            <div className="admin-table-container">

              <table className="admin-table">

                <thead>

                  <tr>

                    <th>
                      {t.buyer}
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
                      {t.requirement}
                    </th>

                    <th>
                      {t.rating}
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

                  {filteredBuyers.map(
                    (buyer) => (

                      <tr
                        key={
                          buyer.id
                        }
                      >

                        {/* Buyer */}

                        <td>

                          <div className="admin-farmer-name">

                            <div className="admin-table-avatar">
                              🏪
                            </div>

                            <strong>
                              {buyer.name}
                            </strong>

                          </div>

                        </td>

                        {/* Mobile */}

                        <td>
                          {buyer.mobile}
                        </td>

                        {/* Location */}

                        <td>

                          <div>

                            {buyer.location}

                            <small>
                              {
                                buyer.district
                              }
                            </small>

                          </div>

                        </td>

                        {/* Crops */}

                        <td>
                          {buyer.crops}
                        </td>

                        {/* Requirement */}

                        <td>

                          <strong>
                            {
                              buyer.requirement
                            }
                          </strong>

                        </td>

                        {/* Rating */}

                        <td>
                          ⭐{" "}
                          {buyer.rating}
                        </td>

                        {/* Status */}

                        <td>

                          <span
                            className={
                              buyer.status ===
                              "Active"
                                ? "admin-status active"
                                : "admin-status blocked"
                            }
                          >
                            {
                              buyer.status
                            }
                          </span>

                        </td>

                        {/* Actions */}

                        <td>

                          <div className="admin-action-buttons">

                            <button
                              type="button"
                              className="admin-view-button"
                              onClick={() =>
                                handleAction(
                                  buyer,
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
                                  buyer,
                                  "block"
                                )
                              }
                            >
                              {buyer.status ===
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

              {filteredBuyers.length ===
                0 && (

                <div className="admin-no-results">

                  <div>🔍</div>

                  <h3>
                    {t.noBuyers}
                  </h3>

                  <p>
                    {t.noBuyersDesc}
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

export default ManageBuyers;
