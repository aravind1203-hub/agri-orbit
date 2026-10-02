import { useEffect, useState } from "react";

/* =========================================================
   TRANSLATIONS
========================================================= */

const translations = {
  English: {
    dashboard: "Dashboard",
    farmerMenu: "Farmer Menu",
    farmerAccount: "Farmer Account",
    welcome: "Welcome",
    manageText:
      "Manage your crops, markets and buyers from one place.",
    todaysPrices: "Today's Crop Prices",
    latestPrices: "Latest available crop prices",
    viewAll: "View All",
    farmerServices: "Farmer Services",
    farmerServicesText:
      "Everything you need for better market access",

    favouriteCrops: "Favourite Crops",
    favouriteDesc: "View your saved crops",

    nearbyMarkets: "Nearby Markets",
    nearbyDesc: "Find markets near you",

    bestMarket: "Best Market",
    bestMarketDesc: "Find the best market to sell",

    marketComparison: "Market Comparison",
    marketComparisonDesc: "Compare market prices",

    bestMarketFinder: "Best Market Finder",
    bestMarketFinderDesc: "Find the suitable market",

    buyers: "Buyers",
    buyersDesc: "Find buyers for your crops",

    buyerRequirements: "Buyer Requirements",
    buyerRequirementsDesc:
      "View buyer crop requirements",

    priceAlerts: "Price Alerts",
    priceAlertsDesc: "Track your price alerts",

    cropOffers: "My Crop Offers",
    cropOffersDesc: "View your crop offers",

    cropSearch: "Crop Search",
    cropSearchDesc: "Search available crops",

    priceTrend: "Price Trend",
    priceTrendDesc: "View crop price trends",

    myProfile: "My Profile",
    settings: "Settings",
    logout: "Logout",

    loadingPrices: "Loading latest prices...",
    noPrices:
      "No crop price data available right now.",
    retry: "Retry",

    agriOrbitMarket: "AgriOrbit Market",
    infoText:
      "Find crop prices, nearby markets and buyers in one place. Use the menu to quickly access all farmer services.",
  },

  "தமிழ்": {
    dashboard: "முகப்பு",
    farmerMenu: "விவசாயி மெனு",
    farmerAccount: "விவசாயி கணக்கு",
    welcome: "வரவேற்கிறோம்",
    manageText:
      "உங்கள் பயிர்கள், சந்தைகள் மற்றும் வாங்குபவர்களை ஒரே இடத்தில் நிர்வகிக்கவும்.",
    todaysPrices: "இன்றைய பயிர் விலைகள்",
    latestPrices:
      "கிடைக்கக்கூடிய சமீபத்திய பயிர் விலைகள்",
    viewAll: "அனைத்தையும் பார்க்க",
    farmerServices: "விவசாயி சேவைகள்",
    farmerServicesText:
      "சிறந்த சந்தை அணுகலுக்கு தேவையான அனைத்தும்",

    favouriteCrops: "விருப்பமான பயிர்கள்",
    favouriteDesc: "நீங்கள் சேமித்த பயிர்களைப் பார்க்கவும்",

    nearbyMarkets: "அருகிலுள்ள சந்தைகள்",
    nearbyDesc: "உங்களுக்கு அருகிலுள்ள சந்தைகளைக் கண்டறியவும்",

    bestMarket: "சிறந்த சந்தை",
    bestMarketDesc:
      "விற்பனை செய்ய சிறந்த சந்தையைக் கண்டறியவும்",

    marketComparison: "சந்தை ஒப்பீடு",
    marketComparisonDesc:
      "சந்தை விலைகளை ஒப்பிடவும்",

    bestMarketFinder: "சிறந்த சந்தை கண்டுபிடிப்பு",
    bestMarketFinderDesc:
      "சரியான சந்தையைக் கண்டறியவும்",

    buyers: "வாங்குபவர்கள்",
    buyersDesc:
      "உங்கள் பயிர்களுக்கான வாங்குபவர்களைக் கண்டறியவும்",

    buyerRequirements: "வாங்குபவர்களின் தேவைகள்",
    buyerRequirementsDesc:
      "வாங்குபவர்களின் பயிர் தேவைகளைப் பார்க்கவும்",

    priceAlerts: "விலை எச்சரிக்கைகள்",
    priceAlertsDesc:
      "உங்கள் விலை எச்சரிக்கைகளைக் கண்காணிக்கவும்",

    cropOffers: "எனது பயிர் சலுகைகள்",
    cropOffersDesc:
      "உங்கள் பயிர் சலுகைகளைப் பார்க்கவும்",

    cropSearch: "பயிர் தேடல்",
    cropSearchDesc:
      "கிடைக்கக்கூடிய பயிர்களைத் தேடவும்",

    priceTrend: "விலை போக்கு",
    priceTrendDesc:
      "பயிர்களின் விலை போக்கைப் பார்க்கவும்",

    myProfile: "எனது சுயவிவரம்",
    settings: "அமைப்புகள்",
    logout: "வெளியேறு",

    loadingPrices:
      "சமீபத்திய விலைகள் ஏற்றப்படுகின்றன...",
    noPrices:
      "தற்போது பயிர் விலை தகவல் இல்லை.",
    retry: "மீண்டும் முயற்சி செய்யவும்",

    agriOrbitMarket: "AgriOrbit Market",
    infoText:
      "பயிர் விலைகள், அருகிலுள்ள சந்தைகள் மற்றும் வாங்குபவர்களை ஒரே இடத்தில் கண்டறியலாம். அனைத்து விவசாயி சேவைகளையும் விரைவாக அணுக மெனுவைப் பயன்படுத்தவும்.",
  },

  "हिन्दी": {
    dashboard: "डैशबोर्ड",
    farmerMenu: "किसान मेनू",
    farmerAccount: "किसान खाता",
    welcome: "स्वागत है",
    manageText:
      "अपनी फसल, बाजार और खरीदारों को एक ही जगह से प्रबंधित करें।",

    todaysPrices: "आज की फसल कीमतें",
    latestPrices: "उपलब्ध नवीनतम फसल कीमतें",
    viewAll: "सभी देखें",
    farmerServices: "किसान सेवाएं",
    farmerServicesText:
      "बेहतर बाजार पहुंच के लिए आवश्यक सभी सेवाएं",

    favouriteCrops: "पसंदीदा फसलें",
    favouriteDesc: "अपनी सेव की गई फसलें देखें",

    nearbyMarkets: "नजदीकी बाजार",
    nearbyDesc: "अपने नजदीकी बाजार खोजें",

    bestMarket: "सर्वश्रेष्ठ बाजार",
    bestMarketDesc:
      "बेचने के लिए सबसे अच्छा बाजार खोजें",

    marketComparison: "बाजार तुलना",
    marketComparisonDesc:
      "बाजार की कीमतों की तुलना करें",

    bestMarketFinder: "सर्वश्रेष्ठ बाजार खोजक",
    bestMarketFinderDesc:
      "उपयुक्त बाजार खोजें",

    buyers: "खरीदार",
    buyersDesc:
      "अपनी फसल के लिए खरीदार खोजें",

    buyerRequirements: "खरीदार की आवश्यकताएं",
    buyerRequirementsDesc:
      "खरीदारों की फसल आवश्यकताएं देखें",

    priceAlerts: "मूल्य अलर्ट",
    priceAlertsDesc:
      "अपने मूल्य अलर्ट देखें",

    cropOffers: "मेरी फसल पेशकश",
    cropOffersDesc:
      "अपनी फसल पेशकश देखें",

    cropSearch: "फसल खोज",
    cropSearchDesc:
      "उपलब्ध फसलें खोजें",

    priceTrend: "मूल्य रुझान",
    priceTrendDesc:
      "फसल की कीमत का रुझान देखें",

    myProfile: "मेरी प्रोफ़ाइल",
    settings: "सेटिंग्स",
    logout: "लॉगआउट",

    loadingPrices:
      "नवीनतम कीमतें लोड हो रही हैं...",
    noPrices:
      "अभी फसल कीमत की जानकारी उपलब्ध नहीं है।",
    retry: "पुनः प्रयास",

    agriOrbitMarket: "AgriOrbit Market",
    infoText:
      "फसल कीमतें, नजदीकी बाजार और खरीदार एक ही जगह खोजें। किसान सेवाओं तक जल्दी पहुंचने के लिए मेनू का उपयोग करें।",
  },

  "తెలుగు": {
    dashboard: "డాష్‌బోర్డ్",
    farmerMenu: "రైతు మెను",
    farmerAccount: "రైతు ఖాతా",
    welcome: "స్వాగతం",

    manageText:
      "మీ పంటలు, మార్కెట్లు మరియు కొనుగోలుదారులను ఒకే చోట నిర్వహించండి.",

    todaysPrices: "ఈరోజు పంట ధరలు",
    latestPrices:
      "అందుబాటులో ఉన్న తాజా పంట ధరలు",
    viewAll: "అన్నీ చూడండి",

    farmerServices: "రైతు సేవలు",
    farmerServicesText:
      "మెరుగైన మార్కెట్ యాక్సెస్ కోసం అవసరమైన అన్ని సేవలు",

    favouriteCrops: "ఇష్టమైన పంటలు",
    favouriteDesc: "మీరు సేవ్ చేసిన పంటలను చూడండి",

    nearbyMarkets: "సమీప మార్కెట్లు",
    nearbyDesc: "మీకు సమీపంలోని మార్కెట్లను కనుగొనండి",

    bestMarket: "ఉత్తమ మార్కెట్",
    bestMarketDesc:
      "విక్రయించడానికి ఉత్తమ మార్కెట్‌ను కనుగొనండి",

    marketComparison: "మార్కెట్ పోలిక",
    marketComparisonDesc:
      "మార్కెట్ ధరలను పోల్చండి",

    bestMarketFinder: "ఉత్తమ మార్కెట్ శోధన",
    bestMarketFinderDesc:
      "సరైన మార్కెట్‌ను కనుగొనండి",

    buyers: "కొనుగోలుదారులు",
    buyersDesc:
      "మీ పంటలకు కొనుగోలుదారులను కనుగొనండి",

    buyerRequirements: "కొనుగోలుదారుల అవసరాలు",
    buyerRequirementsDesc:
      "కొనుగోలుదారుల పంట అవసరాలను చూడండి",

    priceAlerts: "ధర హెచ్చరికలు",
    priceAlertsDesc:
      "మీ ధర హెచ్చరికలను ట్రాక్ చేయండి",

    cropOffers: "నా పంట ఆఫర్లు",
    cropOffersDesc:
      "మీ పంట ఆఫర్లను చూడండి",

    cropSearch: "పంట శోధన",
    cropSearchDesc:
      "అందుబాటులో ఉన్న పంటలను శోధించండి",

    priceTrend: "ధర ధోరణి",
    priceTrendDesc:
      "పంట ధరల ధోరణిని చూడండి",

    myProfile: "నా ప్రొఫైల్",
    settings: "సెట్టింగ్స్",
    logout: "లాగ్అవుట్",

    loadingPrices:
      "తాజా ధరలు లోడ్ అవుతున్నాయి...",
    noPrices:
      "ప్రస్తుతం పంట ధర సమాచారం అందుబాటులో లేదు.",
    retry: "మళ్లీ ప్రయత్నించండి",

    agriOrbitMarket: "AgriOrbit Market",
    infoText:
      "పంట ధరలు, సమీప మార్కెట్లు మరియు కొనుగోలుదారులను ఒకే చోట కనుగొనండి. అన్ని రైతు సేవలను త్వరగా యాక్సెస్ చేయడానికి మెను ఉపయోగించండి.",
  },

  "ಕನ್ನಡ": {
    dashboard: "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
    farmerMenu: "ರೈತ ಮೆನು",
    farmerAccount: "ರೈತ ಖಾತೆ",
    welcome: "ಸ್ವಾಗತ",

    manageText:
      "ನಿಮ್ಮ ಬೆಳೆಗಳು, ಮಾರುಕಟ್ಟೆಗಳು ಮತ್ತು ಖರೀದಿದಾರರನ್ನು ಒಂದೇ ಸ್ಥಳದಲ್ಲಿ ನಿರ್ವಹಿಸಿ.",

    todaysPrices: "ಇಂದಿನ ಬೆಳೆ ಬೆಲೆಗಳು",
    latestPrices:
      "ಲಭ್ಯವಿರುವ ಇತ್ತೀಚಿನ ಬೆಳೆ ಬೆಲೆಗಳು",
    viewAll: "ಎಲ್ಲವನ್ನೂ ನೋಡಿ",

    farmerServices: "ರೈತ ಸೇವೆಗಳು",
    farmerServicesText:
      "ಉತ್ತಮ ಮಾರುಕಟ್ಟೆ ಪ್ರವೇಶಕ್ಕಾಗಿ ಅಗತ್ಯವಿರುವ ಎಲ್ಲಾ ಸೇವೆಗಳು",

    favouriteCrops: "ಮೆಚ್ಚಿನ ಬೆಳೆಗಳು",
    favouriteDesc:
      "ನೀವು ಉಳಿಸಿದ ಬೆಳೆಗಳನ್ನು ವೀಕ್ಷಿಸಿ",

    nearbyMarkets: "ಹತ್ತಿರದ ಮಾರುಕಟ್ಟೆಗಳು",
    nearbyDesc:
      "ನಿಮ್ಮ ಹತ್ತಿರದ ಮಾರುಕಟ್ಟೆಗಳನ್ನು ಹುಡುಕಿ",

    bestMarket: "ಉತ್ತಮ ಮಾರುಕಟ್ಟೆ",
    bestMarketDesc:
      "ಮಾರಾಟ ಮಾಡಲು ಉತ್ತಮ ಮಾರುಕಟ್ಟೆಯನ್ನು ಹುಡುಕಿ",

    marketComparison: "ಮಾರುಕಟ್ಟೆ ಹೋಲಿಕೆ",
    marketComparisonDesc:
      "ಮಾರುಕಟ್ಟೆ ಬೆಲೆಗಳನ್ನು ಹೋಲಿಸಿ",

    bestMarketFinder: "ಉತ್ತಮ ಮಾರುಕಟ್ಟೆ ಹುಡುಕಾಟ",
    bestMarketFinderDesc:
      "ಸೂಕ್ತ ಮಾರುಕಟ್ಟೆಯನ್ನು ಹುಡುಕಿ",

    buyers: "ಖರೀದಿದಾರರು",
    buyersDesc:
      "ನಿಮ್ಮ ಬೆಳೆಗಳಿಗೆ ಖರೀದಿದಾರರನ್ನು ಹುಡುಕಿ",

    buyerRequirements: "ಖರೀದಿದಾರರ ಅವಶ್ಯಕತೆಗಳು",
    buyerRequirementsDesc:
      "ಖರೀದಿದಾರರ ಬೆಳೆ ಅವಶ್ಯಕತೆಗಳನ್ನು ವೀಕ್ಷಿಸಿ",

    priceAlerts: "ಬೆಲೆ ಎಚ್ಚರಿಕೆಗಳು",
    priceAlertsDesc:
      "ನಿಮ್ಮ ಬೆಲೆ ಎಚ್ಚರಿಕೆಗಳನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಿ",

    cropOffers: "ನನ್ನ ಬೆಳೆ ಆಫರ್‌ಗಳು",
    cropOffersDesc:
      "ನಿಮ್ಮ ಬೆಳೆ ಆಫರ್‌ಗಳನ್ನು ವೀಕ್ಷಿಸಿ",

    cropSearch: "ಬೆಳೆ ಹುಡುಕಾಟ",
    cropSearchDesc:
      "ಲಭ್ಯವಿರುವ ಬೆಳೆಗಳನ್ನು ಹುಡುಕಿ",

    priceTrend: "ಬೆಲೆ ಪ್ರವೃತ್ತಿ",
    priceTrendDesc:
      "ಬೆಳೆ ಬೆಲೆಗಳ ಪ್ರವೃತ್ತಿಯನ್ನು ವೀಕ್ಷಿಸಿ",

    myProfile: "ನನ್ನ ಪ್ರೊಫೈಲ್",
    settings: "ಸೆಟ್ಟಿಂಗ್ಸ್",
    logout: "ಲಾಗ್‌ಔಟ್",

    loadingPrices:
      "ಇತ್ತೀಚಿನ ಬೆಲೆಗಳನ್ನು ಲೋಡ್ ಮಾಡಲಾಗುತ್ತಿದೆ...",
    noPrices:
      "ಈಗ ಯಾವುದೇ ಬೆಳೆ ಬೆಲೆ ಮಾಹಿತಿ ಲಭ್ಯವಿಲ್ಲ.",
    retry: "ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ",

    agriOrbitMarket: "AgriOrbit Market",
    infoText:
      "ಬೆಳೆ ಬೆಲೆಗಳು, ಹತ್ತಿರದ ಮಾರುಕಟ್ಟೆಗಳು ಮತ್ತು ಖರೀದಿದಾರರನ್ನು ಒಂದೇ ಸ್ಥಳದಲ್ಲಿ ಹುಡುಕಿ. ಎಲ್ಲಾ ರೈತ ಸೇವೆಗಳನ್ನು ತ್ವರಿತವಾಗಿ ಪ್ರವೇಶಿಸಲು ಮೆನು ಬಳಸಿ.",
  },
};


