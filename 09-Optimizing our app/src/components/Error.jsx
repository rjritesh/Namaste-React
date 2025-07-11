import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error-container">
      <div className="error-box">
        <div className="error-icon">🍽️</div>
        <h1 className="error-title">404 - Page Not Found</h1>
        <p className="error-message">
          Oops! We couldn't find the page you're looking for.
          Maybe you were trying to order something tasty?
        </p>
        <Link to="/" className="error-button">Back to Home</Link>
      </div>
    </div>
  );
};

export default Error;
