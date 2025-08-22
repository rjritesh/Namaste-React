import { useRef, useState } from "react";
import Header from "./Header";
import { FormValidate } from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const [isSignIn, setisSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleBtnClick = () => {
    const message = FormValidate(email.current.value, password.current.value);
    setErrorMessage(message);


    if (message) return;
    setIsLoading(true);

    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              toast.success("Signed up successfully!", { duration: 2000 });
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error.message)

            });
        })
        .catch(() => {
          toast.error("Invalid credentials!", { duration: 2000 })

        })
        .finally(() => setIsLoading(false))
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then(() => {
          toast.success("Logged in successfully!", { duration: 2000 });
          navigate("/browse");
        })
        .catch(() => {
          toast.error("Invalid credentials!", { duration: 2000 })

        })
        .finally(() => setIsLoading(false))
    }
  };

  return (
    <div>
      <Header />

      {/* Background */}
      <div className="absolute inset-0">
        <img
          className="h-screen w-screen object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg"
          alt="bg"
        />
      </div>

      {/* Login form */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
        p-8 sm:p-12 bg-black opacity-90 w-11/12 sm:w-8/12 md:w-5/12 lg:w-3/12 
        flex flex-col items-center rounded-md shadow-lg"
      >
        <h1 className="text-white font-bold text-3xl sm:text-4xl mb-6 self-start">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignIn && (
          <input
            type="text"
            ref={name}
            required
            placeholder="Name"
            className="p-3 m-2 w-full placeholder-gray-400 border rounded-md 
            border-gray-600 text-white bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-red-600"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          required
          className="p-3 m-2 w-full placeholder-gray-400 border rounded-md 
          border-gray-600 text-white bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-red-600"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          required
          className="p-3 m-2 w-full placeholder-gray-400 border rounded-md 
          border-gray-600 text-white bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-red-600"
        />

        <p className="text-red-500 self-start font-semibold">{errorMessage}</p>

        <button disabled={isLoading}
          className="p-3 m-4 bg-red-600 font-bold rounded-md text-white w-full 
          hover:bg-red-700 transition duration-200 cursor-pointer flex justify-center items-center "
          onClick={handleBtnClick}
        >
          {isLoading ? (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin "></div>
          ) :
            (isSignIn ? "Sign In" : "Sign Up")}
        </button>

        <span className="text-gray-300">OR</span>

        <button
          className="p-3 m-4 bg-gray-600 font-bold rounded-md text-white w-full hover:bg-gray-700 transition duration-200"
        >
          Use a Sign-In code
        </button>

        <p className="self-start text-gray-300">
          {isSignIn ? "New to Netflix? " : "Already registered?"}
          <span
            className="font-bold cursor-pointer hover:underline"
            onClick={() => setisSignIn(!isSignIn)}
          >
            {isSignIn ? " Sign Up Now" : " Sign In"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
