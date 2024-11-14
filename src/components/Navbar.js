// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <h1 className="navbar-logo">Anti-Abortion Awareness</h1>
    <div className="navbar-links">
      <Link to="/about">About</Link>
      <Link to="/gallery">Gallery</Link>
      <Link to="/videos">Videos</Link>
      <Link to="/donate">Donate</Link>
    </div>
  </nav>
);

export default Navbar;
