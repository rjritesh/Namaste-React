import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Homepage from "./components/Homepage";
import Service from "./components/Service";
import Error from "./components/Error";
import { lazy, Suspense, useEffect, useState } from "react";
import ShimmerMenu from "./components/ShimmerMenu";
import UserContext from "./utils/UserContext";
// import ShimmerMenu from "./components/ShimmerMenu";

const RestaurantMenu = lazy(() => import("./components/RestaurantMenu"))
const App = () => {

  const [userName, setUserName] = useState()

  useEffect(() => {
    const data = {
      name: "Davin"
    }
    setUserName(data.name);
  }, [])


  return (
    <BrowserRouter>
      <UserContext.Provider value={{ loggedInUser: "Ritesh" }} >
        <Header />

        <Routes>

          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Service />} />
          <Route
            path="/restaurants/:resId"
            element={
              <Suspense fallback={<ShimmerMenu></ShimmerMenu>}>
                <RestaurantMenu />
              </Suspense>
            }
          />
          <Route path="*" element={<Error />} /> {/* This catches unmatched routes */}
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
};

export default App;
