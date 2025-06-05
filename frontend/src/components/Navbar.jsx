import React from 'react';
import './Navbar.css'; // Optional: for styling

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="/logo.png" alt="GlobalReady Logo" className="logo" />
        <span className="brand">GlobalReady</span>
      </div>
      <ul className="navbar-links">
        <li href="\App.jsx">Home</li>
        <li href="\opportunities">Opportunities</li>
        <li href="\news">News</li>
        <li href="\country-info">Country Info</li>
        <li href="\readiness-assessment">Take Readiness Assessment</li>
      </ul>
      <div className="navbar-right">
        <button href="\pages\register.jsx" className="btn">Register</button>
        <button className="btn">Login</button>
      </div>
    </nav>
  );
}

export default Navbar;