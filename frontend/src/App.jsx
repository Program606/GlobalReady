import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './css/App.css';
import './css/Navbar.css';
import './css/HeaderSection.css';
import Register from './pages/Register';
import Login from './pages/Login';
import Opportunities from './pages/Opportunities';
import Navbar from './components/Navbar';
import ReadinessAssesment from './pages/ReadinessAssesment';
import HeaderSection from './components/HeaderSection';
import Account from './pages/Account';

function HomePage() {
  return (
    <HeaderSection
      title="Welcome to GlobalReady"
      subtitle="GlobalReady is your smart partner in international expansion. Designed to support Alberta SMEs, our AI-powered system helps businesses assess their readiness for global markets, discover new opportunities, and stay updated with real-time insights."
      mainTitle="Welcome to My Website"
      mainParagraph="This is a standard React baseplate. Start building your awesome app here!"
    />
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

        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/opportunities" element={<Opportunities />} />
          <Route path="/readinessAssesment" element={<ReadinessAssesment />} />
          <Route path="/account" element={<Account />} />
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
