import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Dashboard.css'; // Assuming you have a CSS file for custom styles

const Dashboard = () => {
  const location = useLocation();
  const { username, email } = location.state || {}; // Extract username and email from state

  return (
    <div className="dashboard-container">
      <div className="welcome-message">
        <h2>Welcome {username ? username : "Guest"}!</h2> {/* Display the username or default to "Guest" */}
        {email ? <p className="email-info">Email: {email}</p> : <p>Email not available</p>} {/* Display email if available */}
      </div>
      
      <div className="transaction-management">
        <h3>Manage Transactions</h3>
        <Link to="/transactions" className="btn btn-primary">
          Go to Transactions
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
