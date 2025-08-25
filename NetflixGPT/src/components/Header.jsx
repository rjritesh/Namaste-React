import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";
import { Logo } from "../utils/constants"

const Header = () => {
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
    <header className="fixed top-0 left-0 w-full bg-gradient-to-b from-black z-20">
      <div className="flex items-center justify-between px-4 sm:px-8 py-3">
        {/* Logo */}
        <img
          className="w-24 sm:w-32 md:w-40 object-contain"
          src={Logo}
          alt="logo"
        />

        {/* Logout Button */}
        {user && (
          <button
            onClick={handleSignout}
            className="bg-red-600 hover:bg-red-700 text-white text-sm sm:text-base font-medium px-3 py-1.5 rounded-md shadow-md transition-all duration-200 cursor-pointer"
          >
            Log out
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
