import React from 'react';
import '../css/App.css';
import '../css/Navbar.css';
import '../css/HeroSection.css';
import '../css/AuthForm.css';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <>
      <main className="main-content">
        <form className="auth-form">
          <h2 className="auth-form-title">Login Form</h2>
          <input className="auth-input" type="email" placeholder="Email Address" />
          <input className="auth-input" type="password" placeholder="Password" />
          <div className="auth-form-row">
            <label className="auth-checkbox">
              <input type="checkbox" /> Remember me
            </label>
            <Link to="#" className="auth-link">Forgot password?</Link>
          </div>
          <button className="auth-btn" type="submit">Login</button>
          <div className="auth-form-footer">
            Not a member? <Link to="/register" className="auth-link">Signup now</Link>
          </div>
        </form>
      </main>
    </>
  );
}

export default Login; 