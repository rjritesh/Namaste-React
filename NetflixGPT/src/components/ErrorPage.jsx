import { useNavigate } from "react-router-dom";
import { AlertCircle } from "lucide-react";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="text-center p-6 rounded-2xl bg-gradient-to-b from-gray-900 to-black shadow-lg max-w-md">
        <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
        <h1 className="text-2xl font-bold mb-2">Oops! Something went wrong</h1>
        <p className="text-gray-400 mb-6">
          We couldn’t complete your request. Please try again later.
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-red-600 hover:bg-red-700 transition text-white px-4 py-2 rounded-md font-medium cursor-pointer"
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
