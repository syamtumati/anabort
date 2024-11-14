// src/pages/Landing.js
import React from 'react';
import './Landing.css';

const initialImages = [
  { src: '/assets/images/image1.jpg', alt: 'Image 1' },
  { src: '/assets/images/image2.jpg', alt: 'Image 2' },
];

const initialVideos = [
  { src: '/assets/videos/video1.mp4', alt: 'Video 1' },
  { src: '/assets/videos/video2.mp4', alt: 'Video 2' },
];

const Landing = () => (
  <div className="landing-section">
    <h2>Welcome to Our Website</h2>
    <p>“Behold, children are a heritage from the Lord, the fruit of the womb a reward. Like arrows in the hand of a warrior are the children of one’s youth. Blessed is the man who fills his quiver with them!”</p>
    <div className="landing-images">
      {initialImages.map((img, index) => (
        <img key={index} src={img.src} alt={img.alt} className="landing-image" />
      ))}
    </div>
    <div className="landing-videos">
      {initialVideos.map((video, index) => (
        <video key={index} controls className="landing-video">
          <source src={video.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ))}
    </div>
  </div>
);

export default Landing;
