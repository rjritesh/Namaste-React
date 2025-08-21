import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Header = () => {

  const navigate = useNavigate()

  const handleSignout = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      // An error happened.
    });
  }

  return (
    <div className='absolute px-8 py-2 w-full bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className='w-40' src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-24/consent/87b6a5c0-0104-4e96-a291-092c11350111/019808e2-d1e7-7c0f-ad43-c485b7d9a221/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />

      <button className="bg-red-600 text-white px-2 py-1 rounded leading-none" onClick={handleSignout}>
        Log out
      </button>


    </div>
  )
}

export default Header