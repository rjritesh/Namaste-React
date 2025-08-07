import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-xl shadow-xl text-center max-w-md w-full">
        <div className="text-5xl mb-4">🍽️</div>
        <h1 className="text-3xl font-bold text-orange-500 mb-2">
          404 - Page Not Found
        </h1>
        <p className="text-gray-600 mb-6">
          Oops! We couldn't find the page you're looking for.
          Maybe you were trying to order something tasty?
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-2 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
