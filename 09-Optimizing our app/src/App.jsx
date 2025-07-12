import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Homepage from "./components/Homepage";
import Service from "./components/Service";
import Error from "./components/Error";
import { lazy, Suspense } from "react";

const RestaurantMenu = lazy(() => import("./components/RestaurantMenu"))


const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Service />} />
        <Route
          path="/restaurants/:resId"
          element={
            <Suspense fallback={<h2>Loading menu...</h2>}>
              <RestaurantMenu />
            </Suspense>
          }
        />
        <Route path="*" element={<Error />} /> {/* This catches unmatched routes */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
