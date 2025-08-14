import { useState } from 'react';
import Header from './Header'

const Login = () => {

  const [isSignIn, setIsSignIn] = useState(true);
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
      <form className="absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 opacity-90 flex flex-col items-center rounded-sm">
        <h1 className='text-white font-bold text-4xl mb-8 items-end self-start'>{isSignIn ? "Sign In" : "Sign Up"}</h1>
        {!isSignIn && (<input type='text' placeholder='Name' className="p-2 m-2 w-full placeholder-white border rounded-sm border-gray-300  text-white bg-zinc-900"></input>)}
        <input
          type="text"
          placeholder="Email"
          className="p-2 m-2 w-full placeholder-white border rounded-sm border-gray-300  text-white bg-zinc-900"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 m-2 w-full placeholder-white border rounded-sm border-gray-300  text-white bg-zinc-900"
        />

        <button className="p-3 m-4 bg-red-600 font-bold rounded-sm text-white w-full cursor-pointer hover:bg-red-700">{isSignIn ? "Sign In" : "Sign Up"}</button>
        <span className='text-gray-100'>OR</span>

        <button className="p-3 m-4 bg-gray-600 font-bold rounded-sm text-white w-full cursor-pointer">Use a Sign-In code</button>
        <p className='self-start text-gray-100'>New to Netflix? <span className='font-bold cursor-pointer hover:underline' onClick={() =>
          setIsSignIn(!isSignIn)

        }>Sign Up Now</span> </p>
      </form>
    </div>
  )
}

export default Login
