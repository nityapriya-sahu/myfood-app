import React from "react";
import UserFunction from "./UserFunction.js";
import UserClass from "./UserClass.js";
import UserGithub from "./UserGithub.js";
// import UserClass from "./UserClass.js";
const About = () => {
  return (
    <div>
      About page
      <UserFunction name={"Nitya Priya (Function)"} />
      <UserClass name={"Nitya Priya (Class)"} />
      <UserGithub />
    </div>
  );
};

export default About;
