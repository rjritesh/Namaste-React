import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo1.png";
import OnlineOffline from "./onlineOffline";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");


  useEffect(() => {

  }, [btnNameReact])

  return (
    <div className="navbar">
      <div className="logo">


        <Link to="/"><img src={logo} alt="Logo" /></Link>
      </div>
     
      <div className="navItems">
         <OnlineOffline></OnlineOffline>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>

        <button
          className="loginBtn"
          onClick={() =>
            setBtnNameReact(btnNameReact === "Login" ? "Logout" : "Login")
          }
        >
          {btnNameReact}
        </button>
      </div>
    </div>
  );
};

export default Header;
