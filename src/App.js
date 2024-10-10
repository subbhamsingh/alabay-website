


import React from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax'; 
import './App.css';
import SocialMedia from './components/SocialMedia.js';
import History from './components/History.js';
import Vision from './components/Vision.js';
import RoadMap from './components/RoadMap.js';
import Tokenomics from './components/Tokenomics.js';
import Merchandise from './components/Merchandise.js';
import Game from './components/Game.js';
import Landing from './components/Landing'; 

function App() {
  return (
    <div className="App bgr">
      {/* Landing component remains static */}
      <Landing />

      {/* Parallax effect starts */}
      <ParallaxProvider>
        <Parallax speed={-3}>
          <History />
        </Parallax>

        <Parallax speed={-4}>
          <Vision />
        </Parallax>

        <Parallax speed={-3}>
          <RoadMap />
        </Parallax>

        <Parallax speed={-3}>
          <Tokenomics />
        </Parallax>

        <Parallax speed={-3}>
          <Merchandise />
        </Parallax>

        <Parallax speed={-2}>
          <Game />
        </Parallax>

        <Parallax speed={-2}>
          <SocialMedia />
        </Parallax>
      </ParallaxProvider>
    </div>
  );
}

export default App;
