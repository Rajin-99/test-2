import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import nmbLogo from './unnamed.jpg';  
import facebookImg from './facebook.png'; 
import twitterImg from './twitter.png';
import instagramImg from './instagram.png';
import Home from './Home';  
import About from './About';
import Contact from './Contact';
import Login from './Login';
import Signup from './Signup';
import Dashboard from './Dashboard'; 
import ConditionalHero from './ConditionalHero'; 
import Transaction from './Transaction'; 


function App() {
  return (
    <Router>
      <div className="App">
       
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <img src={nmbLogo} alt="NMB Bank Logo" style={{ width: "110px" }} />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">Contact Us</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Log-In</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">Sign-Up</Link>
                </li>
              </ul>
              <form className="d-flex ms-auto">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>

     
        <main>
          <ConditionalHero /> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/transactions" element={<Transaction />} /> 
            
          </Routes>
        </main>

      
        <footer className="footer bg-light text-center py-3">
          <div className="container">
            <div className="row">
              <div className="col-md-4 mb-3">
                <h5>Contact Us</h5>
                <p>123 Bank Street, Toronto, ON</p>
                <p>Phone: (123) 456-7890</p>
                <p>Email: contact@nmbbank.com</p>
              </div>
              <div className="col-md-4 mb-3">
                <h5>Quick Links</h5>
                <ul className="list-unstyled">
                  <li><a href="/about-us">About Us</a></li>
                  <li><a href="/services">Our Services</a></li>
                  <li><a href="/careers">Careers</a></li>
                  <li><a href="/privacy-policy">Privacy Policy</a></li>
                  <li><a href="/terms-of-service">Terms of Service</a></li>
                </ul>
              </div>
              <div className="col-md-4 mb-3">
                <h5>Follow Us</h5>
                <a href="https://www.facebook.com/NMBBank" target="_blank" rel="noopener noreferrer" className="me-2">
                  <img src={facebookImg} alt="Facebook" className="social-icon" />
                </a>
                <a href="https://www.twitter.com/NMBBank" target="_blank" rel="noopener noreferrer" className="me-2">
                  <img src={twitterImg} alt="Twitter" className="social-icon" />
                </a>
                <a href="https://www.instagram.com/NMBBank" target="_blank" rel="noopener noreferrer" className="me-2">
                  <img src={instagramImg} alt="Instagram" className="social-icon" />
                </a>
              </div>
            </div>
            <p className="mb-0">© 2024 NMB Bank. All rights reserved.</p>
          </div>
        </footer>

      </div>
    </Router>
  );
}

export default App;
