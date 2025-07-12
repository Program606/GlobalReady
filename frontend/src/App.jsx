import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './css/App.css';
import './css/Navbar.css';
import Register from './pages/Register';
import Login from './pages/Login';
import Opportunities from './pages/Opportunities';
import Navbar from './components/Navbar';
import ReadinessAssesment from './pages/ReadinessAssesment';
import HeroSection from './components/HeroSection';
import Account from './pages/Account';
import Top3Card from './components/Top3Card';
import MapSection from './components/MapSection';
import AboutUs from './components/AboutUs';

function HomePage() {
  return (
    <HeroSection
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
        <Navbar />
        <HeroSection 
        title= {<>Brave The<br />Global Markets</>}
        subtitle= {
          <>
          Expand Your Business Internationally <br /> Without The Stress..
          </>
        }
        />
        <Top3Card />
        <MapSection />
        <AboutUs title="About Global Ready"
        paragraph={
          <>
            <p>GlobalReady was a student submission in Mount Royal University’s 
            International Business Hackation. With only a couple of weeks,
            a student team componsed of Computer Information System Students:
            (Starting from the left) Zeenat, Maryam, Toka, Prince was able to produce 
            a solution to assist Canadian companies in finding international opportunities. 
            Among other features, the main gravitation of GlobalReady is its ability to assess 
            a company’s ability to expand based on a detailed questionnaire.
            </p>
          </>
        }/>
        {/* <AboutUs /> */}
        {/* <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/opportunities" element={<Opportunities />} />
          <Route path="/readinessAssesment" element={<ReadinessAssesment />} />
          <Route path="/account" element={<Account />} />
        </Routes> */}
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
