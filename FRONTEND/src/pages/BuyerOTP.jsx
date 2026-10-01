function BuyerOTP({
  onVerify,
  onBackToRegister,
}) {
  return (
    <div className="login-page">

      <div className="login-box">

        <div className="login-logo">
          🔐
        </div>

        <h1>Verify OTP</h1>

        <p className="login-subtitle">
          Enter the OTP sent to your email
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
          <span onClick={onBackToRegister}>
            ← Back to Registration
          </span>
        </p>

      </div>

    </div>
  );
}

export default BuyerOTP;
