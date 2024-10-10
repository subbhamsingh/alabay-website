


import React from "react";
import "./SocialMedia.css";
import { Parallax } from "react-scroll-parallax";

const dogImage = './images/social-mediaDog.png'; 
const twitterIcon = './images/twitter logo 1.png';
const telegramIcon = './images/telegram logo.png';

const SocialMedia = () => {
  return (
    <div className="social-media-wrapper">
      <div className="social-media-content">
        {/* Parallax Effect on Title */}
        <Parallax y={[-20, 20]}>
          <h1 className="social-media-title">SOCIAL MEDIA LINKS</h1>
        </Parallax>
        
        <div className="social-links">
          {/* Parallax Effect on Icons */}
          <Parallax y={[10, -10]}>
            <div className="social-link-item">
              <img src={twitterIcon} alt="Twitter" className="social-icon" />
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                Twitter Link
              </a>
            </div>
          </Parallax>
          
          <Parallax y={[15, -15]}>
            <div className="social-link-item">
              <img src={telegramIcon} alt="Telegram" className="social-icon" />
              <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
                Telegram Link
              </a>
            </div>
          </Parallax>
        </div>
      </div>

      {/* Parallax Effect on Dog Image */}
      <div className="dog-image-container">
        <Parallax y={[20, -20]}>
          <img
            src={dogImage}
            alt="Dog holding phone"
            className="dog-image"
          />
        </Parallax>
      </div>
    </div>
  );
};

export default SocialMedia;
