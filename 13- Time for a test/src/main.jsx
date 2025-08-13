// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')).render(
    <>  <App />

        <ToastContainer
      position="bottom-center"
      autoClose={1000}
      transition={Slide}
      hideProgressBar={true}
      newestOnTop={false}
      closeOnClick
      pauseOnHover
      theme='dark'
    />
    </>


)
