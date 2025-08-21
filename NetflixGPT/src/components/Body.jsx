import { onAuthStateChanged } from "firebase/auth";
import Browse from "./Browse"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import Login from "./Login";
const Body = () => {
  const dispatch = useDispatch();



  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }))

      } else {
        dispatch(removeUser())
      }
    });
  }, [])


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login></Login>} />
          <Route path="/browse" element={<Browse />} />
        </Routes>
      </BrowserRouter>
    </>
  )
};

export default Body;
