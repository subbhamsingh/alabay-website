



import React from 'react';
import { useParallax } from 'react-scroll-parallax';
import './RoadMap.css';

const RoadMapDog = './images/RoadMapDog.png';
const carousel1 = './images/carousel1.png';
const carousel2 = './images/carousel2.png';
const carousel3 = './images/carousel3.png';
const carousel4 = './images/carousel4.png';

const RoadMap = () => {
  // Parallax effect hooks
  const titleParallax = useParallax({ translateY: [-30, 30] });
  const descriptionParallax = useParallax({ translateY: [20, -20] });
  const imageParallax = useParallax({ translateY: [-20, 20] });
  const section1Parallax = useParallax({ translateY: [30, -30] });
  const section2Parallax = useParallax({ translateY: [-30, 30] });
  const section3Parallax = useParallax({ translateY: [30, -30] });
  const section4Parallax = useParallax({ translateY: [-30, 30] });

  return (
    <div className="roadmap-container">
      <div className="roadmap-header">
        <h1 ref={titleParallax.ref}>ROAD MAP</h1>
        <p ref={descriptionParallax.ref}>
          Our journey is just beginning. Explore our roadmap to see the exciting milestones and future plans we have in store.
          <br />
          <span>Join us as we grow and achieve new heights.</span>
        </p>
        <img src={RoadMapDog} className="roadmap-image" ref={imageParallax.ref} alt="RoadMap Dog" />
      </div>

      <div className="roadmap-sections">
        <div className="section community-building" ref={section1Parallax.ref}>
          <h2>Community Building</h2>
          <p>and Initial Launch</p>
          <img src={carousel1} alt="Community Building" />
        </div>
        <div className="section merchandise-launch" ref={section2Parallax.ref}>
          <h2>Merchandise</h2>
          <p>Store Launch</p>
          <img src={carousel2} alt="Merchandise Launch" />
        </div>
        <div className="section community-events" ref={section3Parallax.ref}>
          <h2>Community</h2>
          <p>Events and Contests</p>
          <img src={carousel3} alt="Community Events" />
        </div>
        <div className="section expansion-new-features" ref={section4Parallax.ref}>
          <h2>Expansion</h2>
          <p>and New Features</p>
          <img src={carousel4} alt="Expansion and New Features" />
        </div>
      </div>
    </div>
  );
};

export default RoadMap;

