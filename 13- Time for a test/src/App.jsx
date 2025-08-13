import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Homepage from "./components/Homepage";
import Service from "./components/Service";
import Error from "./components/Error";
import { lazy, Suspense } from "react";
import ShimmerMenu from "./components/ShimmerMenu";
import { Provider } from "react-redux"
import appStore from "./utils/appStore"
import CartPage from "./components/CartPage";
const RestaurantMenu = lazy(() => import("./components/RestaurantMenu"))
const App = () => {


  return (
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />

        <Routes>

          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Service />} />
          <Route path="/cartPage" element={<CartPage />} />
          <Route
            path="/restaurants/:resId"
            element={
              <Suspense fallback={<ShimmerMenu></ShimmerMenu>}>
                <RestaurantMenu />
              </Suspense>
            }
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
