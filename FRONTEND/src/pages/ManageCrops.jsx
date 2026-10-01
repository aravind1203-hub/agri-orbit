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

    pageTitle: "Manage Crops",
    pageDesc: "Add and manage available crops",
    cropsTitle: "Crops",

    addCrop: "Add Crop",
    editCrop: "Edit Crop",
    addNewCrop: "Add New Crop",

    cropName: "Crop Name",
    cropNamePlaceholder: "Enter crop name",
    category: "Category",
    imagePath: "Image Path",
    cancel: "Cancel",
    updateCrop: "Update Crop",

    total: "Total Crops",
    active: "Active",
    inactive: "Inactive",
    showing: "Showing",

    search: "Search crop or category...",

    view: "View",
    edit: "Edit",
    disable: "Disable",
    enable: "Enable",

    loading: "Loading Crops...",
    loadingDesc:
      "Please wait while crop data is loading.",

    unableLoad: "Unable to Load Crops",
    retry: "Retry",

    noCrops: "No Crops Found",
    noCropsDesc:
      "Try searching with another crop name or category.",

    back: "Back to Admin Dashboard",

    fillFields:
      "Please enter crop name and category.",
    added:
      "Crop added successfully!",
    updated:
      "Crop updated successfully!",
    enabled:
      "enabled successfully!",
    disabled:
      "disabled successfully!",
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

    pageTitle: "பயிர்களை நிர்வகிக்கவும்",
    pageDesc:
      "கிடைக்கும் பயிர்களை சேர்த்து நிர்வகிக்கவும்",
    cropsTitle: "பயிர்கள்",

    addCrop: "பயிர் சேர்க்க",
    editCrop: "பயிரை திருத்து",
    addNewCrop: "புதிய பயிர் சேர்க்க",

    cropName: "பயிர் பெயர்",
    cropNamePlaceholder: "பயிர் பெயரை உள்ளிடவும்",
    category: "வகை",
    imagePath: "படத்தின் Path",
    cancel: "ரத்து செய்",
    updateCrop: "பயிரை Update செய்",

    total: "மொத்த பயிர்கள்",
    active: "செயலில்",
    inactive: "செயலில் இல்லை",
    showing: "காட்டப்படுவது",

    search: "பயிர் அல்லது வகையை தேடுங்கள்...",

    view: "பார்க்க",
    edit: "திருத்து",
    disable: "Disable",
    enable: "Enable",

    loading: "பயிர்களை ஏற்றுகிறது...",
    loadingDesc:
      "பயிர்களின் தகவல் ஏற்றப்படுகிறது. காத்திருக்கவும்.",

    unableLoad:
      "பயிர்களை ஏற்ற முடியவில்லை",
    retry: "மீண்டும் முயற்சி",

    noCrops: "பயிர்கள் கிடைக்கவில்லை",
    noCropsDesc:
      "வேறு பயிர் பெயர் அல்லது வகையை தேடுங்கள்.",

    back: "Admin Dashboard-க்கு திரும்பு",

    fillFields:
      "பயிர் பெயர் மற்றும் வகையை உள்ளிடவும்.",
    added:
      "பயிர் வெற்றிகரமாக சேர்க்கப்பட்டது!",
    updated:
      "பயிர் வெற்றிகரமாக Update செய்யப்பட்டது!",
    enabled:
      "வெற்றிகரமாக Enable செய்யப்பட்டது!",
    disabled:
      "வெற்றிகரமாக Disable செய்யப்பட்டது!",
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

    pageTitle: "फसलों को मैनेज करें",
    pageDesc:
      "उपलब्ध फसलों को जोड़ें और मैनेज करें",
    cropsTitle: "फसलें",

    addCrop: "फसल जोड़ें",
    editCrop: "फसल एडिट करें",
    addNewCrop: "नई फसल जोड़ें",

    cropName: "फसल का नाम",
    cropNamePlaceholder:
      "फसल का नाम दर्ज करें",
    category: "श्रेणी",
    imagePath: "इमेज पाथ",
    cancel: "रद्द करें",
    updateCrop: "फसल अपडेट करें",

    total: "कुल फसलें",
    active: "सक्रिय",
    inactive: "निष्क्रिय",
    showing: "दिखाए जा रहे हैं",

    search: "फसल या श्रेणी खोजें...",

    view: "देखें",
    edit: "एडिट",
    disable: "डिसेबल",
    enable: "एनेबल",

    loading: "फसलें लोड हो रही हैं...",
    loadingDesc:
      "कृपया प्रतीक्षा करें।",

    unableLoad:
      "फसलें लोड नहीं हो सकीं",
    retry: "फिर से कोशिश करें",

    noCrops: "कोई फसल नहीं मिली",
    noCropsDesc:
      "किसी अन्य फसल या श्रेणी के नाम से खोजें।",

    back: "एडमिन डैशबोर्ड पर वापस जाएं",

    fillFields:
      "कृपया फसल का नाम और श्रेणी दर्ज करें।",
    added:
      "फसल सफलतापूर्वक जोड़ी गई!",
    updated:
      "फसल सफलतापूर्वक अपडेट की गई!",
    enabled:
      "सफलतापूर्वक एनेबल की गई!",
    disabled:
      "सफलतापूर्वक डिसेबल की गई!",
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

    pageTitle: "పంటలను నిర్వహించండి",
    pageDesc:
      "అందుబాటులో ఉన్న పంటలను జోడించి నిర్వహించండి",
    cropsTitle: "పంటలు",

    addCrop: "పంటను జోడించండి",
    editCrop: "పంటను ఎడిట్ చేయండి",
    addNewCrop: "కొత్త పంటను జోడించండి",

    cropName: "పంట పేరు",
    cropNamePlaceholder:
      "పంట పేరు నమోదు చేయండి",
    category: "వర్గం",
    imagePath: "ఇమేజ్ పాత్",
    cancel: "రద్దు",
    updateCrop: "పంటను అప్‌డేట్ చేయండి",

    total: "మొత్తం పంటలు",
    active: "యాక్టివ్",
    inactive: "ఇనాక్టివ్",
    showing: "చూపిస్తున్నవి",

    search: "పంట లేదా వర్గాన్ని శోధించండి...",

    view: "చూడండి",
    edit: "ఎడిట్",
    disable: "డిసేబుల్",
    enable: "ఎనేబుల్",

    loading: "పంటలను లోడ్ చేస్తోంది...",
    loadingDesc:
      "పంటల సమాచారం లోడ్ అవుతోంది. దయచేసి వేచి ఉండండి.",

    unableLoad:
      "పంటలను లోడ్ చేయలేకపోయాము",
    retry: "మళ్లీ ప్రయత్నించండి",

    noCrops: "పంటలు కనబడలేదు",
    noCropsDesc:
      "మరొక పంట పేరు లేదా వర్గంతో శోధించండి.",

    back: "అడ్మిన్ డాష్‌బోర్డ్‌కు తిరిగి వెళ్లండి",

    fillFields:
      "పంట పేరు మరియు వర్గాన్ని నమోదు చేయండి.",
    added:
      "పంట విజయవంతంగా జోడించబడింది!",
    updated:
      "పంట విజయవంతంగా అప్‌డేట్ చేయబడింది!",
    enabled:
      "విజయవంతంగా ఎనేబుల్ చేయబడింది!",
    disabled:
      "విజయవంతంగా డిసేబుల్ చేయబడింది!",
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

    pageTitle: "ಬೆಳೆಗಳನ್ನು ನಿರ್ವಹಿಸಿ",
    pageDesc:
      "ಲಭ್ಯವಿರುವ ಬೆಳೆಗಳನ್ನು ಸೇರಿಸಿ ಮತ್ತು ನಿರ್ವಹಿಸಿ",
    cropsTitle: "ಬೆಳೆಗಳು",

    addCrop: "ಬೆಳೆ ಸೇರಿಸಿ",
    editCrop: "ಬೆಳೆ ಎಡಿಟ್ ಮಾಡಿ",
    addNewCrop: "ಹೊಸ ಬೆಳೆ ಸೇರಿಸಿ",

    cropName: "ಬೆಳೆಯ ಹೆಸರು",
    cropNamePlaceholder:
      "ಬೆಳೆಯ ಹೆಸರನ್ನು ನಮೂದಿಸಿ",
    category: "ವರ್ಗ",
    imagePath: "ಇಮೇಜ್ ಪಾತ್",
    cancel: "ರದ್ದುಮಾಡಿ",
    updateCrop: "ಬೆಳೆ ಅಪ್‌ಡೇಟ್ ಮಾಡಿ",

    total: "ಒಟ್ಟು ಬೆಳೆಗಳು",
    active: "ಸಕ್ರಿಯ",
    inactive: "ನಿಷ್ಕ್ರಿಯ",
    showing: "ತೋರಿಸಲಾಗುತ್ತಿದೆ",

    search: "ಬೆಳೆ ಅಥವಾ ವರ್ಗವನ್ನು ಹುಡುಕಿ...",

    view: "ವೀಕ್ಷಿಸಿ",
    edit: "ಎಡಿಟ್",
    disable: "ಡಿಸೇಬಲ್",
    enable: "ಎನೇಬಲ್",

    loading: "ಬೆಳೆಗಳನ್ನು ಲೋಡ್ ಮಾಡಲಾಗುತ್ತಿದೆ...",
    loadingDesc:
      "ಬೆಳೆಗಳ ಮಾಹಿತಿಯನ್ನು ಲೋಡ್ ಮಾಡಲಾಗುತ್ತಿದೆ. ದಯವಿಟ್ಟು ಕಾಯಿರಿ.",

    unableLoad:
      "ಬೆಳೆಗಳನ್ನು ಲೋಡ್ ಮಾಡಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ",
    retry: "ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ",

    noCrops: "ಯಾವುದೇ ಬೆಳೆಗಳು ಕಂಡುಬಂದಿಲ್ಲ",
    noCropsDesc:
      "ಬೇರೆ ಬೆಳೆ ಅಥವಾ ವರ್ಗದ ಹೆಸರಿನಿಂದ ಹುಡುಕಿ.",

    back: "ಅಡ್ಮಿನ್ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್‌ಗೆ ಹಿಂತಿರುಗಿ",

    fillFields:
      "ದಯವಿಟ್ಟು ಬೆಳೆ ಹೆಸರು ಮತ್ತು ವರ್ಗವನ್ನು ನಮೂದಿಸಿ.",
    added:
      "ಬೆಳೆ ಯಶಸ್ವಿಯಾಗಿ ಸೇರಿಸಲಾಗಿದೆ!",
    updated:
      "ಬೆಳೆ ಯಶಸ್ವಿಯಾಗಿ ಅಪ್‌ಡೇಟ್ ಮಾಡಲಾಗಿದೆ!",
    enabled:
      "ಯಶಸ್ವಿಯಾಗಿ ಎನೇಬಲ್ ಮಾಡಲಾಗಿದೆ!",
    disabled:
      "ಯಶಸ್ವಿಯಾಗಿ ಡಿಸೇಬಲ್ ಮಾಡಲಾಗಿದೆ!",
  },
};

