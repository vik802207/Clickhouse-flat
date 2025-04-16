import React, { useState } from 'react';
import axios from 'axios';
import './LoadColumn.css';

function LoadColumn() {
  const [query, setQuery] = useState('');
  const [tableName, setTableName] = useState('');
  const [columns, setColumns] = useState([]);
  const [selectedColumns, setSelectedColumns] = useState([]);
  const [data, setData] = useState([]);
  const [csvData, setCsvData] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleColumnToggle = (columnName) => {
    setSelectedColumns((prevSelected) =>
      prevSelected.includes(columnName)
        ? prevSelected.filter((col) => col !== columnName)
        : [...prevSelected, columnName]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    try {
      const response = await axios.post('http://localhost:8000/api/load-columns', {
        query,
        tableName,
      });

      if (response.data.success) {
        setColumns(response.data.columns);
        setData(response.data.data);
        setCsvData(response.data.csv);
        setStatus('✅ Query executed successfully! Select columns to ingest.');
      } else {
        setStatus('❌ Failed to load columns and data.');
      }
    } catch (error) {
      setStatus('❌ Error occurred while fetching data.');
      console.error(error);
    }
    setLoading(false);
  };

  const handleDownloadCSV = () => {
    const blob = new Blob([csvData], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${tableName}-data.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="load-column-container">
      <h1 className="title">🚀 ClickHouse Query Executor</h1>
      <form onSubmit={handleSubmit} className="query-form">
        <div className="form-group">
          <label>Query:</label>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            required
            placeholder="SELECT * FROM table_name"
            className="input-box"
          />
        </div>
        <div className="form-group">
          <label>Table Name:</label>
          <input
            type="text"
            value={tableName}
            onChange={(e) => setTableName(e.target.value)}
            required
            className="input-box"
          />
        </div>
        <button type="submit" disabled={loading} className="run-button">
          {loading ? '⏳ Running...' : '▶ Run Query'}
        </button>
      </form>

      {status && <p className="status">{status}</p>}

      {columns.length > 0 && (
        <div className="columns-section">
          <h3>Select Columns to Ingest:</h3>
          <div className="checkbox-group">
            {columns.map((col, index) => (
              <label key={index} className="checkbox-label">
                <input
                  type="checkbox"
                  checked={selectedColumns.includes(col)}
                  onChange={() => handleColumnToggle(col)}
                />
                {col}
              </label>
            ))}
          </div>
        </div>
      )}

      {data.length > 0 && (
        <div className="table-section">
          <h3>📊 Table Data:</h3>
          <table className="data-table">
            <thead>
              <tr>
                {columns.map((col, index) => (
                  <th key={index}>{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {columns.map((col, colIndex) => (
                    <td key={colIndex}>{row[col]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {csvData && (
        <button onClick={handleDownloadCSV} className="download-btn">
          💾 Download CSV
        </button>
      )}
    </div>
  );
}

export default LoadColumn;
