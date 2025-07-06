import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import './pages/Home.css';
import { LOGO_FULL } from './assets/brand';
import LoginRegister from './pages/LoginRegister';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="app-header">
          <div className="logo-placeholder">
            <img src={LOGO_FULL} alt="Fitout Trade Logo" style={{ height: '48px', marginRight: '12px' }} />
          </div>
          <nav className="main-nav">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/login">Login / Register</Link>
          </nav>
        </header>
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/login" element={<LoginRegister />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
