import React from 'react';

const User = (props) => {
  return (
    <div>
     <h2>Name: {props.name}</h2>
     <h3>Location : {props.location}</h3>
     <h4>Contact: {props.contact}</h4>
    </div>
  );
}

export default User;
