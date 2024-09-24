// src/ConditionalHero.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import nmbLogo from './unnamed.jpg'; // Ensure this path is correct

function ConditionalHero() {
  const location = useLocation();

  return (
    <>
      {location.pathname === '/' && (
        <header className="hero-section text-center py-5" style={{ backgroundImage: 'url(https://your-image-url.com/hero-image.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="container">
            <img src={nmbLogo} alt="NMB Bank Logo" className="mb-3" style={{ width: "150px" }} />
            <h1 className="display-4 mb-3 text-white">Welcome To NMB Bank</h1>
            <p className="lead mb-4 text-white">Your trusted financial partner!</p>
          </div>
        </header>
      )}
    </>
  );
}

export default ConditionalHero;
