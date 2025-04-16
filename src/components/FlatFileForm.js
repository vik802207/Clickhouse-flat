import React from 'react';
import './FlatFileForm.css'
const FlatFileForm = ({ formtable, file, setFile, setFormtable }) => {
  return (
    <div className="flatfile-form-container">
      <h3 className="form-title">📄 Flat File Configuration</h3>

      <div className="form-group">
        <label className="input-label">🗂️ CSV File Name</label>
        <input
          type="text"
          value={file}
          onChange={(e) => setFile(e.target.value)}
          placeholder="e.g., industry.csv"
          className="input-box animated-input"
        />
      </div>

      <div className="form-group">
        <label className="input-label">📋 Table Name</label>
        <input
          type="text"
          placeholder="e.g., industry_data"
          value={formtable}
          onChange={(e) => setFormtable(e.target.value)}
          className="input-box animated-input"
        />
      </div>
    </div>
  );
};

export default FlatFileForm;
