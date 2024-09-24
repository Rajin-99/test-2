import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Transaction.css';
import axios from 'axios';

const Transaction = ({ email }) => {
  const navigate = useNavigate();
  const [transactions, setTransactions] = useState([]);
  const [formData, setFormData] = useState({
    accountNumberFrom: '',
    accountNumberTo: '',
    amount: '',
    type: 'Deposit', // Default to Deposit
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTransaction = {
      email, // Use the logged-in user's email
      type: formData.type,
      amount: parseFloat(formData.amount), // Ensure amount is a number
      accountNumberFrom: formData.type === 'eTransfer' ? formData.accountNumberFrom : formData.accountNumber,
      accountNumberTo: formData.type === 'eTransfer' ? formData.accountNumberTo : null, // Use null if not applicable
      date: new Date().toISOString(), // Store date in ISO format
    };

    // Update local transactions state
    setTransactions((prevTransactions) => [...prevTransactions, newTransaction]);
    setFormData({ accountNumberFrom: '', accountNumberTo: '', amount: '', type: 'Deposit' }); // Reset form

    // Store transaction in JSONBin
    await storeTransaction(newTransaction);
  };

  const storeTransaction = async (transaction) => {
    const url = 'https://api.jsonbin.io/v3/b/66edd1bdacd3cb34a888376c'; // Your JSONBin URL
    const headers = {
      'Content-Type': 'application/json',
      'X-Master-Key': '$2a$10$kl0yLBd/TqSf1nKZgg8kieJyOilC2pybTdb5VflzKszVx6vOMLvEG', // Your Master Key
    };

    try {
      // Retrieve existing transactions
      const response = await axios.get(url, { headers });
      const existingData = response.data.record;

      // Add the new transaction to existing data
      const updatedTransactions = existingData.transactions || [];
      updatedTransactions.push(transaction);

      // Prepare data to send
      const data = {
        transactions: updatedTransactions,
      };

      // Send POST request to update the JSONBin
      await axios.put(url, data, { headers });
      alert('Transaction stored successfully!');
    } catch (error) {
      console.error('Error storing transaction:', error);
      alert('Failed to store transaction.');
    }
  };

  const renderForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        {formData.type === 'eTransfer' ? (
          <>
            <div className="form-group">
              <label htmlFor="accountNumberFrom">Account Number (From)</label>
              <input
                type="text"
                className="form-control"
                id="accountNumberFrom"
                name="accountNumberFrom"
                value={formData.accountNumberFrom}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="accountNumberTo">Account Number (To)</label>
              <input
                type="text"
                className="form-control"
                id="accountNumberTo"
                name="accountNumberTo"
                value={formData.accountNumberTo}
                onChange={handleChange}
                required
              />
            </div>
          </>
        ) : (
          <div className="form-group">
            <label htmlFor="accountNumber">Account Number</label>
            <input
              type="text"
              className="form-control"
              id="accountNumber"
              name="accountNumber"
              value={formData.accountNumber}
              onChange={handleChange}
              required
            />
          </div>
        )}
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            className="form-control"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            required
            min="0" // Ensure only positive numbers are allowed
            step="any" // Allow any decimal places
          />
        </div>
        <button type="submit" className="btn-custom mt-3">
          {formData.type === 'eTransfer' ? 'Send e-Transfer' : formData.type}
        </button>
      </form>
    );
  };

  const handleLogout = () => {
    navigate('/login'); // Redirect to the login page
  };

  return (
    <div className="container py-5">
      <h2>Transaction Management</h2>

      {/* Transaction Type Selection */}
      <div className="mb-4">
        <h3>Select Transaction Type</h3>
        <div className="btn-group">
          <button
            className={`btn ${formData.type === 'Deposit' ? 'active' : ''}`}
            style={{ backgroundColor: formData.type === 'Deposit' ? '#065c70' : '#fff', color: formData.type === 'Deposit' ? '#fff' : '#065c70' }}
            onClick={() => setFormData({ ...formData, type: 'Deposit' })}
          >
            Deposit
          </button>
          <button
            className={`btn ${formData.type === 'Withdrawal' ? 'active' : ''}`}
            style={{ backgroundColor: formData.type === 'Withdrawal' ? '#065c70' : '#fff', color: formData.type === 'Withdrawal' ? '#fff' : '#065c70' }}
            onClick={() => setFormData({ ...formData, type: 'Withdrawal' })}
          >
            Withdraw
          </button>
          <button
            className={`btn ${formData.type === 'eTransfer' ? 'active' : ''}`}
            style={{ backgroundColor: formData.type === 'eTransfer' ? '#065c70' : '#fff', color: formData.type === 'eTransfer' ? '#fff' : '#065c70' }}
            onClick={() => setFormData({ ...formData, type: 'eTransfer', accountNumberFrom: '', accountNumberTo: '' })} // Reset eTransfer fields
          >
            e-Transfer
          </button>
        </div>
      </div>

      {/* Render Form Based on Transaction Type */}
      {renderForm()}

      {/* Transaction History */}
      <div className="mt-4">
        <h3>Transaction History</h3>
        <table className="table table-striped transaction-table mt-3">
          <thead>
            <tr>
              <th>Date</th>
              <th>Account Number (From)</th>
              <th>Account Number (To)</th>
              <th>Type</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index}>
                <td>{new Date(transaction.date).toLocaleDateString()}</td>
                <td>{transaction.accountNumberFrom || transaction.accountNumber}</td> {/* Adjust for eTransfer */}
                <td>{transaction.accountNumberTo || '-'}</td> {/* Display '-' if not applicable */}
                <td>{transaction.type}</td>
                <td>${transaction.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Logout Button Below Transaction History */}
      <button className="btn-logout mt-3" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Transaction;
