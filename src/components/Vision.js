


import React from 'react';
import { useParallax } from 'react-scroll-parallax';
import './Vision.css';

const vision = './images/Vision.png';

const Vision = () => {
  // Parallax effect hooks
  const headingParallax = useParallax({ translateY: [-30, 30] });
  const imageParallax = useParallax({ translateY: [20, -20] });
  const textParallax = useParallax({ translateY: [30, -30] });

  return (
    <div className="vision-container">
      <h1 className="vision-heading" ref={headingParallax.ref}>
        Project Vision
      </h1>
      
      <div className="vision-content">
        <img 
          src={vision}
          alt="Project Vision" 
          className="vision-image"
          ref={imageParallax.ref}
        />
        <p className="vision-text" ref={textParallax.ref}>
          Our project vision is to build a solution that seamlessly integrates modern technology
          with a user-friendly interface to solve everyday problems. By leveraging cutting-edge
          innovations, we aim to create a platform that not only meets the needs of users but also
          exceeds their expectations. Our vision is driven by a commitment to quality, innovation,
          and user satisfaction.
        </p>
      </div>
    </div>
  );
};

export default Vision;




