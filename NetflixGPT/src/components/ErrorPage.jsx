import { useNavigate } from "react-router-dom";
import { AlertCircle } from "lucide-react";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white px-4">
      <div className="text-center p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-gray-900 to-black shadow-lg max-w-sm sm:max-w-md w-full">
        <AlertCircle className="w-16 h-16 text-yellow-500 mx-auto mb-4 sm:mb-6" />
        <h1 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">
          Oops! Something went wrong
        </h1>
        <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">
          We couldn’t complete your request. Please try again later.
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-yellow-600 hover:bg-yellow-700 transition text-white px-4 py-2 sm:px-6 sm:py-3 rounded-md font-medium cursor-pointer text-sm sm:text-base w-full sm:w-auto"
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
