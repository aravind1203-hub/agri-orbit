function ForgotOTP({
  onVerify,
  onBackToForgotPassword,
}) {
  return (
    <div className="login-page">

      <div className="login-box">

        <div className="login-logo">
          🔐
        </div>

        <h1>Verify OTP</h1>

        <p className="login-subtitle">
          Enter the OTP sent to your registered email
        </p>

        <input
          type="text"
          placeholder="Enter OTP"
          maxLength="6"
        />

        <button
          type="button"
          onClick={onVerify}
        >
          Verify OTP
        </button>

        <p className="register-text">
          <span onClick={onBackToForgotPassword}>
            ← Back to Forgot Password
          </span>
        </p>

      </div>

    </div>
  );
}

export default ForgotOTP;
