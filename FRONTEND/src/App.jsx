import { useEffect, useState } from "react";
import "./App.css";

/* =========================
   FARMER PAGES
========================= */

import Dashboard from "./pages/Dashboard";
import CropPrices from "./pages/CropPrices";
import FavouriteCrops from "./pages/FavouriteCrops";
import NearbyMarkets from "./pages/NearbyMarkets";
import BestMarket from "./pages/BestMarket";
import MarketDetails from "./pages/MarketDetails";

import Buyers from "./pages/Buyers";
import BuyerDetails from "./pages/BuyerDetails";
import BuyerRequirements from "./pages/BuyerRequirements";
import SendCropOffer from "./pages/sendcropoffer";

import PriceAlerts from "./pages/PriceAlerts";
import CropOffers from "./pages/CropOffers";

import CropSearch from "./pages/CropSearch";
import CropDetails from "./pages/CropDetails";
import PriceTrend from "./pages/PriceTrend";

import MarketComparison from "./pages/MarketComparison";
import BestMarketFinder from "./pages/BestMarketFinder";

import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

/* =========================
   BUYER PAGES
========================= */

import BuyerDashboard from "./pages/BuyerDashboard";
import PostRequirement from "./pages/PostRequirement";
import MyRequirements from "./pages/MyRequirements";
import ReceivedOffers from "./pages/ReceivedOffers";
import FarmerDetails from "./pages/FarmerDetails";

/* =========================
   ADMIN PAGES
========================= */

import AdminDashboard from "./pages/AdminDashboard";
import ManageFarmers from "./pages/ManageFarmers";
import ManageBuyers from "./pages/ManageBuyers";
import ManageCrops from "./pages/ManageCrops";
import ManageMarkets from "./pages/ManageMarkets";
import ManagePrices from "./pages/ManagePrices";
import ManageOffers from "./pages/ManageOffers";
import Reports from "./pages/Reports";

/* =========================
   AUTH PAGES
========================= */

import FarmerLogin from "./pages/FarmerLogin";
import BuyerLogin from "./pages/BuyerLogin";
import AdminLogin from "./pages/AdminLogin";

import FarmerRegistration from "./pages/FarmerRegistration";
import FarmerOTP from "./pages/FarmerOTP";
import FarmerSuccess from "./pages/FarmerSuccess";

import ForgotPassword from "./pages/ForgotPassword";
import ForgotOTP from "./pages/ForgotOTP";

import BuyerRegistration from "./pages/BuyerRegistration";
import BuyerOTP from "./pages/BuyerOTP";
import BuyerSuccess from "./pages/BuyerSuccess";