/* =========================================================
   DASHBOARD
========================================================= */

function Dashboard({
  currentFarmer,

  onLogout,
  onProfile,
  onSettings,

  onViewPrices,
  onNearbyMarkets,
  onViewFavourites,
  onBestMarket,
  onBuyers,
  onBuyerRequirements,
  onPriceAlerts,
  onCropOffers,
  onCropSearch,
  onPriceTrend,
  onMarketComparison,
  onBestMarketFinder,

  darkMode = false,
  onToggleTheme,

  language = "English",

  languages = [
    "English",
    "தமிழ்",
    "हिन्दी",
    "తెలుగు",
    "ಕನ್ನಡ",
  ],

  onLanguageChange,
}) {

  const [menuOpen, setMenuOpen] =
    useState(false);

  const [prices, setPrices] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");


  /* Current translation */

  const t =
    translations[language] ||
    translations.English;


  /* =====================================================
     FETCH LATEST MARKET PRICES
  ===================================================== */

  useEffect(() => {

    const fetchPrices = async () => {

      try {

        setLoading(true);
        setError("");

        const response = await fetch(
          "https://agri-orbit.onrender.com/api/latest-market-prices"
        );

        if (!response.ok) {
          throw new Error(
            "Unable to fetch crop prices."
          );
        }

        const data =
          await response.json();

        setPrices(
          Array.isArray(data)
            ? data
            : []
        );

      } catch (err) {

        console.error(
          "Dashboard price error:",
          err
        );

        setError(
          "Unable to load today's crop prices."
        );

      } finally {

        setLoading(false);

      }

    };

    fetchPrices();

  }, []);


  /* =====================================================
     CLOSE MENU
  ===================================================== */

  const closeMenu = () => {
    setMenuOpen(false);
  };


  /* =====================================================
     NAVIGATION
  ===================================================== */

  const goTo = (callback) => {

    closeMenu();

    if (callback) {
      callback();
    }

  };


  /* =====================================================
     DASHBOARD MODULES
  ===================================================== */

  const dashboardModules = [

    {
      icon: "💰",
      title: t.todaysPrices,
      description:
        t.latestPrices,
      onClick: onViewPrices,
    },

    {
      icon: "❤️",
      title: t.favouriteCrops,
      description:
        t.favouriteDesc,
      onClick: onViewFavourites,
    },

    {
      icon: "📍",
      title: t.nearbyMarkets,
      description:
        t.nearbyDesc,
      onClick: onNearbyMarkets,
    },

    {
      icon: "🏆",
      title: t.bestMarket,
      description:
        t.bestMarketDesc,
      onClick: onBestMarket,
    },

    {
      icon: "📊",
      title: t.marketComparison,
      description:
        t.marketComparisonDesc,
      onClick: onMarketComparison,
    },

    {
      icon: "🔎",
      title: t.bestMarketFinder,
      description:
        t.bestMarketFinderDesc,
      onClick: onBestMarketFinder,
    },

    {
      icon: "🏪",
      title: t.buyers,
      description:
        t.buyersDesc,
      onClick: onBuyers,
    },

    {
      icon: "📦",
      title: t.buyerRequirements,
      description:
        t.buyerRequirementsDesc,
      onClick: onBuyerRequirements,
    },

    {
      icon: "🔔",
      title: t.priceAlerts,
      description:
        t.priceAlertsDesc,
      onClick: onPriceAlerts,
    },

    {
      icon: "🌾",
      title: t.cropOffers,
      description:
        t.cropOffersDesc,
      onClick: onCropOffers,
    },

    {
      icon: "🔍",
      title: t.cropSearch,
      description:
        t.cropSearchDesc,
      onClick: onCropSearch,
    },

    {
      icon: "📈",
      title: t.priceTrend,
      description:
        t.priceTrendDesc,
      onClick: onPriceTrend,
    },

  ];


  /* =====================================================
     SIDE MENU
  ===================================================== */

  const menuItems = [

    {
      icon: "🏠",
      title: t.dashboard,
      onClick: closeMenu,
    },

    {
      icon: "💰",
      title: t.todaysPrices,
      onClick: () =>
        goTo(onViewPrices),
    },

    {
      icon: "❤️",
      title: t.favouriteCrops,
      onClick: () =>
        goTo(onViewFavourites),
    },

    {
      icon: "📍",
      title: t.nearbyMarkets,
      onClick: () =>
        goTo(onNearbyMarkets),
    },

    {
      icon: "🏆",
      title: t.bestMarket,
      onClick: () =>
        goTo(onBestMarket),
    },

    {
      icon: "📊",
      title: t.marketComparison,
      onClick: () =>
        goTo(onMarketComparison),
    },

    {
      icon: "🔎",
      title: t.bestMarketFinder,
      onClick: () =>
        goTo(onBestMarketFinder),
    },

    {
      icon: "🏪",
      title: t.buyers,
      onClick: () =>
        goTo(onBuyers),
    },

    {
      icon: "📦",
      title: t.buyerRequirements,
      onClick: () =>
        goTo(onBuyerRequirements),
    },

    {
      icon: "🔔",
      title: t.priceAlerts,
      onClick: () =>
        goTo(onPriceAlerts),
    },

    {
      icon: "🌾",
      title: t.cropOffers,
      onClick: () =>
        goTo(onCropOffers),
    },

    {
      icon: "🔍",
      title: t.cropSearch,
      onClick: () =>
        goTo(onCropSearch),
    },

    {
      icon: "📈",
      title: t.priceTrend,
      onClick: () =>
        goTo(onPriceTrend),
    },

  ];


  return (

    <div
      className={
        darkMode
          ? "dashboard-page dashboard-dark"
          : "dashboard-page"
      }
    >

      {/* =================================================
          OVERLAY
      ================================================= */}

      {menuOpen && (
        <div
          className="dashboard-menu-overlay"
          onClick={closeMenu}
        ></div>
      )}


      {/* =================================================
          SIDE DRAWER
      ================================================= */}

      <aside
        className={
          menuOpen
            ? "dashboard-side-menu open"
            : "dashboard-side-menu"
        }
      >

        {/* Side Header */}

        <div className="side-menu-header">

          <div className="side-menu-brand">

            <div className="side-menu-logo">
              🌱
            </div>

            <div>

              <h2>
                AgriOrbit
              </h2>

              <p>
                {t.farmerMenu}
              </p>

            </div>

          </div>

          <button
            type="button"
            className="side-menu-close"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            ✕
          </button>

        </div>


        {/* Farmer Info */}

        <div className="side-menu-farmer">

          <div className="side-menu-farmer-icon">
            👨‍🌾
          </div>

          <div>

            <strong>
              {currentFarmer?.name ||
                "Farmer"}
            </strong>

            <span>
              {t.farmerAccount}
            </span>

          </div>

        </div>


        {/* Menu */}

        <nav className="side-menu-nav">

          {menuItems.map(
            (item, index) => (

              <button
                type="button"
                className={
                  index === 0
                    ? "side-menu-item active"
                    : "side-menu-item"
                }
                key={index}
                onClick={item.onClick}
              >

                <span className="side-menu-item-icon">
                  {item.icon}
                </span>

                <span className="side-menu-item-title">
                  {item.title}
                </span>

                {index !== 0 && (
                  <span className="side-menu-item-arrow">
                    →
                  </span>
                )}

              </button>

            )
          )}

        </nav>


        {/* Bottom Menu */}

        <div className="side-menu-bottom">

          <button
            type="button"
            className="side-menu-bottom-item"
            onClick={() =>
              goTo(onProfile)
            }
          >

            <span>
              👤
            </span>

            <span>
              {t.myProfile}
            </span>

          </button>


          <button
            type="button"
            className="side-menu-bottom-item"
            onClick={() =>
              goTo(onSettings)
            }
          >

            <span>
              ⚙️
            </span>

            <span>
              {t.settings}
            </span>

          </button>


          <button
            type="button"
            className="side-menu-bottom-item logout"
            onClick={() => {

              closeMenu();

              if (onLogout) {
                onLogout();
              }

            }}
          >

            <span>
              🚪
            </span>

            <span>
              {t.logout}
            </span>

          </button>

        </div>

      </aside>


      {/* =================================================
          HEADER
      ================================================= */}

      <header className="dashboard-header">

        {/* Hamburger */}

        <button
          type="button"
          className="dashboard-hamburger"
          onClick={() =>
            setMenuOpen(true)
          }
          aria-label="Open menu"
        >

          <span></span>
          <span></span>
          <span></span>

        </button>


        {/* Title */}

        <div className="dashboard-header-title">

          <h1>
            AgriOrbit 🌱
          </h1>

          <p>
            {t.dashboard}
          </p>

        </div>


        {/* Header Actions */}

        <div className="dashboard-header-actions">

          {/* Language */}

          <select
            className="dashboard-language-select"
            value={language}
            onChange={(e) => {

              if (onLanguageChange) {

                onLanguageChange(
                  e.target.value
                );

              }

            }}
            aria-label="Language"
          >

            {languages.map(
              (item) => (

                <option
                  value={item}
                  key={item}
                >
                  {item}
                </option>

              )
            )}

          </select>


          {/* Theme */}

          <button
            type="button"
            className="dashboard-theme-button"
            onClick={
              onToggleTheme
            }
            aria-label="Toggle theme"
            title={
              darkMode
                ? "Light Mode"
                : "Dark Mode"
            }
          >

            {darkMode
              ? "☀️"
              : "🌙"}

          </button>


          {/* Profile */}

          <button
            type="button"
            className="dashboard-profile-button"
            onClick={
              onProfile
            }
            aria-label="Profile"
          >

            👨‍🌾

          </button>

        </div>

      </header>


      {/* =================================================
          MAIN CONTENT
      ================================================= */}

      <main className="dashboard-content">


        {/* Welcome */}

        <section className="dashboard-welcome">

          <div>

            <h2>

              👋 {t.welcome}

              {currentFarmer?.name
                ? `, ${currentFarmer.name}`
                : ""}

            </h2>

            <p>
              {t.manageText}
            </p>

          </div>

          <div className="dashboard-welcome-badge">
            🌾
          </div>

        </section>


        {/* =================================================
            PRICE PREVIEW
        ================================================= */}

        <section className="dashboard-price-preview">

          <div className="dashboard-section-heading">

            <div>

              <h2>
                💰 {t.todaysPrices}
              </h2>

              <p>
                {t.latestPrices}
              </p>

            </div>

            <button
              type="button"
              className="dashboard-view-all-button"
              onClick={
                onViewPrices
              }
            >
              {t.viewAll} →
            </button>

          </div>


          {/* Loading */}

          {loading && (

            <div className="dashboard-loading">

              <div className="dashboard-spinner"></div>

              <p>
                {t.loadingPrices}
              </p>

            </div>

          )}


          {/* Error */}

          {!loading && error && (

            <div className="dashboard-error">

              <span>
                ⚠️
              </span>

              <p>
                {error}
              </p>

              <button
                type="button"
                onClick={() =>
                  window.location.reload()
                }
              >
                {t.retry}
              </button>

            </div>

          )}


          {/* Empty */}

          {!loading &&
            !error &&
            prices.length === 0 && (

              <div className="dashboard-empty-price">

                <span>
                  🌾
                </span>

                <p>
                  {t.noPrices}
                </p>

              </div>

            )}


          {/* Prices */}

          {!loading &&
            !error &&
            prices.length > 0 && (

              <div className="dashboard-price-grid">

                {prices
                  .slice(0, 4)
                  .map(
                    (price, index) => (

                      <div
                        className="dashboard-price-card"
                        key={
                          price.id ||
                          index
                        }
                      >

                        <div className="dashboard-price-icon">
                          🌾
                        </div>

                        <div className="dashboard-price-info">

                          <h3>
                            {price.crop_name ||
                              price.crop ||
                              price.name ||
                              "Crop"}
                          </h3>

                          <p>
                            {price.market_name ||
                              price.market ||
                              "Market"}
                          </p>

                        </div>

                        <strong>

                          ₹
                          {price.price_per_kg ||
                            price.price ||
                            "—"}

                          <small>
                            /kg
                          </small>

                        </strong>

                      </div>

                    )
                  )}

              </div>

            )}

        </section>


        {/* =================================================
            FARMER SERVICES
        ================================================= */}

        <section className="dashboard-modules-section">

          <div className="dashboard-section-heading">

            <div>

              <h2>
                🌱 {t.farmerServices}
              </h2>

              <p>
                {t.farmerServicesText}
              </p>

            </div>

          </div>


          <div className="dashboard-modules-grid">

            {dashboardModules.map(
              (module, index) => (

                <button
                  type="button"
                  className="dashboard-module-card"
                  key={index}
                  onClick={
                    module.onClick
                  }
                >

                  <div className="dashboard-module-icon">
                    {module.icon}
                  </div>

                  <div className="dashboard-module-content">

                    <h3>
                      {module.title}
                    </h3>

                    <p>
                      {module.description}
                    </p>

                  </div>

                  <div className="dashboard-module-arrow">
                    →
                  </div>

                </button>

              )
            )}

          </div>

        </section>


        {/* =================================================
            INFO CARD
        ================================================= */}

        <section className="dashboard-info-card">

          <div className="dashboard-info-icon">
            💡
          </div>

          <div>

            <h3>
              {t.agriOrbitMarket}
            </h3>

            <p>
              {t.infoText}
            </p>

          </div>

        </section>


        {/* =================================================
            LOGOUT
        ================================================= */}

        <div className="dashboard-logout-section">

          <button
            type="button"
            className="dashboard-logout-button"
            onClick={
              onLogout
            }
          >

            🚪 {t.logout}

          </button>

        </div>

      </main>

    </div>
  );
}

export default Dashboard;