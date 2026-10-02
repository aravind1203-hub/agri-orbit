import { useState } from "react";

function AdminLogin({
  onLogin,
  onBack,
}) {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);

  const handleAdminLogin = async () => {
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
            role: "admin",
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Invalid email or password."
        );
      }

      console.log("Admin login successful:", data);

      setLoginEmail("");
      setLoginPassword("");
      setLoginError("");
      setLoginLoading(false);

      onLogin(data.user);

    } catch (error) {
      console.error("Admin login error:", error);

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
          🛡️
        </div>

        <h1>Admin Login</h1>

        <p className="login-subtitle">
          Login to manage AgriOrbit Market
        </p>

        <input
          type="email"
          placeholder="Enter admin email"
          value={loginEmail}
          onChange={(e) => {
            setLoginEmail(e.target.value);
            setLoginError("");
          }}
        />

        <input
          type="password"
          placeholder="Enter admin password"
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

        <button
          type="button"
          onClick={handleAdminLogin}
          disabled={loginLoading}
        >
          {loginLoading
            ? "Logging in..."
            : "Login as Admin"}
        </button>

        <p className="register-text">
          <span onClick={onBack}>
            ← Back to Login
          </span>
        </p>

      </div>

    </div>
  );
}

export default AdminLogin;
