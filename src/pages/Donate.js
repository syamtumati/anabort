// src/pages/Donate.js
import React from 'react';
import './Donate.css';

const Donate = () => {
  const handleDonation = () => {
    alert("Thank you for considering a donation!");
  };

  return (
    <div className="donate-section">
      <h2>Support Our Cause</h2>
      <p>Your donations help us provide essential support and resources to those in need.</p>
      <button onClick={handleDonation} className="donate-button">
        Donate Now
      </button>
    </div>
  );
};

export default Donate;
