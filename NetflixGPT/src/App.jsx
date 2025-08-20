
import Login from "./components/Login"
import Browse from "./components/Browse"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./components/Body";

const App = () => {
  return (
    <div className='text-white'>
      <Body></Body>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login></Login>} />
          <Route path="/browse" element={<Browse />} />
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
