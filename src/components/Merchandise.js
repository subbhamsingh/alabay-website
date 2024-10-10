


import React, { useState } from 'react';
import { useParallax } from 'react-scroll-parallax';
import './Merchandise.css';

const images = [
  {
    background: './images/Merchandise/pink tee bck.png',
    foreground: './images/Merchandise/pink tshirt.png',
  },
  {
    background: './images/Merchandise/black hoodie bck.png',
    foreground: './images/Merchandise/black hoodie.png',
  },
  {
    background: './images/Merchandise/blue cap bck.png',
    foreground: './images/Merchandise/cap mockup.png',
  },
  {
    background: './images/Merchandise/yellow tee bck.png',
    foreground: './images/Merchandise/yellow tshirt.png',
  },
];

const Merchandise = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Parallax effect hooks
  const headerParallax = useParallax({ translateY: [-30, 30] });
  const itemParallax = useParallax({ translateY: [20, -20] });

  return (
    <div
      className="merchandise-container bgr "
      
    >
      <div className="merchandise-header" ref={headerParallax.ref}>
        <h1>MERCHANDISE</h1>
      </div>

      <div className=" merchandise-showcase " ref={itemParallax.ref} style={{
        backgroundImage: `url(${images[currentIndex].background})`,
      }}>
        <button className="arrow left-arrow" onClick={goToPrevious}>
          &#10094;
        </button>
        
        <div className="merchandise-item" > 
          <img src={images[currentIndex].foreground} alt="Merchandise" />
          <p className="coming-soon">Coming Soon...</p>
          <p className="description">
            Fresh new <span>Alabay</span> approved merch for you!
          </p>
          <button className="discover-button">Discover</button>
        </div>

        <button className="arrow right-arrow" onClick={goToNext}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Merchandise;
