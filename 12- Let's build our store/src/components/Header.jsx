import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from 'lucide-react';
import logo from "../assets/logo.jpeg";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  useEffect(() => { }, [btnNameReact]);

  const { loggedInUser } = useContext(UserContext)

  const cartItems = useSelector((store) => store.cart.items)

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* LOGO */}
        <div className="flex items-center">
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className="w-24 sm:w-28 md:w-32 lg:w-36 h-auto object-contain"
            />
          </Link>
        </div>

        {/* NAV LINKS */}
        <nav className="flex items-center gap-15 sm:gap-7 text-2xl sm:text-base font-semibold text-gray-700">

          <Link to="/" className="hover:text-orange-500 transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-orange-500 transition">
            About
          </Link>
          <Link to="/services" className="hover:text-orange-500 transition">
            Help
          </Link>
          <Link to="/contact" className="hover:text-orange-500 transition">
            Contact
          </Link>
          <Link to="/cartPage" className="hover:text-orange-500 transition flex">

            <ShoppingCart />
            {cartItems.length}
          </Link>
          {loggedInUser}
          <button
            onClick={() =>
              setBtnNameReact(btnNameReact === "Login" ? "Logout" : "Login")
            }
            className="px-3 py-1.5 rounded-md bg-orange-500 text-white hover:bg-orange-600 transition font-semibold"
          >
            {btnNameReact}
          </button>

        </nav>
      </div>
    </header>
  );
};

export default Header;