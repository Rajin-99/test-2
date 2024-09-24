import React from 'react';
import about from './About.jpg';

function About() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <h2 className="about-title">About Us</h2>
          <p className="about-text">
            NMB Bank is a leading financial institution with over 20 years of experience in serving our customers. We pride ourselves on offering comprehensive banking solutions that are tailored to meet your financial goals. Our mission is to build trust and offer a seamless experience. Our expert team is committed to providing innovative solutions and exceptional service to help you achieve your financial objectives.
          </p>
          <p className="about-text">
            We offer a range of services including personal banking, business banking, investment solutions, and more. Our goal is to ensure that every customer feels valued and supported throughout their financial journey.
          </p>
        </div>
        <div className="col-md-6">
        <img src={about} alt="About" style={{ width: "500px" }} />
        </div>
      </div>
    </div>
  );
}

export default About;
