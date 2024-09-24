import React, { useState, useEffect } from 'react';
import './Signup.css';
import axios from 'axios';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    verifyPassword: '', // New field for password confirmation
  });
  const [storedUsers, setStoredUsers] = useState([]);
  const [message, setMessage] = useState(''); // State for displaying messages
  const [errorMessage, setErrorMessage] = useState(''); // State for displaying error messages

  // Fetch existing users from the JSONBin
  const fetchStoredUsers = async () => {
    try {
      const response = await axios.get('https://api.jsonbin.io/v3/b/66ec8495e41b4d34e43365e9/latest', {
        headers: {
          'X-Master-Key': '$2a$10$kl0yLBd/TqSf1nKZgg8kieJyOilC2pybTdb5VflzKszVx6vOMLvEG'
        }
      });
      setStoredUsers(response.data.record || []);
    } catch (error) {
      console.error('Error fetching stored users:', error);
    }
  };

  useEffect(() => {
    fetchStoredUsers();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check if passwords match
    if (formData.password !== formData.verifyPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    // Clear error message if validation passes
    setErrorMessage('');

    // Append new user data to the existing users (including password)
    const updatedUsers = [
      ...storedUsers, 
      { 
        username: formData.username, 
        email: formData.email, 
        password: formData.password // Store the password here
      }
    ];

    try {
      const response = await axios.put(
        'https://api.jsonbin.io/v3/b/66ec8495e41b4d34e43365e9',
        JSON.stringify(updatedUsers),
        {
          headers: {
            'Content-Type': 'application/json',
            'X-Master-Key': '$2a$10$kl0yLBd/TqSf1nKZgg8kieJyOilC2pybTdb5VflzKszVx6vOMLvEG'
          }
        }
      );
      if (response.status === 200) {
        setMessage('Account created successfully!');
        fetchStoredUsers(); // Refresh stored users
      }
    } catch (error) {
      console.error('Error creating account:', error);
      setMessage('Error creating account: ' + error.message);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2 className="signup-title">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="verifyPassword">Verify Password</label>
            <input
              type="password"
              className="form-control"
              id="verifyPassword"
              name="verifyPassword"
              value={formData.verifyPassword}
              onChange={handleChange}
              required
            />
          </div>
          {/* Error message displayed if passwords don't match */}
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button type="submit" className="btn btn-primary mt-3">Sign Up</button>
          {/* Success message displayed below the button */}
          {message && <p className="message">{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default Signup;
