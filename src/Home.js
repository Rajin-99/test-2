import React from 'react';
import './Home.css'; // Ensure to create and import this CSS file
import secureBankingImg from './securebanking.jpg';
import callsupport from './callcenter.webp';
import flexible from './flexible.jpeg';
import universityFinancing from './uni.jpg';

function Home() {    
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="feature-card">
            <img src={secureBankingImg} alt="Secure Banking" className="img-fluid" />
            <h3 className="feature-title">Secure Banking</h3>
            <p>
              Experience peace of mind with our state-of-the-art security features designed to keep your funds safe and secure. Our advanced encryption technology ensures that your information remains confidential.
            </p>
            <a href="/signup" className="btn">Get Started</a>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="feature-card">
            <img src={callsupport} alt="Customer Support" className="img-fluid" />
            <h3 className="feature-title">24/7 Customer Support</h3>
            <p>
              Our dedicated support team is here to assist you at any time of the day. Whether you have a question or need assistance with your account, we are just a call or click away.
            </p>
            <a href="/contact" className="btn">Contact Us</a>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="feature-card">
            <img src={flexible} alt="Flexible Services" className="img-fluid" />
            <h3 className="feature-title">Flexible Services</h3>
            <p>
              We offer a range of banking services tailored to fit your lifestyle. From online banking to mobile apps, manage your finances easily and conveniently from anywhere.
            </p>
            <a href="/services" className="btn">Explore Services</a>
          </div>
        </div>
        <div className="col-md-12 mb-4">
          <div className="d-flex align-items-center feature-card">
            <img src={universityFinancing} alt="University Education Financing" className="img-fluid me-4" />
            <div>
              <h3 className="feature-title">University Education Financing</h3>
              <p>
                Invest in your future with our tailored education financing options. We offer flexible loan plans and support to help you manage tuition fees and related expenses, so you can focus on achieving academic success.
              </p>
              <a href="/education-financing" className="btn">Learn More</a>
            </div>
          </div>
        </div>
        {/* Add more columns here as needed */}
      </div>
    </div>
  );
}

export default Home;
