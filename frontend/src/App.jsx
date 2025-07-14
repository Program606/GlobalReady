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
        <Top3Card 
        header1= {
          <h2>Research-Backed Questionaire</h2>
        }
        para1={
          <>
            <p>TextTextTextText
              TextTextTextText
              TextTextTextText
              TextTextText
            TextTextTextText
            TextTextTextText
            TextTextTextText
            TextTextText
            TextTextTextText
            TextTextTextText
            TextTextTextTextTextTextText

            </p>
          </>
        }
        header2= {
          <h2>Country Risk Assesor and Personalized Company Locator
          </h2>
        }
        para2={
          <>
            <p>TextTextTextTextText
              TextTextTextTextTextTextText
            TextTextTextTextTextText
            TextTextTextTextTextTextTextText
            TextTextTextTextTextText
            TextTextTextTextTextTextTextTextText
            </p>
          </>
        }
        header3= {
          <h2>AI-Powered Recomendations</h2>
        }
        para3={
          <>
            <p>TextTextTextText
              TextTextTextTextText
              TextTextTextTextText
            TextTextTextTextText
            TextTextTextTextText
            TextTextTextTextText
            TextTextTextTextText
            TextTextTextTextText
            TextTextTextTextText
            </p>
          </>
        }
        // para2="test2"
        // para3="test3"
        />
        <MapSection />
        <AboutUs title="About Global Ready"
        paragraph={
          <>
            GlobalReady was a student submission in Mount Royal University’s 
            International Business Hackation. With only a couple of weeks,
            a student team componsed of Computer Information System Students:
            (Starting from the left) Zeenat, Maryam, Toka, Prince was able to produce 
            a solution to assist Canadian companies in finding international opportunities. 
            Among other features, the main gravitation of GlobalReady is its ability to assess 
            a company’s ability to expand based on a detailed questionnaire.
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

export default App;
