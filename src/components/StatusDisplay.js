import React from 'react';
import './StatusDisplay.css'; // Import the CSS file

const StatusDisplay = ({ message }) => {
  return (
    <div className="status-display-container">
      {message && <p className="status-message">{message}</p>}
    </div>
  );
};

export default StatusDisplay;