function App() {

  /* =========================================================
     GLOBAL THEME
  ========================================================= */

  const [darkMode, setDarkMode] = useState(false);


  /* =========================================================
     GLOBAL LANGUAGE
  ========================================================= */

  const [language, setLanguage] = useState("English");

  const languages = [
    "English",
    "தமிழ்",
    "हिन्दी",
    "తెలుగు",
    "ಕನ್ನಡ",
  ];


  /* =========================================================
     APPLY DARK MODE
  ========================================================= */

  useEffect(() => {

    document.body.classList.toggle(
      "dark-mode",
      darkMode
    );

    return () => {
      document.body.classList.remove(
        "dark-mode"
      );
    };

  }, [darkMode]);


  /* =========================================================
     FARMER AUTH
  ========================================================= */

  const [showLogin, setShowLogin] =
    useState(false);

  const [showRegister, setShowRegister] =
    useState(false);

  const [showOtp, setShowOtp] =
    useState(false);

  const [showSuccess, setShowSuccess] =
    useState(false);

  const [showForgot, setShowForgot] =
    useState(false);

  const [showForgotOtp, setShowForgotOtp] =
    useState(false);

  const [currentFarmer, setCurrentFarmer] =
    useState(null);


  /* =========================================================
     BUYER AUTH
  ========================================================= */

  const [showBuyerLogin, setShowBuyerLogin] =
    useState(false);

  const [showBuyerRegister, setShowBuyerRegister] =
    useState(false);

  const [showBuyerOtp, setShowBuyerOtp] =
    useState(false);

  const [showBuyerSuccess, setShowBuyerSuccess] =
    useState(false);

  const [currentBuyer, setCurrentBuyer] =
    useState(null);


  /* =========================================================
     ADMIN AUTH
  ========================================================= */

  const [showAdminLogin, setShowAdminLogin] =
    useState(false);

  const [showAdminDashboard, setShowAdminDashboard] =
    useState(false);


  /* =========================================================
     ADMIN MODULES
  ========================================================= */

  const [showManageFarmers, setShowManageFarmers] =
    useState(false);

  const [showManageBuyers, setShowManageBuyers] =
    useState(false);

  const [showManageCrops, setShowManageCrops] =
    useState(false);

  const [showManageMarkets, setShowManageMarkets] =
    useState(false);

  const [showManagePrices, setShowManagePrices] =
    useState(false);

  const [showManageOffers, setShowManageOffers] =
    useState(false);

  const [showReports, setShowReports] =
    useState(false);


  /* =========================================================
     FARMER DASHBOARD
  ========================================================= */

  const [showDashboard, setShowDashboard] =
    useState(false);

  const [showCropPrices, setShowCropPrices] =
    useState(false);

  const [showFavouriteCrops, setShowFavouriteCrops] =
    useState(false);

  const [showNearbyMarkets, setShowNearbyMarkets] =
    useState(false);

  const [showBestMarket, setShowBestMarket] =
    useState(false);

  const [showMarketDetails, setShowMarketDetails] =
    useState(false);

  const [selectedMarket, setSelectedMarket] =
    useState(null);

  const [showMarketComparison, setShowMarketComparison] =
    useState(false);

  const [showBestMarketFinder, setShowBestMarketFinder] =
    useState(false);

  const [showBuyers, setShowBuyers] =
    useState(false);

  const [showBuyerDetails, setShowBuyerDetails] =
    useState(false);

  const [showBuyerRequirements, setShowBuyerRequirements] =
    useState(false);

  const [selectedBuyer, setSelectedBuyer] =
    useState(null);

  const [showSendOffer, setShowSendOffer] =
    useState(false);

  const [showPriceAlerts, setShowPriceAlerts] =
    useState(false);

  const [showCropOffers, setShowCropOffers] =
    useState(false);

  const [showCropSearch, setShowCropSearch] =
    useState(false);

  const [showCropDetails, setShowCropDetails] =
    useState(false);

  const [selectedCrop, setSelectedCrop] =
    useState(null);

  const [showPriceTrend, setShowPriceTrend] =
    useState(false);

  const [showProfile, setShowProfile] =
    useState(false);

  const [showSettings, setShowSettings] =
    useState(false);


  /* =========================================================
     BUYER DASHBOARD
  ========================================================= */

  const [showBuyerDashboard, setShowBuyerDashboard] =
    useState(false);

  const [showPostRequirement, setShowPostRequirement] =
    useState(false);

  const [showMyRequirements, setShowMyRequirements] =
    useState(false);

  const [showReceivedOffers, setShowReceivedOffers] =
    useState(false);

  const [showFarmerDetails, setShowFarmerDetails] =
    useState(false);

  const [selectedFarmer, setSelectedFarmer] =
    useState(null);


  /* =========================================================
     FAVOURITE CROPS
  ========================================================= */

  const [favouriteCrops, setFavouriteCrops] =
    useState([]);


  /* =========================================================
     SPLASH SCREEN
  ========================================================= */

  useEffect(() => {

    const timer = setTimeout(() => {

      setShowLogin(true);

    }, 3000);

    return () => clearTimeout(timer);

  }, []);


  /* =========================================================
     ADMIN NAVIGATION HELPER
  ========================================================= */

  const closeAllAdminPages = () => {

    setShowAdminDashboard(false);
    setShowManageFarmers(false);
    setShowManageBuyers(false);
    setShowManageCrops(false);
    setShowManageMarkets(false);
    setShowManagePrices(false);
    setShowManageOffers(false);
    setShowReports(false);

  };


  const goToAdminDashboard = () => {

    closeAllAdminPages();

    setShowAdminDashboard(true);

  };


  const goToManageFarmers = () => {

    closeAllAdminPages();

    setShowManageFarmers(true);

  };


  const goToManageBuyers = () => {

    closeAllAdminPages();

    setShowManageBuyers(true);

  };


  const goToManageCrops = () => {

    closeAllAdminPages();

    setShowManageCrops(true);

  };


  const goToManageMarkets = () => {

    closeAllAdminPages();

    setShowManageMarkets(true);

  };


  const goToManagePrices = () => {

    closeAllAdminPages();

    setShowManagePrices(true);

  };


  const goToManageOffers = () => {

    closeAllAdminPages();

    setShowManageOffers(true);

  };


  const goToReports = () => {

    closeAllAdminPages();

    setShowReports(true);

  };


  /* =========================================================
     FAVOURITE HANDLER
  ========================================================= */

  const handleToggleFavourite = async (cropName) => {

    const farmerId =
      currentFarmer?.farmer_id ||
      currentFarmer?.id;

    if (!farmerId) {

      alert(
        "Farmer information not found. Please login again."
      );

      return;
    }

    try {

      const cropsResponse = await fetch(
        "https://agri-orbit.onrender.com/api/crops"
      );

      if (!cropsResponse.ok) {

        throw new Error(
          "Failed to fetch crops."
        );

      }

      const cropsData =
        await cropsResponse.json();

      const selectedCropData =
        cropsData.find(
          (crop) =>
            crop.name.toLowerCase() ===
            cropName.toLowerCase()
        );

      if (!selectedCropData) {

        throw new Error(
          "Crop not found."
        );

      }

      const isAlreadyFavourite =
        favouriteCrops.includes(cropName);


      /* =========================
         REMOVE FAVOURITE
      ========================= */

      if (isAlreadyFavourite) {

        const favouriteResponse =
          await fetch(
            `https://agri-orbit.onrender.com/api/favourite-crops?farmer_id=${farmerId}`
          );

        if (!favouriteResponse.ok) {

          throw new Error(
            "Failed to fetch favourite crops."
          );

        }

        const favouriteData =
          await favouriteResponse.json();

        const favouriteRecord =
          favouriteData.find(
            (item) =>
              Number(item.crop_id) ===
              Number(selectedCropData.id)
          );

        if (favouriteRecord) {

          const deleteResponse =
            await fetch(
              `https://agri-orbit.onrender.com/api/favourite-crops/${favouriteRecord.id}`,
              {
                method: "DELETE",
              }
            );

          if (!deleteResponse.ok) {

            throw new Error(
              "Failed to remove favourite."
            );

          }

        }

        setFavouriteCrops(
          (current) =>
            current.filter(
              (name) =>
                name !== cropName
            )
        );

      }

      /* =========================
         ADD FAVOURITE
      ========================= */

      else {

        const addResponse =
          await fetch(
            "https://agri-orbit.onrender.com/api/favourite-crops",
            {
              method: "POST",

              headers: {
                "Content-Type":
                  "application/json",
              },

              body: JSON.stringify({
                farmer_id: farmerId,
                crop_id:
                  selectedCropData.id,
              }),
            }
          );

        if (!addResponse.ok) {

          const errorData =
            await addResponse.json();

          throw new Error(
            errorData.error ||
              "Failed to add favourite."
          );

        }

        setFavouriteCrops(
          (current) => [
            ...current,
            cropName,
          ]
        );

      }

    } catch (error) {

      console.error(
        "Favourite crop error:",
        error
      );

      alert(
        error.message ||
        "Unable to update favourite crop."
      );

    }

  };


  /* =========================================================
     ADMIN LOGIN
  ========================================================= */

  if (showAdminLogin) {

    return (
      <AdminLogin

        onLogin={(user) => {

          console.log(
            "Admin login successful:",
            user
          );

          setShowAdminLogin(false);
          setShowAdminDashboard(true);

        }}

        onBack={() => {

          setShowAdminLogin(false);
          setShowLogin(true);

        }}

      />
    );

  }


  /* =========================================================
     MANAGE FARMERS
  ========================================================= */

  if (showManageFarmers) {

    return (
      <ManageFarmers

        onBackToAdminDashboard={() => {

          goToAdminDashboard();

        }}

        onAdminDashboard={
          goToAdminDashboard
        }

        onManageFarmers={
          goToManageFarmers
        }

        onManageBuyers={
          goToManageBuyers
        }

        onManageCrops={
          goToManageCrops
        }

        onManageMarkets={
          goToManageMarkets
        }

        onManagePrices={
          goToManagePrices
        }

        onManageOffers={
          goToManageOffers
        }

        onReports={
          goToReports
        }

        onProfile={() => {
          alert("Admin Profile page is not connected yet.");
        }}

        onSettings={() => {
          alert("Admin Settings page is not connected yet.");
        }}

        language={
          language
        }

        languages={
          languages
        }

        onLanguageChange={
          setLanguage
        }

        darkMode={
          darkMode
        }

        onToggleTheme={() =>
          setDarkMode(
            (previous) =>
              !previous
          )
        }

        onLogout={() => {

          closeAllAdminPages();

          setShowAdminLogin(true);

        }}

      />

    );

  }


  /* =========================================================
     MANAGE BUYERS
  ========================================================= */

  if (showManageBuyers) {

    return (
      <ManageBuyers

        onBackToAdminDashboard={() => {

          goToAdminDashboard();

        }}

        onAdminDashboard={
          goToAdminDashboard
        }

        onManageFarmers={
          goToManageFarmers
        }

        onManageBuyers={
          goToManageBuyers
        }

        onManageCrops={
          goToManageCrops
        }

        onManageMarkets={
          goToManageMarkets
        }

        onManagePrices={
          goToManagePrices
        }

        onManageOffers={
          goToManageOffers
        }

        onReports={
          goToReports
        }

        onProfile={() => {
          alert("Admin Profile page is not connected yet.");
        }}

        onSettings={() => {
          alert("Admin Settings page is not connected yet.");
        }}

        language={
          language
        }

        languages={
          languages
        }

        onLanguageChange={
          setLanguage
        }

        darkMode={
          darkMode
        }

        onToggleTheme={() =>
          setDarkMode(
            (previous) =>
              !previous
          )
        }

        onLogout={() => {

          closeAllAdminPages();

          setShowAdminLogin(true);

        }}

      />

    );

  }


  /* =========================================================
     MANAGE CROPS
  ========================================================= */

  if (showManageCrops) {

    return (
      <ManageCrops

        onBackToAdminDashboard={() => {

          goToAdminDashboard();

        }}

        onAdminDashboard={
          goToAdminDashboard
        }

        onManageFarmers={
          goToManageFarmers
        }

        onManageBuyers={
          goToManageBuyers
        }

        onManageCrops={
          goToManageCrops
        }

        onManageMarkets={
          goToManageMarkets
        }

        onManagePrices={
          goToManagePrices
        }

        onManageOffers={
          goToManageOffers
        }

        onReports={
          goToReports
        }

        onProfile={() => {
          alert("Admin Profile page is not connected yet.");
        }}

        onSettings={() => {
          alert("Admin Settings page is not connected yet.");
        }}

        onLogout={() => {

          closeAllAdminPages();

          setShowAdminLogin(true);

        }}

        language={
          language
        }

        languages={
          languages
        }

        onLanguageChange={
          setLanguage
        }

        darkMode={
          darkMode
        }

        onToggleTheme={() =>
          setDarkMode(
            (previous) =>
              !previous
          )
        }

      />

    );

  }


  /* =========================================================
     MANAGE MARKETS
  ========================================================= */

  if (showManageMarkets) {

    return (
      <ManageMarkets

        onBackToAdminDashboard={() => {

          goToAdminDashboard();

        }}

        onAdminDashboard={
          goToAdminDashboard
        }

        onManageFarmers={
          goToManageFarmers
        }

        onManageBuyers={
          goToManageBuyers
        }

        onManageCrops={
          goToManageCrops
        }

        onManageMarkets={
          goToManageMarkets
        }

        onManagePrices={
          goToManagePrices
        }

        onManageOffers={
          goToManageOffers
        }

        onReports={
          goToReports
        }

        onProfile={() => {
          alert("Admin Profile page is not connected yet.");
        }}

        onSettings={() => {
          alert("Admin Settings page is not connected yet.");
        }}

        onLogout={() => {

          closeAllAdminPages();

          setShowAdminLogin(true);

        }}

        language={
          language
        }

        languages={
          languages
        }

        onLanguageChange={
          setLanguage
        }

        darkMode={
          darkMode
        }

        onToggleTheme={() =>
          setDarkMode(
            (previous) =>
              !previous
          )
        }

      />

    );

  }


  /* =========================================================
     MANAGE PRICES
  ========================================================= */

  if (showManagePrices) {

    return (
      <ManagePrices

        onBackToAdminDashboard={() => {

          goToAdminDashboard();

        }}

        onAdminDashboard={
          goToAdminDashboard
        }

        onManageFarmers={
          goToManageFarmers
        }

        onManageBuyers={
          goToManageBuyers
        }

        onManageCrops={
          goToManageCrops
        }

        onManageMarkets={
          goToManageMarkets
        }

        onManagePrices={
          goToManagePrices
        }

        onManageOffers={
          goToManageOffers
        }

        onReports={
          goToReports
        }

        onProfile={() => {
          alert("Admin Profile page is not connected yet.");
        }}

        onSettings={() => {
          alert("Admin Settings page is not connected yet.");
        }}

        onLogout={() => {

          closeAllAdminPages();

          setShowAdminLogin(true);

        }}

        language={
          language
        }

        languages={
          languages
        }

        onLanguageChange={
          setLanguage
        }

        darkMode={
          darkMode
        }

        onToggleTheme={() =>
          setDarkMode(
            (previous) =>
              !previous
          )
        }

      />

    );

  }


  /* =========================================================
     MANAGE OFFERS
  ========================================================= */

  if (showManageOffers) {

    return (
      <ManageOffers

        onBackToAdminDashboard={() => {

          goToAdminDashboard();

        }}

        onAdminDashboard={
          goToAdminDashboard
        }

        onManageFarmers={
          goToManageFarmers
        }

        onManageBuyers={
          goToManageBuyers
        }

        onManageCrops={
          goToManageCrops
        }

        onManageMarkets={
          goToManageMarkets
        }

        onManagePrices={
          goToManagePrices
        }

        onManageOffers={
          goToManageOffers
        }

        onReports={
          goToReports
        }

        onProfile={() => {
          alert("Admin Profile page is not connected yet.");
        }}

        onSettings={() => {
          alert("Admin Settings page is not connected yet.");
        }}

        onLogout={() => {

          closeAllAdminPages();

          setShowAdminLogin(true);

        }}

        language={
          language
        }

        languages={
          languages
        }

        onLanguageChange={
          setLanguage
        }

        darkMode={
          darkMode
        }

        onToggleTheme={() =>
          setDarkMode(
            (previous) =>
              !previous
          )
        }

      />

    );

  }


  /* =========================================================
     REPORTS
  ========================================================= */

  if (showReports) {

    return (
      <Reports

        onBackToAdminDashboard={() => {

          goToAdminDashboard();

        }}

        onAdminDashboard={
          goToAdminDashboard
        }

        onManageFarmers={
          goToManageFarmers
        }

        onManageBuyers={
          goToManageBuyers
        }

        onManageCrops={
          goToManageCrops
        }

        onManageMarkets={
          goToManageMarkets
        }

        onManagePrices={
          goToManagePrices
        }

        onManageOffers={
          goToManageOffers
        }

        onReports={
          goToReports
        }

        onProfile={() => {
          alert("Admin Profile page is not connected yet.");
        }}

        onSettings={() => {
          alert("Admin Settings page is not connected yet.");
        }}

        onLogout={() => {

          closeAllAdminPages();

          setShowAdminLogin(true);

        }}

        language={
          language
        }

        languages={
          languages
        }

        onLanguageChange={
          setLanguage
        }

        darkMode={
          darkMode
        }

        onToggleTheme={() =>
          setDarkMode(
            (previous) =>
              !previous
          )
        }

      />

    );

  }


  /* =========================================================
     ADMIN DASHBOARD
  ========================================================= */

  if (showAdminDashboard) {

    return (
      <AdminDashboard

        onManageFarmers={
          goToManageFarmers
        }

        onManageBuyers={
          goToManageBuyers
        }

        onManageCrops={
          goToManageCrops
        }

        onManageMarkets={
          goToManageMarkets
        }

        onManagePrices={
          goToManagePrices
        }

        onManageOffers={
          goToManageOffers
        }

        onReports={
          goToReports
        }

        onProfile={() => {
          alert("Admin Profile page is not connected yet.");
        }}

        onSettings={() => {
          alert("Admin Settings page is not connected yet.");
        }}

        language={
          language
        }

        languages={
          languages
        }

        onLanguageChange={
          setLanguage
        }

        darkMode={
          darkMode
        }

        onToggleTheme={() =>
          setDarkMode(
            (previous) =>
              !previous
          )
        }

        onLogout={() => {

          closeAllAdminPages();

          setShowAdminLogin(true);

        }}

      />

    );

  }


  /* =========================================================
     FARMER DETAILS
  ========================================================= */

  if (showFarmerDetails) {

    return (
      <FarmerDetails

        farmer={selectedFarmer}

        onBackToReceivedOffers={() => {

          setShowFarmerDetails(false);
          setShowReceivedOffers(true);

        }}

      />
    );

  }


  /* =========================================================
     RECEIVED OFFERS
  ========================================================= */

  if (showReceivedOffers) {

    return (
      <ReceivedOffers

        buyer={currentBuyer}

        onFarmerDetails={(farmer) => {

          setSelectedFarmer(farmer);

          setShowReceivedOffers(false);
          setShowFarmerDetails(true);

        }}

        onBackToBuyerDashboard={() => {

          setShowReceivedOffers(false);
          setShowBuyerDashboard(true);

        }}

      />
    );

  }


  /* =========================================================
     MY REQUIREMENTS
  ========================================================= */

  if (showMyRequirements) {

    return (
      <MyRequirements

        buyer={currentBuyer}

        onBackToBuyerDashboard={() => {

          setShowMyRequirements(false);
          setShowBuyerDashboard(true);

        }}

      />
    );

  }


  /* =========================================================
     POST REQUIREMENT
  ========================================================= */

  if (showPostRequirement) {

    return (
      <PostRequirement

        onBackToBuyerDashboard={() => {

          setShowPostRequirement(false);
          setShowBuyerDashboard(true);

        }}

      />
    );

  }


  /* =========================================================
     BUYER DASHBOARD
  ========================================================= */

  if (showBuyerDashboard) {

    return (
      <BuyerDashboard

        onPostRequirement={() => {

          setShowBuyerDashboard(false);
          setShowPostRequirement(true);

        }}

        onMyRequirements={() => {

          setShowBuyerDashboard(false);
          setShowMyRequirements(true);

        }}

        onReceivedOffers={() => {

          setShowBuyerDashboard(false);
          setShowReceivedOffers(true);

        }}

        onBackToDashboard={() => {

          setCurrentBuyer(null);

          setShowBuyerDashboard(false);
          setShowBuyerLogin(true);

        }}

      />
    );

  }


  /* =========================================================
     BUYER SUCCESS
  ========================================================= */

  if (showBuyerSuccess) {

    return (
      <BuyerSuccess

        onContinue={() => {

          setShowBuyerSuccess(false);
          setShowBuyerLogin(true);

        }}

      />
    );

  }


  /* =========================================================
     BUYER OTP
  ========================================================= */

  if (showBuyerOtp) {

    return (
      <BuyerOTP

        onVerify={() => {

          setShowBuyerOtp(false);
          setShowBuyerSuccess(true);

        }}

        onBackToRegister={() => {

          setShowBuyerOtp(false);
          setShowBuyerRegister(true);

        }}

      />
    );

  }


  /* =========================================================
     BUYER REGISTRATION
  ========================================================= */

  if (showBuyerRegister) {

    return (
      <BuyerRegistration

        onRegisterSuccess={() => {

          setShowBuyerRegister(false);
          setShowBuyerOtp(true);

        }}

        onBackToLogin={() => {

          setShowBuyerRegister(false);
          setShowBuyerLogin(true);

        }}

      />
    );

  }


  /* =========================================================
     BUYER LOGIN
  ========================================================= */

  if (showBuyerLogin) {

    return (
      <BuyerLogin

        onLoginSuccess={(user) => {

          setCurrentBuyer(user);

          setShowBuyerLogin(false);
          setShowBuyerDashboard(true);

        }}

        onRegister={() => {

          setShowBuyerLogin(false);
          setShowBuyerRegister(true);

        }}

        onBack={() => {

          setShowBuyerLogin(false);
          setShowLogin(true);

        }}

      />
    );

  }


  /* =========================================================
     PROFILE
  ========================================================= */

  if (showProfile) {

    return (
      <Profile

        farmer={currentFarmer}

        onBackToDashboard={() => {

          setShowProfile(false);
          setShowDashboard(true);

        }}

      />
    );

  }


  /* =========================================================
     SETTINGS
  ========================================================= */

  if (showSettings) {

    return (
      <Settings

        onBackToDashboard={() => {

          setShowSettings(false);
          setShowDashboard(true);

        }}

      />
    );

  }


  /* =========================================================
     PRICE TREND
  ========================================================= */

  if (showPriceTrend) {

    return (
      <PriceTrend

        onBack={() => {

          setShowPriceTrend(false);
          setShowDashboard(true);

        }}

      />
    );

  }


  /* =========================================================
     CROP DETAILS
  ========================================================= */

  if (showCropDetails) {

    return (
      <CropDetails

        crop={selectedCrop}

        onBack={() => {

          setShowCropDetails(false);
          setShowCropSearch(true);

        }}

      />
    );

  }


  /* =========================================================
     CROP SEARCH
  ========================================================= */

  if (showCropSearch) {

    return (
      <CropSearch

        onBackToDashboard={() => {

          setShowCropSearch(false);
          setShowDashboard(true);

        }}

        onViewDetails={(crop) => {

          setSelectedCrop(crop);

          setShowCropSearch(false);
          setShowCropDetails(true);

        }}

        favouriteCrops={
          favouriteCrops
        }

        onToggleFavourite={
          handleToggleFavourite
        }

      />
    );

  }


  /* =========================================================
     CROP OFFERS
  ========================================================= */

  if (showCropOffers) {

    return (
      <CropOffers

        farmer={currentFarmer}

        onBackToDashboard={() => {

          setShowCropOffers(false);
          setShowDashboard(true);

        }}

      />
    );

  }


  /* =========================================================
     PRICE ALERTS
  ========================================================= */

  if (showPriceAlerts) {

    return (
      <PriceAlerts

        farmer={currentFarmer}

        onBackToDashboard={() => {

          setShowPriceAlerts(false);
          setShowDashboard(true);

        }}

      />
    );

  }


  /* =========================================================
     SEND CROP OFFER
  ========================================================= */

  if (showSendOffer) {

    return (
      <SendCropOffer

        buyer={selectedBuyer}

        farmer={currentFarmer}

        onBack={() => {

          setShowSendOffer(false);
          setShowBuyerDetails(true);

        }}

      />
    );

  }


  /* =========================================================
     BUYER REQUIREMENTS
  ========================================================= */

  if (showBuyerRequirements) {

    return (
      <BuyerRequirements

        onBackToDashboard={() => {

          setShowBuyerRequirements(false);
          setShowDashboard(true);

        }}

        onViewBuyer={(buyer) => {

          setSelectedBuyer(buyer);

          setShowBuyerRequirements(false);
          setShowBuyerDetails(true);

        }}

      />
    );

  }


  /* =========================================================
     BUYER DETAILS
  ========================================================= */

  if (showBuyerDetails) {

    return (
      <BuyerDetails

        buyer={selectedBuyer}

        onBackToBuyers={() => {

          setShowBuyerDetails(false);
          setSelectedBuyer(null);
          setShowBuyers(true);

        }}

        onSendCropOffer={(buyer) => {

          setSelectedBuyer(buyer);

          setShowBuyerDetails(false);
          setShowSendOffer(true);

        }}

      />
    );

  }


  /* =========================================================
     BUYERS
  ========================================================= */

  if (showBuyers) {

    return (
      <Buyers

        onBackToDashboard={() => {

          setShowBuyers(false);
          setSelectedBuyer(null);
          setShowDashboard(true);

        }}

        onViewBuyer={(buyer) => {

          setSelectedBuyer(buyer);

          setShowBuyers(false);
          setShowBuyerDetails(true);

        }}

        onBuyerDashboard={() => {
          setShowBuyers(false);
          setShowBuyerDetails(false);
          setShowDashboard(false);
          setShowBuyerDashboard(true);
        }}

        onBuyerRequirements={() => {
          setShowBuyers(false);
          setShowBuyerRequirements(true);
        }}

        onCropOffers={() => {
          setShowBuyers(false);
          setShowCropOffers(true);
        }}

        onProfile={() => {
          setShowBuyers(false);
          setShowProfile(true);
        }}

        onSettings={() => {
          setShowBuyers(false);
          setShowSettings(true);
        }}

        onLogout={() => {
          setCurrentFarmer(null);
          setShowBuyers(false);
          setShowLogin(true);
        }}

        language={
          language
        }

        languages={
          languages
        }

        onLanguageChange={
          setLanguage
        }

        darkMode={
          darkMode
        }

        onToggleTheme={() =>
          setDarkMode(
            (previous) =>
              !previous
          )
        }

      />

    );

  }


  /* =========================================================
     MARKET COMPARISON
  ========================================================= */

  if (showMarketComparison) {

    return (
      <MarketComparison

        onBackToDashboard={() => {

          setShowMarketComparison(false);
          setShowDashboard(true);

        }}

      />
    );

  }


  /* =========================================================
     BEST MARKET FINDER
  ========================================================= */

  if (showBestMarketFinder) {

    return (
      <BestMarketFinder

        onBackToDashboard={() => {

          setShowBestMarketFinder(false);
          setShowDashboard(true);

        }}

      />
    );

  }


  /* =========================================================
     MARKET DETAILS
  ========================================================= */

  if (showMarketDetails) {

    return (
      <MarketDetails

        market={selectedMarket}

        onBack={() => {

          setShowMarketDetails(false);

          if (
            selectedMarket?.fromNearby
          ) {

            setShowNearbyMarkets(true);

          } else {

            setShowBestMarket(true);

          }

          setSelectedMarket(null);

        }}

      />
    );

  }


  /* =========================================================
     BEST MARKET
  ========================================================= */

  if (showBestMarket) {

    return (
      <BestMarket

        onBackToDashboard={() => {

          setShowBestMarket(false);
          setShowDashboard(true);

        }}

        onViewMarket={(market) => {

          setSelectedMarket({

            ...market,

            fromBestMarket: true,
            fromNearby: false,

          });

          setShowBestMarket(false);
          setShowMarketDetails(true);

        }}

      />
    );

  }


  /* =========================================================
     NEARBY MARKETS
  ========================================================= */

  if (showNearbyMarkets) {

    return (
      <NearbyMarkets

        onBackToDashboard={() => {

          setShowNearbyMarkets(false);
          setShowDashboard(true);

        }}

        onViewMarket={(market) => {

          setSelectedMarket({

            ...market,

            fromNearby: true,
            fromBestMarket: false,

          });

          setShowNearbyMarkets(false);
          setShowMarketDetails(true);

        }}

      />
    );

  }


  /* =========================================================
     FAVOURITE CROPS
  ========================================================= */

  if (showFavouriteCrops) {

    return (
      <FavouriteCrops

        farmer={currentFarmer}

        onBackToDashboard={() => {

          setShowFavouriteCrops(false);
          setShowDashboard(true);

        }}

        favouriteCrops={
          favouriteCrops
        }

        onToggleFavourite={
          handleToggleFavourite
        }

      />
    );

  }


  /* =========================================================
     CROP PRICES
  ========================================================= */

  if (showCropPrices) {

    return (
      <CropPrices

        onBackToDashboard={() => {

          setShowCropPrices(false);
          setShowDashboard(true);

        }}

      />
    );

  }


  /* =========================================================
     FARMER DASHBOARD
  ========================================================= */

  if (showDashboard) {

    return (
      <Dashboard

        currentFarmer={
          currentFarmer
        }

        /* =====================
           DARK MODE
        ===================== */

        darkMode={
          darkMode
        }

        onToggleTheme={() =>
          setDarkMode(
            (previous) =>
              !previous
          )
        }

        /* =====================
           LANGUAGE
        ===================== */

        language={
          language
        }

        languages={
          languages
        }

        onLanguageChange={
          setLanguage
        }


        /* =====================
           PROFILE
        ===================== */

        onProfile={() => {

          setShowDashboard(false);
          setShowProfile(true);

        }}


        /* =====================
           SETTINGS
        ===================== */

        onSettings={() => {

          setShowDashboard(false);
          setShowSettings(true);

        }}


        /* =====================
           CROP PRICES
        ===================== */

        onViewPrices={() => {

          setShowDashboard(false);
          setShowCropPrices(true);

        }}


        /* =====================
           FAVOURITES
        ===================== */

        onViewFavourites={() => {

          setShowDashboard(false);
          setShowFavouriteCrops(true);

        }}


        /* =====================
           NEARBY MARKETS
        ===================== */

        onNearbyMarkets={() => {

          setShowDashboard(false);
          setShowNearbyMarkets(true);

        }}


        /* =====================
           BEST MARKET
        ===================== */

        onBestMarket={() => {

          setShowDashboard(false);
          setShowBestMarket(true);

        }}


        /* =====================
           MARKET COMPARISON
        ===================== */

        onMarketComparison={() => {

          setShowDashboard(false);
          setShowMarketComparison(true);

        }}


        /* =====================
           BEST MARKET FINDER
        ===================== */

        onBestMarketFinder={() => {

          setShowDashboard(false);
          setShowBestMarketFinder(true);

        }}


        /* =====================
           BUYERS
        ===================== */

        onBuyers={() => {

          setShowDashboard(false);
          setShowBuyers(true);

        }}


        /* =====================
           BUYER REQUIREMENTS
        ===================== */

        onBuyerRequirements={() => {

          setShowDashboard(false);
          setShowBuyerRequirements(true);

        }}


        /* =====================
           PRICE ALERTS
        ===================== */

        onPriceAlerts={() => {

          setShowDashboard(false);
          setShowPriceAlerts(true);

        }}


        /* =====================
           CROP OFFERS
        ===================== */

        onCropOffers={() => {

          setShowDashboard(false);
          setShowCropOffers(true);

        }}


        /* =====================
           CROP SEARCH
        ===================== */

        onCropSearch={() => {

          setShowDashboard(false);
          setShowCropSearch(true);

        }}


        /* =====================
           PRICE TREND
        ===================== */

        onPriceTrend={() => {

          setShowDashboard(false);
          setShowPriceTrend(true);

        }}


        /* =====================
           LOGOUT
        ===================== */

        onLogout={() => {

          setCurrentFarmer(null);

          setShowDashboard(false);
          setShowLogin(true);

        }}

      />

    );

  }


  /* =========================================================
     FARMER SUCCESS
  ========================================================= */

  if (showSuccess) {

    return (
      <FarmerSuccess

        onContinue={() => {

          setShowSuccess(false);
          setShowLogin(true);

        }}

      />
    );

  }


  /* =========================================================
     FARMER OTP
  ========================================================= */

  if (showOtp) {

    return (
      <FarmerOTP

        onVerify={() => {

          setShowOtp(false);
          setShowSuccess(true);

        }}

        onBackToRegister={() => {

          setShowOtp(false);
          setShowRegister(true);

        }}

      />
    );

  }


  /* =========================================================
     FORGOT OTP
  ========================================================= */

  if (showForgotOtp) {

    return (
      <ForgotOTP

        onVerify={() => {

          setShowForgotOtp(false);
          setShowLogin(true);

        }}

        onBackToForgotPassword={() => {

          setShowForgotOtp(false);
          setShowForgot(true);

        }}

      />
    );

  }


  /* =========================================================
     FORGOT PASSWORD
  ========================================================= */

  if (showForgot) {

    return (
      <ForgotPassword

        onSendOtp={() => {

          setShowForgot(false);
          setShowForgotOtp(true);

        }}

        onBackToLogin={() => {

          setShowForgot(false);
          setShowLogin(true);

        }}

      />
    );

  }


  /* =========================================================
     FARMER REGISTRATION
  ========================================================= */

  if (showRegister) {

    return (
      <FarmerRegistration

        onRegister={() => {

          setShowRegister(false);
          setShowOtp(true);

        }}

        onBackToLogin={() => {

          setShowRegister(false);
          setShowLogin(true);

        }}

      />
    );

  }


  /* =========================================================
     FARMER LOGIN
  ========================================================= */

  if (showLogin) {

    return (
      <FarmerLogin

        onLoginSuccess={(user) => {

          setCurrentFarmer(user);

          setShowLogin(false);
          setShowDashboard(true);

        }}

        onRegister={() => {

          setShowLogin(false);
          setShowRegister(true);

        }}

        onForgotPassword={() => {

          setShowLogin(false);
          setShowForgot(true);

        }}

        onBuyerLogin={() => {

          setShowLogin(false);
          setShowBuyerLogin(true);

        }}

        onAdminLogin={() => {

          setShowLogin(false);
          setShowAdminLogin(true);

        }}

      />

    );

  }


  /* =========================================================
     SPLASH SCREEN
  ========================================================= */

  return (
    <div className="splash-screen">

      <div className="overlay"></div>

      <div className="splash-content">

        <div className="logo">
          🌱
        </div>

        <h1>
          AgriOrbit
        </h1>

        <div className="market-title">

          <span></span>

          MARKET

          <span></span>

        </div>

        <p className="tagline">
          From Farm to Better Market
        </p>

        <div className="loading-bar">

          <div className="loading-progress"></div>

        </div>

        <p className="connecting">
          Connecting Farmers • Markets • Buyers
        </p>

      </div>

    </div>
  );

}

export default App;