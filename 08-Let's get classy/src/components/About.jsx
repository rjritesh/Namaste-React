import React from "react";

import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props){
    super(props);
      console.log("parent constructor called");
    }
  
componentDidMount(){
  console.log("parent componentdidmount called");
}


  render() {
    console.log("parent render called");

    return (
      <div>

        <hr />
        <UserClass
      
        />
       

      </div>
    );
  }
}

export default About;
