import { useEffect, useState } from "react";

const translations = {
  English: {
    pageTitle: "Manage Crop Offers",
    cropOffers: "📦 Crop Offers",
    subtitle:
      "View and manage offers between farmers and buyers",

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

    totalOffers: "Total Offers",
    pending: "Pending",
    accepted: "Accepted",
    rejected: "Rejected",

    search:
      "🔍 Search farmer, buyer, crop or location...",

    loading: "Loading Crop Offers...",
    loadingText:
      "Fetching offers from database.",

    unable: "Unable to Load Offers",
    retry: "🔄 Retry",

    farmer: "Farmer",
    buyer: "Buyer",
    crop: "Crop",
    quantity: "Quantity",
    price: "Price",
    location: "Location",
    status: "Status",
    date: "Date",
    action: "Action",

    view: "👁️ View",
    accept: "✅ Accept",
    reject: "❌ Reject",

    noOffers: "No Offers Found",
    noOffersText:
      "Try searching with another farmer, buyer, crop or location.",

    back: "← Back to Admin Dashboard",
  },

  "தமிழ்": {
    pageTitle: "பயிர் சலுகைகளை நிர்வகிக்கவும்",
    cropOffers: "📦 பயிர் சலுகைகள்",
    subtitle:
      "விவசாயிகள் மற்றும் வாங்குபவர்களின் சலுகைகளை பார்க்கவும் நிர்வகிக்கவும்",

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

    totalOffers: "மொத்த சலுகைகள்",
    pending: "நிலுவையில்",
    accepted: "ஏற்கப்பட்டது",
    rejected: "நிராகரிக்கப்பட்டது",

    search:
      "🔍 விவசாயி, வாங்குபவர், பயிர் அல்லது இடத்தை தேடவும்...",

    loading: "பயிர் சலுகைகள் ஏற்றப்படுகின்றன...",
    loadingText:
      "Database-ல் இருந்து சலுகைகள் பெறப்படுகின்றன.",

    unable: "சலுகைகளை ஏற்ற முடியவில்லை",
    retry: "🔄 மீண்டும் முயற்சி",

    farmer: "விவசாயி",
    buyer: "வாங்குபவர்",
    crop: "பயிர்",
    quantity: "அளவு",
    price: "விலை",
    location: "இடம்",
    status: "நிலை",
    date: "தேதி",
    action: "செயல்",

    view: "👁️ பார்க்க",
    accept: "✅ ஏற்க",
    reject: "❌ நிராகரிக்க",

    noOffers: "சலுகைகள் எதுவும் இல்லை",
    noOffersText:
      "வேறு விவசாயி, வாங்குபவர், பயிர் அல்லது இடத்தை தேடிப் பார்க்கவும்.",

    back: "← Admin Dashboard-க்கு திரும்பு",
  },

  "हिन्दी": {
    pageTitle: "फसल ऑफर प्रबंधन",
    cropOffers: "📦 फसल ऑफर",
    subtitle:
      "किसानों और खरीदारों के ऑफर देखें और प्रबंधित करें",

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

    totalOffers: "कुल ऑफर",
    pending: "लंबित",
    accepted: "स्वीकृत",
    rejected: "अस्वीकृत",

    search:
      "🔍 किसान, खरीदार, फसल या स्थान खोजें...",

    loading: "फसल ऑफर लोड हो रहे हैं...",
    loadingText:
      "Database से ऑफर प्राप्त किए जा रहे हैं।",

    unable: "ऑफर लोड नहीं हो सके",
    retry: "🔄 पुनः प्रयास",

    farmer: "किसान",
    buyer: "खरीदार",
    crop: "फसल",
    quantity: "मात्रा",
    price: "कीमत",
    location: "स्थान",
    status: "स्थिति",
    date: "तारीख",
    action: "कार्रवाई",

    view: "👁️ देखें",
    accept: "✅ स्वीकार करें",
    reject: "❌ अस्वीकार करें",

    noOffers: "कोई ऑफर नहीं मिला",
    noOffersText:
      "किसी अन्य किसान, खरीदार, फसल या स्थान के साथ खोजें।",

    back: "← Admin Dashboard पर वापस जाएं",
  },

  "తెలుగు": {
    pageTitle: "పంట ఆఫర్ల నిర్వహణ",
    cropOffers: "📦 పంట ఆఫర్లు",
    subtitle:
      "రైతులు మరియు కొనుగోలుదారుల ఆఫర్లను చూడండి మరియు నిర్వహించండి",

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

    totalOffers: "మొత్తం ఆఫర్లు",
    pending: "పెండింగ్",
    accepted: "ఆమోదించబడింది",
    rejected: "తిరస్కరించబడింది",

    search:
      "🔍 రైతు, కొనుగోలుదారు, పంట లేదా ప్రాంతాన్ని వెతకండి...",

    loading: "పంట ఆఫర్లు లోడ్ అవుతున్నాయి...",
    loadingText:
      "Database నుండి ఆఫర్లు పొందుతున్నాము.",

    unable: "ఆఫర్లను లోడ్ చేయలేకపోయాము",
    retry: "🔄 మళ్లీ ప్రయత్నించండి",

    farmer: "రైతు",
    buyer: "కొనుగోలుదారు",
    crop: "పంట",
    quantity: "పరిమాణం",
    price: "ధర",
    location: "ప్రాంతం",
    status: "స్థితి",
    date: "తేదీ",
    action: "చర్య",

    view: "👁️ చూడండి",
    accept: "✅ అంగీకరించండి",
    reject: "❌ తిరస్కరించండి",

    noOffers: "ఆఫర్లు కనుగొనబడలేదు",
    noOffersText:
      "మరొక రైతు, కొనుగోలుదారు, పంట లేదా ప్రాంతంతో వెతకండి.",

    back: "← Admin Dashboard కి తిరిగి వెళ్ళండి",
  },

  "ಕನ್ನಡ": {
    pageTitle: "ಬೆಳೆ ಆಫರ್ ನಿರ್ವಹಣೆ",
    cropOffers: "📦 ಬೆಳೆ ಆಫರ್‌ಗಳು",
    subtitle:
      "ರೈತರು ಮತ್ತು ಖರೀದಿದಾರರ ಆಫರ್‌ಗಳನ್ನು ವೀಕ್ಷಿಸಿ ಮತ್ತು ನಿರ್ವಹಿಸಿ",

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
    darkMode: "ಡಾರ್ಕ್ ಮೋಡ್",
    lightMode: "ಲೈಟ್ ಮೋಡ್",
    language: "ಭಾಷೆ",

    totalOffers: "ಒಟ್ಟು ಆಫರ್‌ಗಳು",
    pending: "ಬಾಕಿ",
    accepted: "ಸ್ವೀಕರಿಸಲಾಗಿದೆ",
    rejected: "ತಿರಸ್ಕರಿಸಲಾಗಿದೆ",

    search:
      "🔍 ರೈತ, ಖರೀದಿದಾರ, ಬೆಳೆ ಅಥವಾ ಸ್ಥಳ ಹುಡುಕಿ...",

    loading: "ಬೆಳೆ ಆಫರ್‌ಗಳು ಲೋಡ್ ಆಗುತ್ತಿವೆ...",
    loadingText:
      "Database ನಿಂದ ಆಫರ್‌ಗಳನ್ನು ಪಡೆಯಲಾಗುತ್ತಿದೆ.",

    unable: "ಆಫರ್‌ಗಳನ್ನು ಲೋಡ್ ಮಾಡಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ",
    retry: "🔄 ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ",

    farmer: "ರೈತ",
    buyer: "ಖರೀದಿದಾರ",
    crop: "ಬೆಳೆ",
    quantity: "ಪ್ರಮಾಣ",
    price: "ಬೆಲೆ",
    location: "ಸ್ಥಳ",
    status: "ಸ್ಥಿತಿ",
    date: "ದಿನಾಂಕ",
    action: "ಕ್ರಿಯೆ",

    view: "👁️ ವೀಕ್ಷಿಸಿ",
    accept: "✅ ಸ್ವೀಕರಿಸಿ",
    reject: "❌ ತಿರಸ್ಕರಿಸಿ",

    noOffers: "ಯಾವುದೇ ಆಫರ್‌ಗಳು ಕಂಡುಬಂದಿಲ್ಲ",
    noOffersText:
      "ಬೇರೆ ರೈತ, ಖರೀದಿದಾರ, ಬೆಳೆ ಅಥವಾ ಸ್ಥಳದೊಂದಿಗೆ ಹುಡುಕಿ.",

    back: "← Back to Admin Dashboard",
  },
};

