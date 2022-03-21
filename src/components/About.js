import React from 'react';
import Profile from "../assets/images/profile.jpg";

function About() {
  return (
    <div className="container">
      <h2>About</h2>
      <div className="about-body">

      <img src={Profile} alt="Pic"></img>
        <div className="bodyTab pTag">
          <h3>Vinay Vallabhaneni</h3>
          <p>Based in Charlotte, North Carolina! Vinay is a Experienced DevOps Engineer, 
            working as Software Engineer at Bank of America. Vinay provides exposure to new ideas,
             personal and professional growth.
          </p>
          <div className='padding'>
            <p>Vinay loves photography and coding</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;