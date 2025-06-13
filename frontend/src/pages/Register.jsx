import React from 'react';
import '../css/App.css';
import '../css/Navbar.css';
import '../css/HeaderSection.css';
import '../css/AuthForm.css';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <>
      <main className="main-content">
        <form className="auth-form">
          <h2 className="auth-form-title">Register Your Company</h2>
          <input className="auth-input" type="text" placeholder="Company Name" />
          <input className="auth-input" type="email" placeholder="Email" />
          <input className="auth-input" type="password" placeholder="Password" />
          <button className="auth-btn" type="submit">Register</button>
          <div className="auth-form-footer">
            Already have an account? <Link to="/login" className="auth-link">Login here</Link>
          </div>
        </form>
      </main>
    </>
  );
}

export default Register; 