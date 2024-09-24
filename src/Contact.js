// src/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <div className="container py-5">
      <h2>Contact Us</h2>
      
      {/* Intro Section */}
      <p className="lead">
        Need help or have any questions? We're here for you! Feel free to reach out to us using the information or form below.
      </p>

      {/* Contact Information Section */}
      <div className="row mt-4">
        <div className="col-md-6">
          <h3>Contact Information</h3>
          <ul className="list-unstyled">
            <li><strong>Phone:</strong> +1-800-123-4567</li>
            <li><strong>Email:</strong> support@bankapp.com</li>
            <li><strong>Address:</strong> 123 Bank St, Financial City, FC 10001</li>
          </ul>

          <h4>Customer Support Hours</h4>
          <p>Monday - Friday: 9:00 AM - 6:00 PM (EST)</p>
          <p>Saturday: 10:00 AM - 4:00 PM (EST)</p>
          <p>Sunday: Closed</p>
        </div>

        {/* Contact Form Section */}
        <div className="col-md-6">
          <h3>Send Us a Message</h3>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Your Name</label>
              <input type="text" className="form-control" id="name" placeholder="Enter your name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Your Email</label>
              <input type="email" className="form-control" id="email" placeholder="Enter your email" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Your Message</label>
              <textarea className="form-control" id="message" rows="4" placeholder="Type your message here"></textarea>
            </div>
            <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#065c70' }}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
