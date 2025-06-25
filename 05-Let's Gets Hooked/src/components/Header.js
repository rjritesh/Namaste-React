 import { LOGO_URL } from "../utils/constants";



const Header = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img
          src={LOGO_URL}
        />
      </div>

      <div className="navItems">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
      </div>
      <hr></hr>
    </div>
  );
};

export default Header;