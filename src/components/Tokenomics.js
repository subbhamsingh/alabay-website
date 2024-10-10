


import React from 'react';
import { useParallax } from 'react-scroll-parallax';
import './Tokenomics.css';

const tokenomics = './images/tokenomics.png';

const Tokenomics = () => {
  // Parallax effect hooks
  const titleParallax = useParallax({ translateY: [-30, 30] });
  const detailsParallax = useParallax({ translateY: [20, -20] });
  const imageParallax = useParallax({ translateY: [-20, 20] });

  return (
    <div className="tokenomics-container">
      <div className="tokenomics-header" ref={titleParallax.ref}>
        <h1>TOKENOMICS</h1>
      </div>
      <div className="tokenomics-details" ref={detailsParallax.ref}>
        <div className="tokenomics-info">
          <div className="info-box">
            <h2>LIQUIDITY</h2>
            <p>LOCKED</p>
          </div>
          <div className="info-box">
            <h2>CONTRACT</h2>
            <p>RENOUNCED</p>
          </div>
          <div className="info-box">
            <h2>TAXES</h2>
            <p>0%</p>
          </div>
        </div>
        <div className="tokenomics-image" ref={imageParallax.ref}>
          <img src={tokenomics} alt="Dog with money" />
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;

