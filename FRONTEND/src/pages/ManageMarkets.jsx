import { useEffect, useState } from "react";

const translations = {
  English: {
    page: "Manage Markets",
    title: "🏬 Markets",
    subtitle: "View and manage agricultural markets",
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

    total: "Total Markets",
    active: "Active",
    inactive: "Inactive",
    addMarket: "+ Add Market",

    search: "🔍 Search market, district or location...",
    loading: "Loading Markets...",
    loadingText: "Please wait while market data is loading.",
    unable: "Unable to Load Markets",
    retry: "🔄 Retry",

    availableCrops: "🌾 Available Crops",
    view: "👁️ View",
    edit: "✏️ Edit",
    disable: "🚫 Disable",
    enable: "✅ Enable",

    noMarkets: "No Markets Found",
    noMarketsText:
      "Try searching with another market name, district or location.",

    back: "← Back to Admin Dashboard",

    editMarket: "✏️ Edit Market",
    addMarketTitle: "🏬 Add Market",
    updateDetails: "Update market details",
    enterDetails: "Enter the new market details",

    marketName: "Market Name",
    district: "District",
    location: "Location",

    updateMarket: "Update Market",
    saveMarket: "Add Market",
    cancel: "✖ Cancel",

    marketAdded: "Market added successfully!",
    marketUpdated: "Market updated successfully!",
    marketEnabled: "Market enabled successfully!",
    marketDisabled: "Market disabled successfully!",
  },

  "தமிழ்": {
    page: "சந்தைகளை நிர்வகிக்கவும்",
    title: "🏬 சந்தைகள்",
    subtitle: "விவசாய சந்தைகளை பார்க்கவும் நிர்வகிக்கவும்",
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

    total: "மொத்த சந்தைகள்",
    active: "செயலில்",
    inactive: "செயலற்றது",
    addMarket: "+ சந்தை சேர்க்கவும்",

    search: "🔍 சந்தை, மாவட்டம் அல்லது இடத்தை தேடவும்...",
    loading: "சந்தைகள் ஏற்றப்படுகிறது...",
    loadingText: "சந்தை தகவல்கள் ஏற்றப்படும் வரை காத்திருக்கவும்.",
    unable: "சந்தைகளை ஏற்ற முடியவில்லை",
    retry: "🔄 மீண்டும் முயற்சி",

    availableCrops: "🌾 கிடைக்கும் பயிர்கள்",
    view: "👁️ பார்க்க",
    edit: "✏️ திருத்து",
    disable: "🚫 முடக்கு",
    enable: "✅ இயக்கு",

    noMarkets: "சந்தைகள் எதுவும் இல்லை",
    noMarketsText:
      "வேறு சந்தை பெயர், மாவட்டம் அல்லது இடத்தை தேடிப் பார்க்கவும்.",

    back: "← Admin Dashboard-க்கு திரும்பு",

    editMarket: "✏️ சந்தையை திருத்து",
    addMarketTitle: "🏬 சந்தை சேர்க்கவும்",
    updateDetails: "சந்தை தகவல்களை புதுப்பிக்கவும்",
    enterDetails: "புதிய சந்தை தகவல்களை உள்ளிடவும்",

    marketName: "சந்தை பெயர்",
    district: "மாவட்டம்",
    location: "இடம்",

    updateMarket: "சந்தையை புதுப்பிக்கவும்",
    saveMarket: "சந்தை சேர்க்கவும்",
    cancel: "✖ ரத்து",

    marketAdded: "சந்தை வெற்றிகரமாக சேர்க்கப்பட்டது!",
    marketUpdated: "சந்தை வெற்றிகரமாக புதுப்பிக்கப்பட்டது!",
    marketEnabled: "சந்தை வெற்றிகரமாக இயக்கப்பட்டது!",
    marketDisabled: "சந்தை வெற்றிகரமாக முடக்கப்பட்டது!",
  },

  "हिन्दी": {
    page: "बाज़ार प्रबंधन",
    title: "🏬 बाज़ार",
    subtitle: "कृषि बाज़ार देखें और प्रबंधित करें",
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

    total: "कुल बाज़ार",
    active: "सक्रिय",
    inactive: "निष्क्रिय",
    addMarket: "+ बाज़ार जोड़ें",

    search: "🔍 बाज़ार, जिला या स्थान खोजें...",
    loading: "बाज़ार लोड हो रहे हैं...",
    loadingText: "कृपया बाज़ार डेटा लोड होने तक प्रतीक्षा करें।",
    unable: "बाज़ार लोड नहीं हो सके",
    retry: "🔄 पुनः प्रयास",

    availableCrops: "🌾 उपलब्ध फसलें",
    view: "👁️ देखें",
    edit: "✏️ संपादित करें",
    disable: "🚫 बंद करें",
    enable: "✅ चालू करें",

    noMarkets: "कोई बाज़ार नहीं मिला",
    noMarketsText:
      "दूसरा बाज़ार नाम, जिला या स्थान खोजकर देखें।",

    back: "← Admin Dashboard पर वापस जाएं",

    editMarket: "✏️ बाज़ार संपादित करें",
    addMarketTitle: "🏬 बाज़ार जोड़ें",
    updateDetails: "बाज़ार की जानकारी अपडेट करें",
    enterDetails: "नए बाज़ार की जानकारी दर्ज करें",

    marketName: "बाज़ार का नाम",
    district: "जिला",
    location: "स्थान",

    updateMarket: "बाज़ार अपडेट करें",
    saveMarket: "बाज़ार जोड़ें",
    cancel: "✖ रद्द करें",

    marketAdded: "बाज़ार सफलतापूर्वक जोड़ा गया!",
    marketUpdated: "बाज़ार सफलतापूर्वक अपडेट किया गया!",
    marketEnabled: "बाज़ार सफलतापूर्वक चालू किया गया!",
    marketDisabled: "बाज़ार सफलतापूर्वक बंद किया गया!",
  },

  "తెలుగు": {
    page: "మార్కెట్ల నిర్వహణ",
    title: "🏬 మార్కెట్లు",
    subtitle: "వ్యవసాయ మార్కెట్లను చూడండి మరియు నిర్వహించండి",
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

    total: "మొత్తం మార్కెట్లు",
    active: "యాక్టివ్",
    inactive: "ఇనాక్టివ్",
    addMarket: "+ మార్కెట్ జోడించండి",

    search: "🔍 మార్కెట్, జిల్లా లేదా ప్రాంతాన్ని వెతకండి...",
    loading: "మార్కెట్లు లోడ్ అవుతున్నాయి...",
    loadingText: "మార్కెట్ డేటా లోడ్ అయ్యే వరకు వేచి ఉండండి.",
    unable: "మార్కెట్లను లోడ్ చేయలేకపోయాము",
    retry: "🔄 మళ్లీ ప్రయత్నించండి",

    availableCrops: "🌾 అందుబాటులో ఉన్న పంటలు",
    view: "👁️ చూడండి",
    edit: "✏️ మార్చండి",
    disable: "🚫 నిలిపివేయండి",
    enable: "✅ ప్రారంభించండి",

    noMarkets: "మార్కెట్లు కనుగొనబడలేదు",
    noMarketsText:
      "వేరే మార్కెట్ పేరు, జిల్లా లేదా ప్రాంతాన్ని వెతకండి.",

    back: "← Admin Dashboard కి తిరిగి వెళ్లండి",

    editMarket: "✏️ మార్కెట్ మార్చండి",
    addMarketTitle: "🏬 మార్కెట్ జోడించండి",
    updateDetails: "మార్కెట్ వివరాలను నవీకరించండి",
    enterDetails: "కొత్త మార్కెట్ వివరాలను నమోదు చేయండి",

    marketName: "మార్కెట్ పేరు",
    district: "జిల్లా",
    location: "ప్రాంతం",

    updateMarket: "మార్కెట్ నవీకరించండి",
    saveMarket: "మార్కెట్ జోడించండి",
    cancel: "✖ రద్దు",

    marketAdded: "మార్కెట్ విజయవంతంగా జోడించబడింది!",
    marketUpdated: "మార్కెట్ విజయవంతంగా నవీకరించబడింది!",
    marketEnabled: "మార్కెట్ విజయవంతంగా ప్రారంభించబడింది!",
    marketDisabled: "మార్కెట్ విజయవంతంగా నిలిపివేయబడింది!",
  },

  "ಕನ್ನಡ": {
    page: "ಮಾರುಕಟ್ಟೆ ನಿರ್ವಹಣೆ",
    title: "🏬 ಮಾರುಕಟ್ಟೆಗಳು",
    subtitle: "ಕೃಷಿ ಮಾರುಕಟ್ಟೆಗಳನ್ನು ವೀಕ್ಷಿಸಿ ಮತ್ತು ನಿರ್ವಹಿಸಿ",
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

    total: "ಒಟ್ಟು ಮಾರುಕಟ್ಟೆಗಳು",
    active: "ಸಕ್ರಿಯ",
    inactive: "ನಿಷ್ಕ್ರಿಯ",
    addMarket: "+ ಮಾರುಕಟ್ಟೆ ಸೇರಿಸಿ",

    search: "🔍 ಮಾರುಕಟ್ಟೆ, ಜಿಲ್ಲೆ ಅಥವಾ ಸ್ಥಳ ಹುಡುಕಿ...",
    loading: "ಮಾರುಕಟ್ಟೆಗಳು ಲೋಡ್ ಆಗುತ್ತಿವೆ...",
    loadingText: "ಮಾರುಕಟ್ಟೆ ಡೇಟಾ ಲೋಡ್ ಆಗುವವರೆಗೆ ಕಾಯಿರಿ.",
    unable: "ಮಾರುಕಟ್ಟೆಗಳನ್ನು ಲೋಡ್ ಮಾಡಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ",
    retry: "🔄 ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ",

    availableCrops: "🌾 ಲಭ್ಯವಿರುವ ಬೆಳೆಗಳು",
    view: "👁️ ವೀಕ್ಷಿಸಿ",
    edit: "✏️ ಸಂಪಾದಿಸಿ",
    disable: "🚫 ನಿಷ್ಕ್ರಿಯಗೊಳಿಸಿ",
    enable: "✅ ಸಕ್ರಿಯಗೊಳಿಸಿ",

    noMarkets: "ಯಾವುದೇ ಮಾರುಕಟ್ಟೆಗಳು ಕಂಡುಬಂದಿಲ್ಲ",
    noMarketsText:
      "ಬೇರೆ ಮಾರುಕಟ್ಟೆ ಹೆಸರು, ಜಿಲ್ಲೆ ಅಥವಾ ಸ್ಥಳವನ್ನು ಹುಡುಕಿ.",

    back: "← Admin Dashboard ಗೆ ಹಿಂತಿರುಗಿ",

    editMarket: "✏️ ಮಾರುಕಟ್ಟೆ ಸಂಪಾದಿಸಿ",
    addMarketTitle: "🏬 ಮಾರುಕಟ್ಟೆ ಸೇರಿಸಿ",
    updateDetails: "ಮಾರುಕಟ್ಟೆ ವಿವರಗಳನ್ನು ನವೀಕರಿಸಿ",
    enterDetails: "ಹೊಸ ಮಾರುಕಟ್ಟೆ ವಿವರಗಳನ್ನು ನಮೂದಿಸಿ",

    marketName: "ಮಾರುಕಟ್ಟೆ ಹೆಸರು",
    district: "ಜಿಲ್ಲೆ",
    location: "ಸ್ಥಳ",

    updateMarket: "ಮಾರುಕಟ್ಟೆ ನವೀಕರಿಸಿ",
    saveMarket: "ಮಾರುಕಟ್ಟೆ ಸೇರಿಸಿ",
    cancel: "✖ ರದ್ದು",

    marketAdded: "ಮಾರುಕಟ್ಟೆ ಯಶಸ್ವಿಯಾಗಿ ಸೇರಿಸಲಾಗಿದೆ!",
    marketUpdated: "ಮಾರುಕಟ್ಟೆ ಯಶಸ್ವಿಯಾಗಿ ನವೀಕರಿಸಲಾಗಿದೆ!",
    marketEnabled: "ಮಾರುಕಟ್ಟೆ ಯಶಸ್ವಿಯಾಗಿ ಸಕ್ರಿಯಗೊಳಿಸಲಾಗಿದೆ!",
    marketDisabled: "ಮಾರುಕಟ್ಟೆ ಯಶಸ್ವಿಯಾಗಿ ನಿಷ್ಕ್ರಿಯಗೊಳಿಸಲಾಗಿದೆ!",
  },
};

