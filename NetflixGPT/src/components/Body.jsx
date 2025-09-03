import Browse from "./Browse"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import ErrorPage from "./ErrorPage";
import MovieModal from "../components/MovieModal"


const Body = () => {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login></Login>} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="/movie/:movieId" element={<MovieModal />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
};

export default Body;