function ManageOffers({
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

  const [offerList, setOfferList] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showMenu, setShowMenu] = useState(false);

  // =========================================================
  // FETCH OFFERS
  // =========================================================

  const fetchOffers = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        "http://10.19.77.40:5000/api/admin/offers"
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error ||
            "Failed to fetch crop offers."
        );
      }

      const formattedOffers =
        data.map((offer) => ({
          id: offer.id,
          farmer: offer.farmer,
          buyer: offer.buyer,
          crop: offer.crop,

          quantity:
            `${offer.quantity_kg} KG`,

          price:
            `₹${offer.offered_price_per_kg} / KG`,

          location:
            offer.market ||
            "Not specified",

          status:
            offer.status === "pending"
              ? "Pending"
              : offer.status === "accepted"
              ? "Accepted"
              : "Rejected",

          date: offer.created_at
            ? new Date(
                offer.created_at
              ).toLocaleDateString()
            : "Today",
        }));

      setOfferList(formattedOffers);

    } catch (err) {
      console.error(
        "Admin offers fetch error:",
        err
      );

      setError(
        err.message ||
          "Unable to load crop offers."
      );

    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOffers();
  }, []);

  // =========================================================
  // SEARCH
  // =========================================================

  const filteredOffers =
    offerList.filter((offer) =>
      `${offer.farmer}
       ${offer.buyer}
       ${offer.crop}
       ${offer.location}
       ${offer.status}`
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );

  // =========================================================
  // UPDATE OFFER STATUS
  // =========================================================

  const updateOfferStatus = async (
    offer,
    status
  ) => {
    try {
      const backendStatus =
        status === "Accepted"
          ? "accepted"
          : "rejected";

      const response = await fetch(
        `http://10.19.77.40:5000/api/crop-offers/${offer.id}/status`,
        {
          method: "PUT",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            status: backendStatus,
          }),
        }
      );

      const data =
        await response.json();

      if (!response.ok) {
        throw new Error(
          data.error ||
            "Failed to update offer status."
        );
      }

      setOfferList(
        (currentOffers) =>
          currentOffers.map(
            (item) =>
              item.id === offer.id
                ? {
                    ...item,
                    status,
                  }
                : item
          )
      );

      alert(
        `${offer.crop} offer is now ${status}.`
      );

    } catch (err) {
      console.error(
        "Offer status update error:",
        err
      );

      alert(
        err.message ||
          "Unable to update offer status."
      );
    }
  };

  // =========================================================
  // VIEW OFFER
  // =========================================================

  const handleView = (offer) => {
    alert(
      `Farmer: ${offer.farmer}\n` +
        `Buyer: ${offer.buyer}\n` +
        `Crop: ${offer.crop}\n` +
        `Quantity: ${offer.quantity}\n` +
        `Price: ${offer.price}\n` +
        `Location: ${offer.location}\n` +
        `Status: ${offer.status}`
    );
  };

  // =========================================================
  // DRAWER NAVIGATION
  // =========================================================

  const goTo = (callback) => {
    setShowMenu(false);

    if (
      typeof callback ===
      "function"
    ) {
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

      {/* =====================================================
          HEADER
          ===================================================== */}

      <header className="admin-dashboard-header">

        <div className="admin-header-left">

          {/* 3 BAR MENU */}
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
              {t.pageTitle}
            </p>

          </div>

        </div>

        <div className="admin-profile">
          🛡️
        </div>

      </header>

      {/* =====================================================
          DRAWER
          ===================================================== */}

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

      {/* =====================================================
          MAIN CONTENT
          ===================================================== */}

      <main className="admin-manage-content">

        {/* PAGE TITLE */}

        <div className="admin-page-title">

          <div>

            <h2>
              {t.cropOffers}
            </h2>

            <p>
              {t.subtitle}
            </p>

          </div>

        </div>

        {/* ===================================================
            SUMMARY
            =================================================== */}

        <div className="admin-summary-card">

          <div>

            <span>
              {t.totalOffers}
            </span>

            <strong>
              {offerList.length}
            </strong>

          </div>

          <div>

            <span>
              {t.pending}
            </span>

            <strong>
              {
                offerList.filter(
                  (offer) =>
                    offer.status ===
                    "Pending"
                ).length
              }
            </strong>

          </div>

          <div>

            <span>
              {t.accepted}
            </span>

            <strong>
              {
                offerList.filter(
                  (offer) =>
                    offer.status ===
                    "Accepted"
                ).length
              }
            </strong>

          </div>

          <div>

            <span>
              {t.rejected}
            </span>

            <strong>
              {
                offerList.filter(
                  (offer) =>
                    offer.status ===
                    "Rejected"
                ).length
              }
            </strong>

          </div>

        </div>

        {/* ===================================================
            SEARCH
            =================================================== */}

        <div className="admin-search-box">

          <input
            type="text"
            placeholder={t.search}
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
          />

        </div>

        {/* ===================================================
            LOADING
            =================================================== */}

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

        {/* ===================================================
            ERROR
            =================================================== */}

        {!loading &&
          error && (
            <div className="admin-no-results">

              <div>
                ⚠️
              </div>

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
                  fetchOffers
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

        {/* ===================================================
            TABLE
            =================================================== */}

        {!loading &&
          !error && (
            <div className="admin-table-container">

              <table className="admin-table offers-table">

                <thead>

                  <tr>

                    <th>
                      {t.farmer}
                    </th>

                    <th>
                      {t.buyer}
                    </th>

                    <th>
                      {t.crop}
                    </th>

                    <th>
                      {t.quantity}
                    </th>

                    <th>
                      {t.price}
                    </th>

                    <th>
                      {t.location}
                    </th>

                    <th>
                      {t.status}
                    </th>

                    <th>
                      {t.date}
                    </th>

                    <th>
                      {t.action}
                    </th>

                  </tr>

                </thead>

                <tbody>

                  {filteredOffers.map(
                    (offer) => (
                      <tr
                        key={
                          offer.id
                        }
                      >

                        {/* FARMER */}

                        <td>

                          <div className="admin-farmer-name">

                            <div className="admin-table-avatar">
                              👨‍🌾
                            </div>

                            <strong>
                              {
                                offer.farmer
                              }
                            </strong>

                          </div>

                        </td>

                        {/* BUYER */}

                        <td>

                          <div className="admin-farmer-name">

                            <div className="admin-table-avatar">
                              🏪
                            </div>

                            <strong>
                              {
                                offer.buyer
                              }
                            </strong>

                          </div>

                        </td>

                        {/* CROP */}

                        <td>

                          <strong>
                            {
                              offer.crop
                            }
                          </strong>

                        </td>

                        {/* QUANTITY */}

                        <td>
                          {
                            offer.quantity
                          }
                        </td>

                        {/* PRICE */}

                        <td>

                          <strong className="market-price">
                            {
                              offer.price
                            }
                          </strong>

                        </td>

                        {/* LOCATION */}

                        <td>
                          📍{" "}
                          {
                            offer.location
                          }
                        </td>

                        {/* STATUS */}

                        <td>

                          <span
                            className={
                              offer.status ===
                              "Accepted"
                                ? "admin-status active"
                                : offer.status ===
                                  "Rejected"
                                ? "admin-status blocked"
                                : "admin-status pending"
                            }
                          >
                            {
                              offer.status
                            }
                          </span>

                        </td>

                        {/* DATE */}

                        <td>
                          {
                            offer.date
                          }
                        </td>

                        {/* ACTION */}

                        <td>

                          <div className="admin-action-buttons">

                            <button
                              type="button"
                              className="admin-view-button"
                              onClick={() =>
                                handleView(
                                  offer
                                )
                              }
                            >
                              {t.view}
                            </button>

                            {offer.status ===
                              "Pending" && (
                              <>

                                <button
                                  type="button"
                                  className="admin-accept-button"
                                  onClick={() =>
                                    updateOfferStatus(
                                      offer,
                                      "Accepted"
                                    )
                                  }
                                >
                                  {
                                    t.accept
                                  }
                                </button>

                                <button
                                  type="button"
                                  className="admin-reject-button"
                                  onClick={() =>
                                    updateOfferStatus(
                                      offer,
                                      "Rejected"
                                    )
                                  }
                                >
                                  {
                                    t.reject
                                  }
                                </button>

                              </>
                            )}

                          </div>

                        </td>

                      </tr>
                    )
                  )}

                </tbody>

              </table>

              {/* NO RESULTS */}

              {filteredOffers.length ===
                0 && (
                <div className="admin-no-results">

                  <div>
                    🔍
                  </div>

                  <h3>
                    {t.noOffers}
                  </h3>

                  <p>
                    {
                      t.noOffersText
                    }
                  </p>

                </div>
              )}

            </div>
          )}

        {/* ===================================================
            BACK
            =================================================== */}

        <div className="admin-back-section">

          <button
            type="button"
            className="admin-back-button"
            onClick={() =>
              onBackToAdminDashboard?.()
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
      {/* OVERLAY */}

      <div
        className="admin-drawer-overlay"
        onClick={onClose}
      />

      {/* DRAWER */}

      <aside className="admin-side-drawer">

        {/* DRAWER HEADER */}

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

        {/* DRAWER CONTENT */}

        <div className="admin-drawer-content">

          {/* DASHBOARD */}

          <button
            type="button"
            className="admin-drawer-item"
            onClick={
              onAdminDashboard
            }
          >
            🏠{" "}
            {t.dashboard}
          </button>

          {/* FARMERS */}

          <button
            type="button"
            className="admin-drawer-item"
            onClick={
              onManageFarmers
            }
          >
            👨‍🌾{" "}
            {t.farmers}
          </button>

          {/* BUYERS */}

          <button
            type="button"
            className="admin-drawer-item"
            onClick={
              onManageBuyers
            }
          >
            🏪{" "}
            {t.buyers}
          </button>

          {/* CROPS */}

          <button
            type="button"
            className="admin-drawer-item"
            onClick={
              onManageCrops
            }
          >
            🌾{" "}
            {t.crops}
          </button>

          {/* MARKETS */}

          <button
            type="button"
            className="admin-drawer-item"
            onClick={
              onManageMarkets
            }
          >
            🏬{" "}
            {t.markets}
          </button>

          {/* PRICES */}

          <button
            type="button"
            className="admin-drawer-item"
            onClick={
              onManagePrices
            }
          >
            💰{" "}
            {t.prices}
          </button>

          {/* OFFERS */}

          <button
            type="button"
            className="admin-drawer-item active"
            onClick={
              onManageOffers
            }
          >
            📦{" "}
            {t.offers}
          </button>

          {/* REPORTS */}

          <button
            type="button"
            className="admin-drawer-item"
            onClick={
              onReports
            }
          >
            📊{" "}
            {t.reports}
          </button>

          <div className="admin-drawer-divider" />

          {/* PROFILE */}

          <button
            type="button"
            className="admin-drawer-item"
            onClick={
              onProfile
            }
          >
            👤{" "}
            {t.profile}
          </button>

          {/* SETTINGS */}

          <button
            type="button"
            className="admin-drawer-item"
            onClick={
              onSettings
            }
          >
            ⚙️{" "}
            {t.settings}
          </button>

          {/* THEME */}

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

          {/* LANGUAGE */}

          <div className="admin-language-box">

            <label>
              🌐{" "}
              {t.language}
            </label>

            <select
              value={
                language
              }
              onChange={(e) =>
                onLanguageChange?.(
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

          {/* LOGOUT */}

          <button
            type="button"
            className="admin-drawer-item admin-logout-item"
            onClick={
              onLogout
            }
          >
            🚪{" "}
            {t.logout}
          </button>

        </div>

      </aside>
    </>
  );
}

export default ManageOffers;
