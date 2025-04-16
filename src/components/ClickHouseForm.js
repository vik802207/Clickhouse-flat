import React from 'react';
import './ClickHouseForm.css'
const ClickHouseForm = ({ formData, setFormData }) => {
  return (
    <div className="clickhouse-form-container">
      <h3>ClickHouse Configuration</h3>

      <div className="form-group">
        <input
          type="text"
          placeholder="ClickHouse Host"
          value={formData.clickhouseHost}
          onChange={(e) => setFormData({ ...formData, clickhouseHost: e.target.value })}
          className="input-box"
        />
      </div>

      <div className="form-group">
        <input
          type="text"
          placeholder="ClickHouse Port"
          value={formData.clickhousePort}
          onChange={(e) => setFormData({ ...formData, clickhousePort: e.target.value })}
          className="input-box"
        />
      </div>

      <div className="form-group">
        <input
          type="text"
          placeholder="ClickHouse Database"
          value={formData.clickhouseDatabase}
          onChange={(e) => setFormData({ ...formData, clickhouseDatabase: e.target.value })}
          className="input-box"
        />
      </div>

      <div className="form-group">
        <input
          type="text"
          placeholder="ClickHouse User"
          value={formData.clickhouseUser}
          onChange={(e) => setFormData({ ...formData, clickhouseUser: e.target.value })}
          className="input-box"
        />
      </div>

      <div className="form-group">
        <input
          type="text"
          placeholder="ClickHouse JWT Token"
          value={formData.clickhouseJWT}
          onChange={(e) => setFormData({ ...formData, clickhouseJWT: e.target.value })}
          className="input-box"
        />
      </div>

      {/* ✅ Newly Added Fields */}
      <div className="form-group">
        <input
          type="text"
          placeholder="Table Name"
          value={formData.tableName}
          onChange={(e) => setFormData({ ...formData, tableName: e.target.value })}
          className="input-box"
        />
      </div>

      <div className="form-group">
        <input
          type="text"
          placeholder="Query"
          value={formData.query}
          onChange={(e) => setFormData({ ...formData, query: e.target.value })}
          className="input-box"
        />
      </div>

      <div className="form-group">
        <input
          type="text"
          placeholder="File Name"
          value={formData.fileName}
          onChange={(e) => setFormData({ ...formData, fileName: e.target.value })}
          className="input-box"
        />
      </div>
    </div>
  );
};

export default ClickHouseForm;
