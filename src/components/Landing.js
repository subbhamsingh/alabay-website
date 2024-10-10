import React from 'react';
import './Landing.css'; // Create a CSS file for the landing component

const landingImage = './images/landing.png'; 

const Landing = () => {
  return (
    <div className="landing-container ">
      <img src={landingImage} alt="Landing" className="landing-image" />
      
    </div>
  );
};

export default Landing;
