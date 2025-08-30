import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";
// import { Logo } from "../utils/constants"
import Logo from "/logo2.png"
import { ChevronDown, LogOut, Settings, User, UserRoundPen } from "lucide-react";

const Header = () => {

  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const user = useSelector((store) => store.user);

  // Logout function
  const handleSignout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {

      })
      .catch(() => {
        navigate("/error");
      });
  };

  useEffect(() => {
    //It’s a Firebase function(event listener) that keeps watching your app’s authentication state everytime the page loads.
    const unsubscibe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }))
        navigate("/browse")

      } else {
        dispatch(removeUser())
        navigate("/")
      }
    });

    return () => unsubscibe();
  }, [])

  return (
  <header className="fixed top-0 left-0 w-full bg-gradient-to-b from-black z-20 transform -translate-y-10">
  <div className="flex items-center justify-between px-4 sm:px-8">
    {/* Logo */}
    <img
      className="w-30 sm:w-38 md:w-46 object-contain"
      src={Logo}
      alt="logo"
    />

    {/* Logout Button */}
    {user && (
      <div className="flex items-center gap-4 cursor-pointer">
        <div className="flex items-center " onClick={() => setIsPopupOpen(!isPopupOpen)}>
          <span
            className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center border-2 border-white relative cursor-pointer hover:bg-gray-600"
          >
            <User className="w-9 h-9 text-white" />

            {isPopupOpen && (
              <div className="absolute top-14 right-0 w-32 bg-gray-700 text-white rounded-md shadow-lg p-3 flex flex-col z-50">
                <button className="flex justify-center hover:text-red-500 cursor-pointer gap-2 items-center text-md my-2">
                  <UserRoundPen /> Profile
                </button>
                <button className="flex justify-center hover:text-red-500 cursor-pointer gap-2 items-center text-md my-2">
                  <Settings className="w-6" /> Settings
                </button>
                <button
                  onClick={handleSignout}
                  className="py-2 px-3 rounded-md hover:text-red-500 flex justify-center gap-2 items-center text-md cursor-pointer"
                >
                  <LogOut className="w-6" />
                  Logout
                </button>
              </div>
            )}
          </span>
          <ChevronDown className="text-white font-bold font-lg w-10" />
        </div>
      </div>
    )}
  </div>
</header>

  );
};

export default Header;
