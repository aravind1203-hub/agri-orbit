import { useState } from "react";

function BuyerRegistration({
  onRegisterSuccess,
  onBackToLogin,
}) {
  const [buyerName, setBuyerName] = useState("");
  const [buyerContactPerson, setBuyerContactPerson] = useState("");
  const [buyerMobile, setBuyerMobile] = useState("");
  const [buyerEmail, setBuyerEmail] = useState("");
  const [buyerPassword, setBuyerPassword] = useState("");
  const [buyerConfirmPassword, setBuyerConfirmPassword] = useState("");
  const [buyerDistrict, setBuyerDistrict] = useState("");
  const [buyerLocation, setBuyerLocation] = useState("");
  const [buyerCrops, setBuyerCrops] = useState("");
  const [buyerRequirement, setBuyerRequirement] = useState("");

  const [buyerRegisterError, setBuyerRegisterError] = useState("");
  const [buyerRegisterLoading, setBuyerRegisterLoading] = useState(false);

  const handleRegister = async () => {
    setBuyerRegisterError("");

    if (
      !buyerName.trim() ||
      !buyerMobile.trim() ||
      !buyerEmail.trim() ||
      !buyerPassword ||
      !buyerConfirmPassword ||
      !buyerDistrict.trim() ||
      !buyerLocation.trim() ||
      !buyerCrops.trim()
    ) {
      setBuyerRegisterError(
        "Please fill all required fields."
      );
      return;
    }

    if (buyerPassword !== buyerConfirmPassword) {
      setBuyerRegisterError(
        "Passwords do not match."
      );
      return;
    }

    setBuyerRegisterLoading(true);

    try {
      const response = await fetch(
        "https://agri-orbit.onrender.com/api/register/buyer",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: buyerName.trim(),
            contactPerson: buyerContactPerson.trim(),
            mobile: buyerMobile.trim(),
            email: buyerEmail.trim(),
            password: buyerPassword,
            district: buyerDistrict.trim(),
            location: buyerLocation.trim(),
            interestedCrops: buyerCrops.trim(),
            requirement: buyerRequirement.trim(),
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Buyer registration failed."
        );
      }

      console.log(
        "Buyer registration successful:",
        data
      );

      setBuyerRegisterLoading(false);

      onRegisterSuccess(data);
    } catch (error) {
      console.error(
        "Buyer registration error:",
        error
      );

      setBuyerRegisterError(
        error.message ||
        "Unable to register. Please try again."
      );

      setBuyerRegisterLoading(false);
    }
  };

  return (
    <div className="login-page">

      <div className="login-box">

        <div className="login-logo">
          🏪
        </div>

        <h1>Buyer Registration</h1>

        <p className="login-subtitle">
          Create your AgriOrbit buyer account
        </p>

        <input
          type="text"
          placeholder="Business Name"
          value={buyerName}
          onChange={(e) => {
            setBuyerName(e.target.value);
            setBuyerRegisterError("");
          }}
        />

        <input
          type="text"
          placeholder="Contact Person"
          value={buyerContactPerson}
          onChange={(e) => {
            setBuyerContactPerson(e.target.value);
            setBuyerRegisterError("");
          }}
        />

        <input
          type="tel"
          placeholder="Mobile Number"
          value={buyerMobile}
          onChange={(e) => {
            setBuyerMobile(e.target.value);
            setBuyerRegisterError("");
          }}
        />

        <input
          type="email"
          placeholder="Email Address"
          value={buyerEmail}
          onChange={(e) => {
            setBuyerEmail(e.target.value);
            setBuyerRegisterError("");
          }}
        />

        <input
          type="password"
          placeholder="Password"
          value={buyerPassword}
          onChange={(e) => {
            setBuyerPassword(e.target.value);
            setBuyerRegisterError("");
          }}
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={buyerConfirmPassword}
          onChange={(e) => {
            setBuyerConfirmPassword(e.target.value);
            setBuyerRegisterError("");
          }}
        />

        <input
          type="text"
          placeholder="District"
          value={buyerDistrict}
          onChange={(e) => {
            setBuyerDistrict(e.target.value);
            setBuyerRegisterError("");
          }}
        />

        <input
          type="text"
          placeholder="Location"
          value={buyerLocation}
          onChange={(e) => {
            setBuyerLocation(e.target.value);
            setBuyerRegisterError("");
          }}
        />

        <input
          type="text"
          placeholder="Interested Crops"
          value={buyerCrops}
          onChange={(e) => {
            setBuyerCrops(e.target.value);
            setBuyerRegisterError("");
          }}
        />

        <input
          type="text"
          placeholder="Crop Requirement"
          value={buyerRequirement}
          onChange={(e) => {
            setBuyerRequirement(e.target.value);
            setBuyerRegisterError("");
          }}
        />

        {buyerRegisterError && (
          <p
            style={{
              color: "#dc3545",
              fontSize: "13px",
              margin: "5px 0 10px",
              textAlign: "left",
            }}
          >
            {buyerRegisterError}
          </p>
        )}

        <button
          type="button"
          onClick={handleRegister}
          disabled={buyerRegisterLoading}
        >
          {buyerRegisterLoading
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

export default BuyerRegistration;