function ManageCrops({
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

  const [crops, setCrops] = useState([]);
  const [search, setSearch] = useState("");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [showForm, setShowForm] = useState(false);
  const [editingCrop, setEditingCrop] =
    useState(null);

  const [cropName, setCropName] =
    useState("");
  const [category, setCategory] =
    useState("Vegetable");
  const [image, setImage] =
    useState("");

  const [showMenu, setShowMenu] =
    useState(false);

  // =========================================================
  // LOAD CROPS
  // =========================================================

  const loadCrops = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        "http://10.19.77.40:5000/api/admin/crops"
      );

      const data =
        await response.json();

      if (!response.ok) {
        throw new Error(
          data.error ||
            "Failed to load crops."
        );
      }

      setCrops(
        data.map((crop) => ({
          id: crop.id,
          name: crop.name,
          category:
            crop.category ||
            "Vegetable",
          image:
            crop.image || "",
          status:
            crop.status || "Active",
        }))
      );
    } catch (err) {
      console.error(
        "Load crops error:",
        err
      );

      setError(
        err.message ||
          "Unable to load crops."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCrops();
  }, []);

  // =========================================================
  // RESET FORM
  // =========================================================

  const resetForm = () => {
    setCropName("");
    setCategory("Vegetable");
    setImage("");
    setEditingCrop(null);
    setShowForm(false);
  };

  // =========================================================
  // ADD / EDIT CROP
  // =========================================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !cropName.trim() ||
      !category.trim()
    ) {
      alert(t.fillFields);
      return;
    }

    try {
      const url = editingCrop
        ? `http://10.19.77.40:5000/api/admin/crops/${editingCrop.id}`
        : "http://10.19.77.40:5000/api/admin/crops";

      const method =
        editingCrop ? "PUT" : "POST";

      const response =
        await fetch(url, {
          method,
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            name: cropName.trim(),
            category:
              category.trim(),
            image: image.trim(),
          }),
        });

      const data =
        await response.json();

      if (!response.ok) {
        throw new Error(
          data.error ||
            (editingCrop
              ? "Failed to update crop."
              : "Failed to add crop.")
        );
      }

      alert(
        editingCrop
          ? t.updated
          : t.added
      );

      resetForm();
      loadCrops();
    } catch (err) {
      console.error(
        "Crop save error:",
        err
      );

      alert(
        err.message ||
          "Unable to save crop. Please try again."
      );
    }
  };

  // =========================================================
  // OPEN EDIT FORM
  // =========================================================

  const handleEdit = (crop) => {
    setEditingCrop(crop);
    setCropName(crop.name);
    setCategory(
      crop.category ||
        "Vegetable"
    );
    setImage(crop.image || "");
    setShowForm(true);
  };

  // =========================================================
  // ENABLE / DISABLE
  // =========================================================

  const handleToggleStatus =
    async (crop) => {
      const newStatus =
        crop.status === "Active"
          ? "Inactive"
          : "Active";

      try {
        const response =
          await fetch(
            `http://10.19.77.40:5000/api/admin/crops/${crop.id}/status`,
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
              "Failed to update crop status."
          );
        }

        setCrops(
          (currentCrops) =>
            currentCrops.map(
              (item) =>
                item.id === crop.id
                  ? {
                      ...item,
                      status:
                        newStatus,
                    }
                  : item
            )
        );

        alert(
          newStatus === "Active"
            ? `${crop.name} ${t.enabled}`
            : `${crop.name} ${t.disabled}`
        );
      } catch (err) {
        console.error(
          "Crop status update error:",
          err
        );

        alert(
          err.message ||
            "Unable to update crop status."
        );
      }
    };

  // =========================================================
  // VIEW CROP
  // =========================================================

  const handleView = (crop) => {
    alert(
      `Crop: ${crop.name}\n` +
        `Category: ${crop.category}\n` +
        `Status: ${crop.status}`
    );
  };

  // =========================================================
  // SEARCH
  // =========================================================

  const filteredCrops =
    crops.filter((crop) =>
      `${crop.name} ${crop.category}`
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );

  const activeCount =
    crops.filter(
      (crop) =>
        crop.status === "Active"
    ).length;

  const inactiveCount =
    crops.filter(
      (crop) =>
        crop.status === "Inactive"
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

  return (
    <div
      className={`admin-manage-page ${
        darkMode
          ? "dark-mode"
          : ""
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
              className="admin-drawer-item active"
              onClick={closeMenu}
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

        {/* PAGE TITLE */}

        <div className="admin-page-title">

          <div>
            <h2>
              🌾 {t.cropsTitle}
            </h2>

            <p>
              {t.pageDesc}
            </p>
          </div>

          <button
            type="button"
            className="admin-add-button"
            onClick={() => {
              resetForm();
              setShowForm(true);
            }}
          >
            + {t.addCrop}
          </button>

        </div>

        {/* ADD / EDIT FORM */}

        {showForm && (
          <div className="admin-crop-form">

            <h3>
              {editingCrop
                ? `✏️ ${t.editCrop}`
                : `➕ ${t.addNewCrop}`}
            </h3>

            <form
              onSubmit={handleSubmit}
            >

              <div className="admin-form-group">

                <label>
                  {t.cropName}
                </label>

                <input
                  type="text"
                  placeholder={
                    t.cropNamePlaceholder
                  }
                  value={cropName}
                  onChange={(e) =>
                    setCropName(
                      e.target.value
                    )
                  }
                />

              </div>

              <div className="admin-form-group">

                <label>
                  {t.category}
                </label>

                <select
                  value={category}
                  onChange={(e) =>
                    setCategory(
                      e.target.value
                    )
                  }
                >
                  <option value="Vegetable">
                    Vegetable
                  </option>

                  <option value="Fruit">
                    Fruit
                  </option>

                  <option value="Grain">
                    Grain
                  </option>

                  <option value="Pulse">
                    Pulse
                  </option>

                  <option value="Spice">
                    Spice
                  </option>

                  <option value="Other">
                    Other
                  </option>
                </select>

              </div>

              <div className="admin-form-group">

                <label>
                  {t.imagePath}
                </label>

                <input
                  type="text"
                  placeholder="/image/Tomato.png"
                  value={image}
                  onChange={(e) =>
                    setImage(
                      e.target.value
                    )
                  }
                />

              </div>

              <div className="admin-form-actions">

                <button
                  type="submit"
                  className="admin-accept-button"
                >
                  {editingCrop
                    ? `💾 ${t.updateCrop}`
                    : `➕ ${t.addCrop}`}
                </button>

                <button
                  type="button"
                  className="admin-reject-button"
                  onClick={resetForm}
                >
                  {t.cancel}
                </button>

              </div>

            </form>

          </div>
        )}

        {/* SUMMARY */}

        <div className="admin-summary-card">

          <div>
            <span>
              {t.total}
            </span>

            <strong>
              {crops.length}
            </strong>
          </div>

          <div>
            <span>
              {t.active}
            </span>

            <strong>
              {activeCount}
            </strong>
          </div>

          <div>
            <span>
              {t.inactive}
            </span>

            <strong>
              {inactiveCount}
            </strong>
          </div>

          <div>
            <span>
              {t.showing}
            </span>

            <strong>
              {
                filteredCrops.length
              }
            </strong>
          </div>

        </div>

        {/* SEARCH */}

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

            <button
              type="button"
              className="admin-back-button"
              onClick={loadCrops}
              style={{
                marginTop: "15px",
              }}
            >
              🔄 {t.retry}
            </button>

          </div>
        )}

        {/* CROPS */}

        {!loading &&
          !error && (
            <div className="admin-crops-grid">

              {filteredCrops.map(
                (crop) => (

                  <div
                    className="admin-crop-card"
                    key={crop.id}
                  >

                    <div className="admin-crop-image">

                      {crop.image ? (
                        <img
                          src={
                            crop.image
                          }
                          alt={
                            crop.name
                          }
                          onError={(e) => {
                            e.currentTarget.style.display =
                              "none";
                          }}
                        />
                      ) : (
                        <span>
                          🌾
                        </span>
                      )}

                    </div>

                    <div className="admin-crop-details">

                      <div className="admin-crop-heading">

                        <div>

                          <h3>
                            {crop.name}
                          </h3>

                          <p>
                            {crop.category}
                          </p>

                        </div>

                        <span
                          className={
                            crop.status ===
                            "Active"
                              ? "admin-status active"
                              : "admin-status blocked"
                          }
                        >
                          {
                            crop.status
                          }
                        </span>

                      </div>

                      <div className="admin-crop-actions">

                        <button
                          type="button"
                          className="admin-view-button"
                          onClick={() =>
                            handleView(
                              crop
                            )
                          }
                        >
                          👁️{" "}
                          {t.view}
                        </button>

                        <button
                          type="button"
                          className="admin-edit-button"
                          onClick={() =>
                            handleEdit(
                              crop
                            )
                          }
                        >
                          ✏️{" "}
                          {t.edit}
                        </button>

                        <button
                          type="button"
                          className="admin-block-button"
                          onClick={() =>
                            handleToggleStatus(
                              crop
                            )
                          }
                        >
                          {crop.status ===
                          "Active"
                            ? `🚫 ${t.disable}`
                            : `✅ ${t.enable}`}
                        </button>

                      </div>

                    </div>

                  </div>

                )
              )}

            </div>
          )}

        {/* NO RESULTS */}

        {!loading &&
          !error &&
          filteredCrops.length ===
            0 && (
            <div className="admin-no-results">

              <div>🔍</div>

              <h3>
                {t.noCrops}
              </h3>

              <p>
                {t.noCropsDesc}
              </p>

            </div>
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

export default ManageCrops;
