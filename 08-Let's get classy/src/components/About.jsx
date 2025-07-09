import React from "react";

import UserClass from "./UserClass";

class About extends React.Component {

  

  render() {

    return (
      <div>

        <hr />
        <UserClass
          name="Fist classComponent"
          role="SDE I"
          location="Delhi"
          contact="Riteshjha24060@gmail"
        />

      </div>
    );
  }
}

export default About;
