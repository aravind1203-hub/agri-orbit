import { useState } from "react";

function ForgotPassword({
  onSendOtp,
  onBackToLogin,
}) {
  const [email, setEmail] = useState("");

  const handleSendOtp = () => {
    if (!email.trim()) {
      alert("Please enter your email address.");
      return;
    }

    onSendOtp(email);
  };

  return (
    <div className="login-page">

      <div className="login-box">

        <div className="login-logo">
          🔑
        </div>

        <h1>Forgot Password?</h1>

        <p className="login-subtitle">
          Enter your registered email to reset your password
        </p>

        <input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          type="button"
          onClick={handleSendOtp}
        >
          Send OTP
        </button>

        <p className="register-text">
          <span onClick={onBackToLogin}>
            ← Back to Login
          </span>
        </p>

      </div>

    </div>
  );
}

export default ForgotPassword;
