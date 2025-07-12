import React from 'react';
import '../css/Navbar.css'; // Optional: for styling
import { Link } from 'react-router-dom';
import 'normalize.css';

function Navbar() {
  return (
    <>
      {/* Sticky Navbar */}
      <nav className="navbar">
        <div className="logo">
          <span>GlobalReady</span>
        </div>
        <ul className="nav-links">
            <li><a href="#">Features</a></li>
            <li><a href="#">Demo</a></li>
            <li><a href="#">About Us</a></li>
        </ul>
        <div className="nav-actions">
            <a href="#" className="login">Log In</a>
            <a href="#" className="get-started">Get Started</a>
        </div>

          {/* <Link to="/"><button className="nav-btn">Home</button></Link>
          <Link to="/opportunities"><button className="nav-btn">Opportunities</button></Link>
          <button className="nav-btn">News</button>
          <Link to="/account"><button className="nav-btn">Account</button></Link>
          <Link to="/readinessAssesment"><button className="nav-btn">Take Readiness Assessment</button></Link> */}

      </nav>
    </>
  );
}

export default Navbar;