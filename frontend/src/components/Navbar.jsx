import React from 'react';
import '../css/Navbar.css'; // Optional: for styling
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      {/* Sticky Navbar */}
      <nav className="sticky-navbar">
        <div className="sticky-navbar-inner">
          <Link to="/"><button className="nav-btn">Home</button></Link>
          <Link to="/opportunities"><button className="nav-btn">Opportunities</button></Link>
          <button className="nav-btn">News</button>
          <Link to="/account"><button className="nav-btn">Account</button></Link>
          <Link to="/readinessAssesment"><button className="nav-btn">Take Readiness Assessment</button></Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;