import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './css/App.css';
import './css/Navbar.css';
import './css/HeaderSection.css';
import Register from './pages/Register';
import Login from './pages/Login';

function HomePage() {
  return (
    <>
      {/* Header Section (not fixed) */}
      <section className="header-section">
        <h2>Welcome to GlobalReady</h2>
        <p>
          GlobalReady is your smart partner in international expansion. Designed to support Alberta SMEs, our AI-powered system helps businesses assess their readiness for global markets, discover new opportunities, and stay updated with real-time insights.
        </p>
      </section>
      {/* Main Content */}
      <main className="main-content">
        <h1>Welcome to My Website</h1>
        <p>This is a standard React baseplate. Start building your awesome app here!</p>
      </main>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="app-root">
        {/* Top Bar */}
        <header className="top-bar">
          <div className="top-bar-logo">
            <img src="/logo.png" alt="Logo" />
          </div>
          <div className="top-bar-buttons">
            <Link to="/register"><button className="top-btn">Register</button></Link>
            <Link to="/login"><button className="top-btn">Login</button></Link>
          </div>
        </header>

        {/* Sticky Navbar */}
        <nav className="sticky-navbar">
          <div className="sticky-navbar-inner">
            <Link to="/">
              <button className="nav-btn">Home</button>
            </Link>
            <button className="nav-btn">Opportunities</button>
            <button className="nav-btn">News</button>
            <button className="nav-btn">Country Info</button>
            <button className="nav-btn">Take Readiness Assessment</button>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

const navBtnStyle = {
  background: 'transparent',
  color: '#fff',
  border: 'none',
  fontSize: '1rem',
  fontWeight: 500,
  padding: '0.5rem 1.5rem',
  borderRadius: 4,
  cursor: 'pointer',
  transition: 'background 0.2s',
};

const topBtnStyle = {
  background: '#fff',
  color: '#22336b',
  border: 'none',
  borderRadius: 4,
  padding: '0.5rem 1.2rem',
  fontWeight: 600,
  cursor: 'pointer',
};

export default App;
