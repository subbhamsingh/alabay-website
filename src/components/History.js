




import React, { useState } from "react";
import Slider from "react-slick";
import { useParallax } from 'react-scroll-parallax';
import "./History.css";

const dogImage = './images/historyDog.png';

const History = () => {
  const [activeTab, setActiveTab] = useState("all");

  // Parallax effect hooks
  const titleParallax = useParallax({ translateY: [-20, 20] });
  const descParallax = useParallax({ translateY: [30, -30] });
  const imageParallax = useParallax({ translateY: [-50, 50] });

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="history-section">
      <div className="history-header">
        <h1 className="history-title" ref={titleParallax.ref}>
          History Of <span className="history-title-highlight">ALABAY</span>
        </h1>
        <p className="history-description" ref={descParallax.ref}>
          The Central Asian Shepherd Dog, also known as Alabay, has been a guardian of
          livestock and property for centuries. Originating from Central Asia, these
          dogs are renowned for their courage, strength, and loyalty.
        </p>
        <img
          src={dogImage}
          alt="Alabay Dog"
          className="history-image"
          ref={imageParallax.ref}
        />
      </div>

      {/* Tabs for "ALL", "PHOTOS", "VIDEOS" */}
      <div className="tabs">
        <span
          className={activeTab === "all" ? "tab active" : "tab"}
          onClick={() => handleTabClick("all")}
        >
          ALL
        </span>
        <span
          className={activeTab === "photos" ? "tab active" : "tab"}
          onClick={() => handleTabClick("photos")}
        >
          PHOTOS
        </span>
        <span
          className={activeTab === "videos" ? "tab active" : "tab"}
          onClick={() => handleTabClick("videos")}
        >
          VIDEOS
        </span>
      </div>

      {/* Carousel */}
      <Slider {...settings} className="carousel">
        <div className="carousel-item">
          <div className="carousel-image">PHOTO 1</div>
        </div>
        <div className="carousel-item">
          <div className="carousel-image">PHOTO 2</div>
        </div>
        <div className="carousel-item">
          <div className="carousel-image">PHOTO 3</div>
        </div>
        {/* Add more carousel items as needed */}
      </Slider>
    </div>
  );
};

export default History;

