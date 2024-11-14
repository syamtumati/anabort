// src/pages/Gallery.js
import React from 'react';
import './Gallery.css';

const images = [
  { src: '/assets/images/image1.jpg', alt: 'Image 1' },
  { src: '/assets/images/image2.jpg', alt: 'Image 2' },
];

const Gallery = () => (
  <div className="gallery-section">
    <h2>Gallery</h2>
    <div className="gallery-images">
      {images.map((img, index) => (
        <img key={index} src={img.src} alt={img.alt} className="gallery-image" />
      ))}
    </div>
  </div>
);

export default Gallery;
