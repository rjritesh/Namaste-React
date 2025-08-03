// App.jsx or Homepage.jsx
// import { FiSearch, FiShoppingCart } from "react-icons/fi";
// import { FaMotorcycle } from "react-icons/fa";
import deliveryman from "../assets/deliveryman.jpg"
// import chefIcon from "./assets/chef.png";

const Landing = () => {
  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-10 py-6 shadow-md sticky top-0 bg-white z-50">
        <div className="flex items-center gap-2">
          {/* <img src={chefIcon} alt="logo" className="w-8 h-8" /> */}
          <h1 className="font-bold text-xl">City</h1>
        </div>

        <ul className="flex items-center gap-8 font-medium text-gray-800">
          <li>Home</li>
          <li>Menu</li>
          <li>Service</li>
          <li>Shop</li>
        </ul>

        <div className="flex items-center gap-4">
          <div className="flex items-center px-4 py-2 rounded-lg bg-gray-100">
            {/* <FiSearch className="text-gray-600" /> */}
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none ml-2 text-sm"
            />
          </div>

          <div className="relative">
            {/* <FiShoppingCart className="text-2xl" /> */}
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
              2
            </span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-10 pt-20 pb-10">
        {/* Floating food icons */}

        {/* Content */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Text Content */}
          <div className="max-w-xl space-y-6">
            <button className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium">
              {/* Bike Delivery <FaMotorcycle /> */}
            </button>

            <h2 className="text-5xl font-bold leading-snug">
              Fastest <span className="text-orange-600">Delivery</span> & <br />
              Easy <span className="text-orange-600">Pickup.</span>
            </h2>

            <p className="text-gray-500">
              Grocen assures fresh grocery every morning to your family without
              getting out in this pandemic.
            </p>

            <div className="flex gap-4 items-center">
              <button className="bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold">
                Order Now
              </button>
              <button className="flex items-center gap-2 text-gray-800 font-medium">
                <span className="bg-white shadow-md p-3 rounded-full">
                  ▶
                </span>
                Order Process
              </button>
            </div>

            <div className="flex items-center gap-4 mt-4">
              {/* <img src={chefIcon} alt="chef" className="w-10 h-10" /> */}
              <p className="text-gray-700 font-medium">
                When you are too lazy to cook, <br />
                we are just a click away!
              </p>
            </div>
          </div>

          {/* Scooter Image */}
          <div className="relative mt-10 md:mt-0">
            <img src={deliveryman} alt="Delivery" className="w-[420px]" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
