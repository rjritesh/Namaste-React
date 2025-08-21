import { useRef, useState } from 'react'
import Header from './Header'
import { FormValidate } from "../utils/Validate"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from 'react-router-dom';



const Login = () => {
  const [isSignIn, setisSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null)
  const navigate = useNavigate()

  const email = useRef(null);
  const password = useRef(null);


  const handleBtnClick = () => {
    //Tum FormValidate function ko email aur password as a input values bhejte ho.
    const message = FormValidate(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignIn) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up form
          const user = userCredential.user;
          console.log(user)
          navigate("/browse")
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage)
          // ..
        });
    }
    else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in form
          const user = userCredential.user;
          console.log(user)
          navigate("/browse")
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage)
        });
    }
  }

  return (
    <div>
      <Header />

      {/* Background */}
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg"
          alt="bg"
        />
      </div>

      {/* Login form */}
      <form onSubmit={(e) => e.preventDefault()} className="absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 opacity-90 flex flex-col items-center rounded-sm">
        <h1 className='text-white font-bold text-4xl mb-8 items-end self-start'>{isSignIn ? "Sign In" : "Sign Up"}</h1>
        {!isSignIn && (<input type='text' required placeholder='Name' className="p-2 m-2 w-full placeholder-gray-300 border rounded-sm border-gray-300  text-white bg-zinc-900"></input>)}
        <input
          ref={email}
          type="text"
          placeholder="Email Address" required
          className="p-2 m-2 w-full placeholder-gray-300 border rounded-sm border-gray-300  text-white bg-zinc-900"
        />

        {/* ref={password} is the reference to the input box to find out what we have written in input & that referenc is created by react by using useref */}
        <input
          ref={password}
          type="password"
          placeholder="Password" required
          className="p-2 m-2 w-full placeholder-gray-300 border rounded-sm border-gray-300  text-white bg-zinc-900"
        />
        <p className='text-red-500 self-start font-semibold'>{errorMessage}</p>

        <button className="p-3 m-4 bg-red-600 font-bold rounded-sm text-white w-full cursor-pointer hover:bg-red-700" onClick={handleBtnClick} >{isSignIn ? "Sign In" : "Sign Up"}</button>
        <span className='text-gray-100'>OR</span>

        <button className="p-3 m-4 bg-gray-600 font-bold rounded-sm text-white w-full cursor-pointer">Use a Sign-In code</button>

        <p className="self-start text-gray-100">
          {isSignIn ? "New to Netflix? " : "Already registered?"}
          <span
            className="font-bold cursor-pointer hover:underline"
            onClick={() =>
              setisSignIn(!isSignIn)
            }
          >
            {isSignIn ? " Sign Up Now" : " Sign In"}
          </span>
        </p>

      </form>
    </div>
  )
}

export default Login
