import React from "react";
// import link
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>About</h1>

      {/* home tab */}
      <div>
        <Link className="home" to="/Home">
          Home
        </Link>
      </div>
      {/* about tab */}
      <div>
        <Link className="about" to="/About">
          About
        </Link>
      </div>
      {/* contact tab */}
      <div>
        <Link className="contact" to="/Contact">
          Contact
        </Link>
      </div>
    </div>
  );
};
export default About;
