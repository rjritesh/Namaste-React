import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const user = useSelector((store) => store.user);

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
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }))
        navigate("/browse")

      } else {
        dispatch(removeUser())
        navigate("/")
      }
    });
  }, [])

  return (
    <header className="fixed top-0 left-0 w-full bg-gradient-to-b from-black z-20">
      <div className="flex items-center justify-between px-4 sm:px-8 py-3">
        {/* Logo */}
        <img
          className="w-24 sm:w-32 md:w-40 object-contain"
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-24/consent/87b6a5c0-0104-4e96-a291-092c11350111/019808e2-d1e7-7c0f-ad43-c485b7d9a221/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
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
