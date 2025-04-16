import React, { useState } from 'react';
import ClickHouseForm from './components/ClickHouseForm';
import FlatFileForm from './components/FlatFileForm';
import StatusDisplay from './components/StatusDisplay';
import { exportClickHouseToCSV, importCSVToClickHouse } from './Api';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // 🔥 Link to our new CSS file

const Home = () => {
  const navigate = useNavigate();
  const [source, setSource] = useState('ClickHouse');
  const [file, setFile] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [formtable, setFormtable] = useState('');

  const [formData, setFormData] = useState({
    clickhouseHost: '',
    clickhousePort: '',
    clickhouseDatabase: '',
    clickhouseUser: '',
    clickhouseJWT: '',
    tableName: '',
    query: '',
    fileName: '',
  });

  const handleSourceChange = (e) => {
    setSource(e.target.value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      let result;
      if (source === 'ClickHouse') {
        try {
          const result = await exportClickHouseToCSV(formData.query, formData.fileName);
          if (result) {
            setMessage('Exported to CSV file: ' + result.success);
            alert(result.message);
            navigate('/queryform')
          }
        } catch (error) {
          console.error('Error during CSV export:', error); // Log the error for debugging
          alert('An error occurred during the export. Please try again.');
          navigate('/')
        }
      } else {
        
        try {
          const result = await importCSVToClickHouse(file, formtable);
          if (result) {
            setMessage('Exported to ClickHouse: ' + result.success);
            alert(result.message);
            navigate('/queryform')
          }
        } catch (error) {
          console.error('Error during ClickHouse export:', error); // Log the error for debugging
          alert('An error occurred during the export. Please try again.');
          navigate('/')
        }

      }
    } catch (error) {
      navigate('/');
      setMessage('An error occurred: ' + error.message);
    }

    setLoading(false);
  };
  const getToken = () => localStorage.getItem('token');
  console.log(getToken);

  return (
    <div className="home-container">
      <h1 className="main-heading">ClickHouse & Flat File Data Ingestion Tool</h1>

      <div className="source-selector">
        <label>
          Choose Data Source:
          <select value={source} onChange={handleSourceChange} className="dropdown">
            <option value="ClickHouse">ClickHouse</option>
            <option value="FlatFile">Flat File</option>
          </select>
        </label>
      </div>

      <div className="form-container">
        {source === 'ClickHouse' ? (
          <ClickHouseForm formData={formData} setFormData={setFormData} />
        ) : (
          <FlatFileForm
            formtable={formtable}
            file={file}
            setFile={setFile}
            setFormtable={setFormtable}
            handleFileChange={handleFileChange}
          />
        )}
      </div>

      <button className="submit-button" onClick={handleSubmit}>
        🚀 Start Ingestion
      </button>

      {loading && <p className="loading">Processing...</p>}
      <StatusDisplay message={message} />
    </div>
  );
};

export default Home;
