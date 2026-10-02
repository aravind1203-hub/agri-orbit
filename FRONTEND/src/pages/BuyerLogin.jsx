import { useState } from "react";

function BuyerLogin({
  onLoginSuccess,
  onBack,
  onRegister,
}) {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);

  const handleBuyerLogin = async () => {
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
            role: "buyer",
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Invalid email or password."
        );
      }

      console.log("Buyer login successful:", data);

      setLoginEmail("");
      setLoginPassword("");
      setLoginError("");
      setLoginLoading(false);

      onLoginSuccess(data.user);

    } catch (error) {
      console.error("Buyer login error:", error);

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
          🏪
        </div>

        <h1>Buyer Login</h1>

        <p className="login-subtitle">
          Login to find farmers and crops
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

        <p className="forgot-password">
          Forgot Password?
        </p>

        <button
          type="button"
          onClick={handleBuyerLogin}
          disabled={loginLoading}
        >
          {loginLoading
            ? "Logging in..."
            : "Login as Buyer"}
        </button>

        <p className="register-text">
          New buyer?{" "}

          <span onClick={onRegister}>
            Register here
          </span>
        </p>

        <p className="register-text">
          <span onClick={onBack}>
            ← Back to Farmer Login
          </span>
        </p>

      </div>

    </div>
  );
}

export default BuyerLogin;
