import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [storedUsers, setStoredUsers] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  // Fetch stored users from JSONBin on component mount
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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;

    // Basic validation
    if (!email || !password) {
      setErrorMessage('Please fill in both fields.');
      return;
    }

    // Check if email and password match any stored user
    const user = storedUsers.find((user) => user.email === email && user.password === password);

    if (user) {
      setErrorMessage('');
      // Navigate to the dashboard, passing username and email in the state
      navigate('/dashboard', { state: { username: user.username, email: user.email } });
    } else {
      setErrorMessage('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        {errorMessage && <div className="error">{errorMessage}</div>}
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
};

export default Login;
