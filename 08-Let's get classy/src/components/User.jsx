import { useState } from "react";


const User = (props) => {

  return (
    <div>
     <h2>{props.name}</h2>
     <h2>{props.location}</h2>
     <h2>{props.contact}</h2>
    </div>
  );
}

export default User;
