import React, { useContext } from 'react';
import UserContext from '../utils/UserContext';

const Service = () => {


 const { loggedInUser } = useContext(UserContext)
  return (
    <div>
       <h1>Hey I am service page</h1>
       <p>User: {loggedInUser}</p>
    </div>
  );
}

export default Service;
