import { useState } from "react";

function FarmerRegistration({
  onRegister,
  onBackToLogin,
}) {
  const [farmerName, setFarmerName] = useState("");
  const [farmerMobile, setFarmerMobile] = useState("");
  const [farmerEmail, setFarmerEmail] = useState("");
  const [farmerPassword, setFarmerPassword] = useState("");
  const [farmerConfirmPassword, setFarmerConfirmPassword] =
    useState("");
  const [farmerDistrict, setFarmerDistrict] = useState("");
  const [farmerVillage, setFarmerVillage] = useState("");
  const [farmerLocation, setFarmerLocation] = useState("");
  const [farmerCrops, setFarmerCrops] = useState("");

  const [registerError, setRegisterError] = useState("");
  const [registerLoading, setRegisterLoading] = useState(false);

  const handleRegister = async () => {
    setRegisterError("");

    if (
      !farmerName.trim() ||
      !farmerMobile.trim() ||
      !farmerEmail.trim() ||
      !farmerPassword ||
      !farmerConfirmPassword ||
      !farmerDistrict.trim() ||
      !farmerVillage.trim() ||
      !farmerLocation.trim() ||
      !farmerCrops.trim()
    ) {
      setRegisterError(
        "Please fill all required fields."
      );
      return;
    }

    if (
      farmerPassword !== farmerConfirmPassword
    ) {
      setRegisterError(
        "Passwords do not match."
      );
      return;
    }

    setRegisterLoading(true);

    try {
      const response = await fetch(
        "https://agri-orbit.onrender.com/api/register/farmer",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: farmerName.trim(),
            mobile: farmerMobile.trim(),
            email: farmerEmail.trim(),
            password: farmerPassword,
            district: farmerDistrict.trim(),
            village: farmerVillage.trim(),
            location: farmerLocation.trim(),
            crops: farmerCrops.trim(),
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error ||
          "Farmer registration failed."
        );
      }

      console.log(
        "Farmer registration successful:",
        data
      );

      setRegisterLoading(false);

      onRegister(data);
    } catch (error) {
      console.error(
        "Farmer registration error:",
        error
      );

      setRegisterError(
        error.message ||
        "Unable to register. Please try again."
      );

      setRegisterLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">

        <div className="login-logo">
          🌱
        </div>

        <h1>Farmer Registration</h1>

        <p className="login-subtitle">
          Create your AgriOrbit account
        </p>

        <input
          type="text"
          placeholder="Full Name"
          value={farmerName}
          onChange={(e) => {
            setFarmerName(e.target.value);
            setRegisterError("");
          }}
        />

        <input
          type="tel"
          placeholder="Mobile Number"
          value={farmerMobile}
          onChange={(e) => {
            setFarmerMobile(e.target.value);
            setRegisterError("");
          }}
        />

        <input
          type="email"
          placeholder="Email Address"
          value={farmerEmail}
          onChange={(e) => {
            setFarmerEmail(e.target.value);
            setRegisterError("");
          }}
        />

        <input
          type="password"
          placeholder="Password"
          value={farmerPassword}
          onChange={(e) => {
            setFarmerPassword(e.target.value);
            setRegisterError("");
          }}
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={farmerConfirmPassword}
          onChange={(e) => {
            setFarmerConfirmPassword(
              e.target.value
            );
            setRegisterError("");
          }}
        />

        <input
          type="text"
          placeholder="District"
          value={farmerDistrict}
          onChange={(e) => {
            setFarmerDistrict(e.target.value);
            setRegisterError("");
          }}
        />

        <input
          type="text"
          placeholder="Village"
          value={farmerVillage}
          onChange={(e) => {
            setFarmerVillage(e.target.value);
            setRegisterError("");
          }}
        />

        <input
          type="text"
          placeholder="Location"
          value={farmerLocation}
          onChange={(e) => {
            setFarmerLocation(e.target.value);
            setRegisterError("");
          }}
        />

        <input
          type="text"
          placeholder="Crops Grown"
          value={farmerCrops}
          onChange={(e) => {
            setFarmerCrops(e.target.value);
            setRegisterError("");
          }}
        />

        {registerError && (
          <p
            style={{
              color: "#dc3545",
              fontSize: "13px",
              margin: "5px 0 10px",
              textAlign: "left",
            }}
          >
            {registerError}
          </p>
        )}

        <button
          type="button"
          onClick={handleRegister}
          disabled={registerLoading}
        >
          {registerLoading
            ? "Registering..."
            : "Register"}
        </button>

        <p className="register-text">
          Already have an account?{" "}
          <span onClick={onBackToLogin}>
            Login
          </span>
        </p>

      </div>
    </div>
  );
}

export default FarmerRegistration;
