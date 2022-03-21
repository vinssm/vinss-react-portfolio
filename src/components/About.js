import React from 'react';
import Profile from "../assets/images/profile.jpg";

function About() {
  return (
    <div className="page-div">
      <h2>About</h2>
      <div className="about-body">

      <img src={Profile} alt="Pic"></img>
        <div className="bodyTab pTag">
          <h3>Vinay Vallabhaneni</h3>
          <p>Experienced DevOps Engineer, working as Software Engineer at Bank of America
            and who provides exposure to new ideas, personal and professional growth.
          </p>

          <p>Based in Charlotte, North Carolina!</p>
         
        </div>
      </div>
    </div>
  );
}

export default About;