function BuyerSuccess({
  onContinue,
}) {
  return (
    <div className="login-page">

      <div className="login-box">

        <div className="login-logo">
          ✅
        </div>

        <h1>Registration Successful</h1>

        <p className="login-subtitle">
          Your buyer account has been created successfully.
        </p>

        <p className="register-text">
          You can now continue to your AgriOrbit buyer dashboard.
        </p>

        <button
          type="button"
          onClick={onContinue}
        >
          Continue to Dashboard
        </button>

      </div>

    </div>
  );
}

export default BuyerSuccess;
