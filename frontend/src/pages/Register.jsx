import React from 'react';
import '../css/App.css';
import '../css/Navbar.css';
import '../css/HeaderSection.css';
import '../css/AuthForm.css';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <>
      {/* Header Section (not fixed) */}
      <section className="header-section">
        <h2>Register for GlobalReady</h2>
        <p>Create your account to access international expansion tools and resources.</p>
      </section>
      <main className="main-content">
        <form className="auth-form">
          <h2 className="auth-form-title">Register Form</h2>
          <input className="auth-input" type="email" placeholder="Email Address" />
          <input className="auth-input" type="password" placeholder="Password" />
          <input className="auth-input" type="password" placeholder="Confirm Password" />
          <button className="auth-btn" type="submit">Register</button>
          <div className="auth-form-footer">
            Already a member? <Link to="/login" className="auth-link">Login now</Link>
          </div>
        </form>
      </main>
    </>
  );
}

export default Register; 