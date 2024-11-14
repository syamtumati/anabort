// src/pages/Videos.js
import React from 'react';
import './Videos.css';

const videos = [
  { src: '/assets/videos/video1.mp4', alt: 'Video 1' },
  { src: '/assets/videos/video2.mp4', alt: 'Video 2' }, // New video added
];

const Videos = () => (
  <div className="videos-section">
    <h2>Videos</h2>
    <div className="videos-container">
      {videos.map((video, index) => (
        <video key={index} controls className="video-player">
          <source src={video.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ))}
    </div>
  </div>
);

export default Videos;
