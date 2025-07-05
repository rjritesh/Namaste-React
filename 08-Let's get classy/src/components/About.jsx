import User from "./User";
import UserClass from "../components/UserClass"


const About = () => {

  return (
    <div>
      <User name="Ritesh" location="kolkata" contact="imrjha07@gmail.com"></User>
      <UserClass name={"Ritesh class"} location={"kolkata class"} contact={"imrjha07@gmail.com class"}></UserClass>
    </div>
  );
}

export default About;
