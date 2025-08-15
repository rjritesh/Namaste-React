import Login from './Login';
import Browse from './Browse';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Body = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default route → Login page */}
        <Route path="/" element={<Login />} />

        {/* Browse page */}
        <Route path="/browse" element={<Browse />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Body;