function ManageMarkets({
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
  const t = translations[language] || translations.English;

  const [markets, setMarkets] = useState([]);
  const [search, setSearch] = useState("");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [showForm, setShowForm] = useState(false);
  const [editingMarket, setEditingMarket] = useState(null);
  const [showMenu, setShowMenu] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    district: "",
    location: "",
  });

  // =========================================================
  // FETCH MARKETS
  // =========================================================

  const fetchMarkets = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        "http://10.19.77.40:5000/api/admin/markets"
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Failed to fetch markets."
        );
      }

      const formattedMarkets = data.map((market) => ({
        id: market.id,
        name: market.name,
        district: market.district || "Not specified",
        location: market.location || "Not specified",
        crops: market.crops || "Not specified",
        status:
          market.status === "inactive"
            ? "Inactive"
            : "Active",
      }));

      setMarkets(formattedMarkets);
    } catch (err) {
      console.error("Manage Markets error:", err);

      setError(
        err.message ||
          "Unable to load markets."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMarkets();
  }, []);

  // =========================================================
  // SEARCH
  // =========================================================

  const filteredMarkets = markets.filter((market) =>
    `${market.name} ${market.district} ${market.location} ${market.crops}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  // =========================================================
  // FORM HANDLERS
  // =========================================================

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const openAddForm = () => {
    setEditingMarket(null);

    setFormData({
      name: "",
      district: "",
      location: "",
    });

    setShowForm(true);
    setShowMenu(false);
  };

  const openEditForm = (market) => {
    setEditingMarket(market);

    setFormData({
      name: market.name,
      district:
        market.district === "Not specified"
          ? ""
          : market.district,
      location:
        market.location === "Not specified"
          ? ""
          : market.location,
    });

    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
    setEditingMarket(null);

    setFormData({
      name: "",
      district: "",
      location: "",
    });
  };

  // =========================================================
  // ADD / EDIT MARKET
  // =========================================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.district.trim() ||
      !formData.location.trim()
    ) {
      alert(
        "Please fill market name, district and location."
      );
      return;
    }

    try {
      const url = editingMarket
        ? `http://10.19.77.40:5000/api/admin/markets/${editingMarket.id}`
        : "http://10.19.77.40:5000/api/admin/markets";

      const method = editingMarket
        ? "PUT"
        : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          district: formData.district.trim(),
          location: formData.location.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Unable to save market."
        );
      }

      alert(
        editingMarket
          ? t.marketUpdated
          : t.marketAdded
      );

      closeForm();

      await fetchMarkets();
    } catch (err) {
      console.error("Market save error:", err);

      alert(
        err.message ||
          "Unable to save market."
      );
    }
  };

  // =========================================================
  // ENABLE / DISABLE
  // =========================================================

  const handleToggleStatus = async (market) => {
    const newStatus =
      market.status === "Active"
        ? "inactive"
        : "active";

    try {
      const response = await fetch(
        `http://10.19.77.40:5000/api/admin/markets/${market.id}/status`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            status: newStatus,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error ||
            "Unable to update market status."
        );
      }

      alert(
        newStatus === "active"
          ? t.marketEnabled
          : t.marketDisabled
      );

      await fetchMarkets();
    } catch (err) {
      console.error(
        "Market status error:",
        err
      );

      alert(
        err.message ||
          "Unable to update market status."
      );
    }
  };

  // =========================================================
  // VIEW MARKET
  // =========================================================

  const handleView = (market) => {
    alert(
      `Market: ${market.name}\n` +
        `District: ${market.district}\n` +
        `Location: ${market.location}\n` +
        `Available Crops: ${market.crops}\n` +
        `Status: ${market.status}`
    );
  };

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
  // LOADING
  // =========================================================

  if (loading) {
    return (
      <div
        className={`admin-manage-page ${
          darkMode ? "dark-mode" : ""
        }`}
      >
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
            onClose={() => setShowMenu(false)}
            onAdminDashboard={() =>
              goTo(
                onAdminDashboard ||
                  onBackToAdminDashboard
              )
            }
            onManageFarmers={() =>
              goTo(onManageFarmers)
            }
            onManageBuyers={() =>
              goTo(onManageBuyers)
            }
            onManageCrops={() =>
              goTo(onManageCrops)
            }
            onManageMarkets={() =>
              goTo(onManageMarkets)
            }
            onManagePrices={() =>
              goTo(onManagePrices)
            }
            onManageOffers={() =>
              goTo(onManageOffers)
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

        <main className="admin-manage-content">
          <div className="admin-no-results">
            <div>⏳</div>
            <h3>{t.loading}</h3>
            <p>{t.loadingText}</p>
          </div>
        </main>
      </div>
    );
  }

  // =========================================================
  // ERROR
  // =========================================================

  if (error) {
    return (
      <div
        className={`admin-manage-page ${
          darkMode ? "dark-mode" : ""
        }`}
      >
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
            onClose={() => setShowMenu(false)}
            onAdminDashboard={() =>
              goTo(
                onAdminDashboard ||
                  onBackToAdminDashboard
              )
            }
            onManageFarmers={() =>
              goTo(onManageFarmers)
            }
            onManageBuyers={() =>
              goTo(onManageBuyers)
            }
            onManageCrops={() =>
              goTo(onManageCrops)
            }
            onManageMarkets={() =>
              goTo(onManageMarkets)
            }
            onManagePrices={() =>
              goTo(onManagePrices)
            }
            onManageOffers={() =>
              goTo(onManageOffers)
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

        <main className="admin-manage-content">

          <div className="admin-no-results">
            <div>⚠️</div>

            <h3>{t.unable}</h3>

            <p>{error}</p>

            <button
              type="button"
              className="admin-view-button"
              onClick={fetchMarkets}
              style={{
                marginTop: "15px",
              }}
            >
              {t.retry}
            </button>
          </div>

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
  // PAGE
  // =========================================================

  return (
    <div
      className={`admin-manage-page ${
        darkMode ? "dark-mode" : ""
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
            goTo(onManageFarmers)
          }
          onManageBuyers={() =>
            goTo(onManageBuyers)
          }
          onManageCrops={() =>
            goTo(onManageCrops)
          }
          onManageMarkets={() =>
            goTo(onManageMarkets)
          }
          onManagePrices={() =>
            goTo(onManagePrices)
          }
          onManageOffers={() =>
            goTo(onManageOffers)
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
            <h2>{t.title}</h2>

            <p>
              {t.subtitle}
            </p>
          </div>

          <button
            type="button"
            className="admin-add-button"
            onClick={openAddForm}
          >
            {t.addMarket}
          </button>

        </div>

        {/* Summary */}
        <div className="admin-summary-card">

          <div>
            <span>{t.total}</span>

            <strong>
              {markets.length}
            </strong>
          </div>

          <div>
            <span>{t.active}</span>

            <strong>
              {
                markets.filter(
                  (market) =>
                    market.status ===
                    "Active"
                ).length
              }
            </strong>
          </div>

          <div>
            <span>{t.inactive}</span>

            <strong>
              {
                markets.filter(
                  (market) =>
                    market.status ===
                    "Inactive"
                ).length
              }
            </strong>
          </div>

        </div>

        {/* Search */}
        <div className="admin-search-box">

          <input
            type="text"
            placeholder={t.search}
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

        </div>

        {/* Market Grid */}
        <div className="admin-markets-grid">

          {filteredMarkets.map(
            (market) => (

              <div
                className="admin-market-card"
                key={market.id}
              >

                <div className="admin-market-icon">
                  🏬
                </div>

                <div className="admin-market-details">

                  <div className="admin-market-heading">

                    <div>
                      <h3>
                        {market.name}
                      </h3>

                      <p>
                        📍 {market.location},{" "}
                        {market.district}
                      </p>
                    </div>

                    <span
                      className={
                        market.status ===
                        "Active"
                          ? "admin-status active"
                          : "admin-status blocked"
                      }
                    >
                      {market.status}
                    </span>

                  </div>

                  <div className="admin-market-crops">

                    <span>
                      {t.availableCrops}
                    </span>

                    <p>
                      {market.crops}
                    </p>

                  </div>

                  <div className="admin-market-actions">

                    <button
                      type="button"
                      className="admin-view-button"
                      onClick={() =>
                        handleView(market)
                      }
                    >
                      {t.view}
                    </button>

                    <button
                      type="button"
                      className="admin-edit-button"
                      onClick={() =>
                        openEditForm(market)
                      }
                    >
                      {t.edit}
                    </button>

                    <button
                      type="button"
                      className="admin-block-button"
                      onClick={() =>
                        handleToggleStatus(
                          market
                        )
                      }
                    >
                      {market.status ===
                      "Active"
                        ? t.disable
                        : t.enable}
                    </button>

                  </div>

                </div>

              </div>
            )
          )}

        </div>

        {/* No Results */}
        {filteredMarkets.length === 0 && (
          <div className="admin-no-results">

            <div>🔍</div>

            <h3>{t.noMarkets}</h3>

            <p>
              {t.noMarketsText}
            </p>

          </div>
        )}

        {/* Back */}
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

      {/* Add / Edit Modal */}
      {showForm && (

        <div
          style={{
            position: "fixed",
            inset: 0,
            background:
              "rgba(0, 0, 0, 0.45)",
            display: "flex",
            alignItems: "center",
            justifyContent:
              "center",
            padding: "20px",
            zIndex: 1000,
          }}
        >

          <div
            style={{
              width: "100%",
              maxWidth: "450px",
              background:
                darkMode
                  ? "#1f2937"
                  : "#ffffff",
              color:
                darkMode
                  ? "#ffffff"
                  : "#222222",
              borderRadius: "16px",
              padding: "25px",
              boxSizing: "border-box",
              boxShadow:
                "0 10px 35px rgba(0,0,0,0.18)",
            }}
          >

            <h2
              style={{
                marginTop: 0,
                marginBottom: "6px",
              }}
            >
              {editingMarket
                ? t.editMarket
                : t.addMarketTitle}
            </h2>

            <p
              style={{
                marginTop: 0,
                marginBottom: "20px",
                color:
                  darkMode
                    ? "#cbd5e1"
                    : "#777",
                fontSize: "13px",
              }}
            >
              {editingMarket
                ? t.updateDetails
                : t.enterDetails}
            </p>

            <form onSubmit={handleSubmit}>

              <input
                type="text"
                name="name"
                placeholder={
                  t.marketName
                }
                value={formData.name}
                onChange={
                  handleInputChange
                }
                style={{
                  width: "100%",
                  height: "44px",
                  padding: "0 12px",
                  marginBottom:
                    "12px",
                  border:
                    "1px solid #d8dfdb",
                  borderRadius: "8px",
                  boxSizing:
                    "border-box",
                  fontSize: "14px",
                }}
              />

              <input
                type="text"
                name="district"
                placeholder={
                  t.district
                }
                value={
                  formData.district
                }
                onChange={
                  handleInputChange
                }
                style={{
                  width: "100%",
                  height: "44px",
                  padding: "0 12px",
                  marginBottom:
                    "12px",
                  border:
                    "1px solid #d8dfdb",
                  borderRadius: "8px",
                  boxSizing:
                    "border-box",
                  fontSize: "14px",
                }}
              />

              <input
                type="text"
                name="location"
                placeholder={
                  t.location
                }
                value={
                  formData.location
                }
                onChange={
                  handleInputChange
                }
                style={{
                  width: "100%",
                  height: "44px",
                  padding: "0 12px",
                  marginBottom:
                    "18px",
                  border:
                    "1px solid #d8dfdb",
                  borderRadius: "8px",
                  boxSizing:
                    "border-box",
                  fontSize: "14px",
                }}
              />

              <div
                style={{
                  display: "flex",
                  gap: "10px",
                }}
              >

                <button
                  type="submit"
                  className="admin-accept-button"
                  style={{
                    flex: 1,
                    minHeight: "42px",
                  }}
                >
                  💾{" "}
                  {editingMarket
                    ? t.updateMarket
                    : t.saveMarket}
                </button>

                <button
                  type="button"
                  className="admin-reject-button"
                  onClick={closeForm}
                  style={{
                    flex: 1,
                    minHeight: "42px",
                  }}
                >
                  {t.cancel}
                </button>

              </div>

            </form>

          </div>

        </div>
      )}

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

        <div className="admin-drawer-content">

          <button
            type="button"
            className="admin-drawer-item"
            onClick={onAdminDashboard}
          >
            🏠 {t.dashboard}
          </button>

          <button
            type="button"
            className="admin-drawer-item"
            onClick={onManageFarmers}
          >
            👨‍🌾 {t.farmers}
          </button>

          <button
            type="button"
            className="admin-drawer-item"
            onClick={onManageBuyers}
          >
            🏪 {t.buyers}
          </button>

          <button
            type="button"
            className="admin-drawer-item"
            onClick={onManageCrops}
          >
            🌾 {t.crops}
          </button>

          <button
            type="button"
            className="admin-drawer-item active"
            onClick={onManageMarkets}
          >
            🏬 {t.markets}
          </button>

          <button
            type="button"
            className="admin-drawer-item"
            onClick={onManagePrices}
          >
            💰 {t.prices}
          </button>

          <button
            type="button"
            className="admin-drawer-item"
            onClick={onManageOffers}
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
            onClick={onToggleTheme}
          >
            {darkMode ? "☀️" : "🌙"}{" "}
            {darkMode
              ? t.lightMode
              : t.darkMode}
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
            className="admin-drawer-item admin-logout-item"
            onClick={onLogout}
          >
            🚪 {t.logout}
          </button>

        </div>

      </aside>

    </>
  );
}

export default ManageMarkets;