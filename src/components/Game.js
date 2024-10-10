

import React from "react";
import Slider from "react-slick";
import "./Game.css";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { Parallax } from 'react-scroll-parallax';

const t1 = './images/Games/t1.png';
const t1Bck = './images/Games/t1Bck.png';

const t2 = './images/Games/t2.png';
const t2Bck = './images/Games/t2Bck.png';

const artifacts = './images/Games/artifacts.png';
const pungent = './images/Games/pungent.png';
const wrath = './images/Games/wrath.png';

const Game = () => {
  const topCarouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  const bottomCarouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="game-section">
      {/* Parallax Title */}
      <Parallax y={[-20, 20]} className="game-title-container">
        <h1 className="game-title">GAMES</h1>
      </Parallax>
      <Parallax y={[10, -10]} className="game-subtitle-container">
        <p className="game-subtitle">Stay tuned for upcoming games!</p>
      </Parallax>

      {/* Top Carousel */}
      <div className="game-banner">
        <Slider {...topCarouselSettings}>
          <div>
            <img
              src={t1}
              alt="Game 1"
              className="banner-image"
            />
          </div>
          <div>
            <img
              src={t2}
              alt="Game 2"
              className="banner-image"
            />
          </div>
        </Slider>
        <button className="discover-button">
          DISCOVER <span className="arrow">&rarr;</span>
        </button>
      </div>

      {/* Game Previews Section */}
      <div className="game-previews">
        <h2 className="previews-title">GAME PREVIEWS</h2>

        <Slider {...bottomCarouselSettings} className="preview-cards">
          {/* Card 1 */}
          <div className="card">
            <img src={artifacts} alt="Artifact Collected" />
            <div className="card-info">
              <h3>ARTIFACT COLLECTED</h3>
              <p>Explore the world to collect more!</p>
              <p>4/20 Collected</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card">
            <img src={pungent} alt="Pungent Poop" />
            <div className="card-info">
              <h3>PUNGENT POOP</h3>
              <p>Unlock and use abilities!</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card">
            <img src={wrath} alt="Wrath Hound" />
            <div className="card-info">
              <h3>WRATH HOUND</h3>
              <p>Call in help for the final threat!</p>
            </div>
          </div>

          {/* Add more cards as needed */}
        </Slider>
      </div>
    </div>
  );
};

export default Game;
