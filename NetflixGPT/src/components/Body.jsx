
import Login from "../components/Login"
import Browse from "../components/Browse"
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Body = () => {




  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login></Login>} />


        <Route path="/browse" element={<Browse />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Body;
