// src/pages/About.js
import React from 'react';
import './About.css';

const About = () => (
  <div className="about-section">
    <h2>About Us</h2>
    <p>
     “So God created man in His own image, in the image of God he created him; male and female he created them.” 
    </p>
    <div className="about-images">
      <img src="/assets/images/image1.jpg" alt="Our mission" />
      <img src="/assets/images/image2.jpg" alt="Community support" />
      <img src="/assets/images/image3.jpg" alt="Family values" />
    </div>
  </div>
);

export default About;

