import React from 'react';
import { LOGO_FULL, BRAND_YELLOW, BRAND_DARK } from '../assets/brand';
import './LoginRegister.css';

const LoginRegister: React.FC = () => {
  return (
    <div className="login-bg">
      <div className="login-container">
        <img src={LOGO_FULL} alt="Fitout Trade Logo" className="login-logo" />
        <h1 className="login-title">Welcome to Fitout Trade</h1>
        <p className="login-subtitle">The leading platform for materials, products, and inspiration in the Middle East.</p>
        <div className="login-form">
          <button className="social-btn google">Continue with Google</button>
          <button className="social-btn linkedin">Continue with LinkedIn</button>
          <div className="divider"><span>or</span></div>
          <input type="email" placeholder="Email address" className="login-input" />
          <input type="password" placeholder="Password" className="login-input" />
          <button className="main-btn">Sign In / Register</button>
        </div>
        <div className="login-footer">
          <span>By continuing, you agree to our <a href="#">Terms</a> and <a href="#">Privacy Policy</a>.</span>
        </div>
      </div>
    </div>
  );
};

export default LoginRegister; 