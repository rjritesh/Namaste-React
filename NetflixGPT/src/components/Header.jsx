import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";
import { toogleGptSearchView } from "../utils/gptSlice";
import Logo from "/logo.png";
import { ChevronDown, LogOut, Settings, User, UserRoundPen } from "lucide-react";

const Header = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => { })
      .catch(() => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <header className="fixed top-0 left-0 py-2 sm:py-4 w-full bg-gradient-to-b from-black z-20">
      <div className="flex items-center justify-between px-3 sm:px-6 md:px-10 py-3">
        {/* Logo */}
        <img
          className="w-24 sm:w-28 md:w-36 object-contain"
          src={Logo}
          alt="logo"
        />

        {/* Right Section */}
        {user && (
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Toggle Button */}
            <button
              className="bg-zinc-600 hover:bg-zinc-700 text-white px-3 sm:px-5 py-2 rounded-md font-semibold text-sm sm:text-base cursor-pointer"
              onClick={() => {
                dispatch(toogleGptSearchView());
              }}
            >
              {showGptSearch ? "Home" : "CineoAI"}
            </button>

            {/* Profile Dropdown */}
            <div
              className="flex items-center relative"
              onClick={() => setIsPopupOpen(!isPopupOpen)}
            >
              <span className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-gray-700 flex items-center justify-center border border-white hover:bg-gray-600">
                <User className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
              </span>
              <ChevronDown className="text-white w-6 sm:w-7 ml-1" />

              {isPopupOpen && (
                <div className="absolute top-12 right-0 w-36 bg-gray-800 text-white rounded-md shadow-lg p-3 flex flex-col z-50">
                  <button className="flex justify-start hover:text-red-500 gap-2 items-center text-sm sm:text-base py-1">
                    <UserRoundPen /> Profile
                  </button>
                  <button className="flex justify-start hover:text-red-500 gap-2 items-center text-sm sm:text-base py-1">
                    <Settings className="w-5" /> Settings
                  </button>
                  <button
                    onClick={handleSignout}
                    className="flex justify-start hover:text-red-500 gap-2 items-center text-sm sm:text-base py-1"
                  >
                    <LogOut className="w-5" /> Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
