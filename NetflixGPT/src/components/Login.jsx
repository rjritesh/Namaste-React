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
import { Bg_IMG } from "../utils/constants"

const Login = () => {
  const [isSignIn, setisSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false)
  const [testEmail, setTestEmail] = useState("testuser@gmail.com")
  const [testPassword, setTestPassword] = useState("TestUser@07")
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
      //Signup flow
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/97453505?v=4",
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
      //signin flow
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
          className="h-screen w-screen object-cover "
          src={Bg_IMG}
          alt="bg"
        />
      </div>

      {/* Login form */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
    p-8 sm:p-12 
    bg-white/10 backdrop-blur-sm border border-white/20
    w-11/12 sm:w-8/12 md:w-5/12 lg:w-3/12
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
            className="p-3 m-2 w-full placeholder-gray-300 border rounded-md 
        border-gray-400 text-white bg-white/10 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-yellow-600"
          />
        )}

        <input
          ref={email}
          type="text"
          value={testEmail}
          placeholder="Email Address"
          required
          className="p-3 m-2 w-full placeholder-gray-300 border rounded-md 
      border-gray-400 text-white bg-white/10 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-yellow-600"
          onChange={(e) => setTestEmail(e.target.value)}
        />

        <input
          ref={password}
          value={testPassword}
          type="password"
          placeholder="Password"
          required
          className="p-3 m-2 w-full placeholder-gray-300 border rounded-md 
      border-gray-400 text-white bg-white/10 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-yellow-600"
          onChange={(e) => setTestPassword(e.target.value)}
        />

        <p className="text-yellow-500 self-start font-semibold">{errorMessage}</p>

        <button disabled={isLoading}
          className="p-3 m-4 bg-yellow-600 font-bold rounded-md text-white w-full 
      hover:bg-yellow-700 transition duration-200 cursor-pointer flex justify-center items-center "
          onClick={handleBtnClick}
        >
          {isLoading ? (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
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
          {isSignIn ? "New to Cineo? " : "Already registered?"}
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
