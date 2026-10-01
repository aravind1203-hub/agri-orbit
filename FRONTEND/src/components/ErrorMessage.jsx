function ErrorMessage({ message = "Something went wrong. Please try again." }) {
  return (
    <div className="error-message-container">
      <div className="error-message-icon">⚠️</div>

      <h3>Something went wrong</h3>

      <p>{message}</p>

      <button
        type="button"
        className="error-retry-button"
        onClick={() => window.location.reload()}
      >
        Try Again
      </button>
    </div>
  );
}

export default ErrorMessage;