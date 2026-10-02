import { useState } from "react";

function FarmerLogin({
  onLoginSuccess,
  onRegister,
  onForgotPassword,
  onBuyerLogin,
  onAdminLogin,
}) {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);

  const handleFarmerLogin = async () => {
    setLoginError("");

    if (!loginEmail.trim() || !loginPassword.trim()) {
      setLoginError("Please enter your email and password.");
      return;
    }

    setLoginLoading(true);

    try {
      const response = await fetch(
        "https://agri-orbit.onrender.com/api/login",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            email: loginEmail.trim(),
            password: loginPassword,
            role: "farmer",
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Invalid email or password."
        );
      }

      console.log("Farmer login successful:", data);

      setLoginEmail("");
      setLoginPassword("");
      setLoginError("");
      setLoginLoading(false);

      onLoginSuccess(data.user);

    } catch (error) {
      console.error("Farmer login error:", error);

      setLoginError(
        error.message ||
        "Unable to login. Please try again."
      );

      setLoginLoading(false);
    }
  };

  return (
    <div className="login-page">

      <div className="login-box">

        <div className="login-logo">
          🌱
        </div>

        <h1>Welcome to AgriOrbit</h1>

        <p className="login-subtitle">
          Connect with better markets
        </p>

        <input
          type="email"
          placeholder="Enter your email"
          value={loginEmail}
          onChange={(e) => {
            setLoginEmail(e.target.value);
            setLoginError("");
          }}
        />

        <input
          type="password"
          placeholder="Enter your password"
          value={loginPassword}
          onChange={(e) => {
            setLoginPassword(e.target.value);
            setLoginError("");
          }}
        />

        {loginError && (
          <p
            style={{
              color: "#dc3545",
              fontSize: "13px",
              margin: "5px 0 10px",
              textAlign: "left",
            }}
          >
            {loginError}
          </p>
        )}

        <p
          className="forgot-password"
          onClick={onForgotPassword}
        >
          Forgot Password?
        </p>

        <button
          type="button"
          onClick={handleFarmerLogin}
          disabled={loginLoading}
        >
          {loginLoading
            ? "Logging in..."
            : "Login"}
        </button>

        <p className="register-text">

          New farmer?{" "}

          <span onClick={onRegister}>
            Register here
          </span>

        </p>

        <div className="buyer-login-divider">
          <span>OR</span>
        </div>

        <button
          type="button"
          className="buyer-login-button"
          onClick={onBuyerLogin}
        >
          🏪 Login as Buyer
        </button>

        <button
          type="button"
          className="buyer-login-button"
          onClick={onAdminLogin}
        >
          🛡️ Login as Admin
        </button>

      </div>

    </div>
  );
}

export default FarmerLogin;