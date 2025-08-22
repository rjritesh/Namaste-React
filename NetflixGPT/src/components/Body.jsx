import { onAuthStateChanged } from "firebase/auth";
import Browse from "./Browse"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import Login from "./Login";
import ErrorPage from "./ErrorPage";
const Body = () => {
  






  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login></Login>} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/error" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
};

export default Body;
