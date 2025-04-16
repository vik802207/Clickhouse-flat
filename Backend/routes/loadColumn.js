const express = require('express');
const bodyParser = require('body-parser');
const clickhouse = require('@clickhouse/client'); // Use appropriate ClickHouse client
const fs = require('fs');
const Papa = require('papaparse');

const app = express();
app.use(bodyParser.json()); // To parse JSON requests

const clickhouseClient = clickhouse({
  url: 'http://localhost:8123',
  username: 'default',
  password: 'password',
  database: 'default',
});

// Route to connect to ClickHouse (simulating connection)
app.post('/api/connect', async (req, res) => {
  try {
    const { source, connectionParams, file } = req.body;
    if (source === 'clickhouse') {
      // Try a simple query to check if ClickHouse is accessible
      await clickhouseClient.query('SELECT 1').toPromise();
      res.json({ success: true, message: 'Connected to ClickHouse successfully!' });
    } else {
      res.status(400).json({ success: false, message: 'Invalid source' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to connect to ClickHouse' });
  }
});

// Route to load columns from a ClickHouse table
app.post('/api/load-columns', async (req, res) => {
  try {
    const { source, connectionParams } = req.body;
    if (source === 'clickhouse') {
      const tableColumns = await clickhouseClient.query('DESCRIBE TABLE your_table').toPromise();
      const columns = tableColumns.map(column => column.name);
      res.json({ success: true, columns });
    } else {
      res.status(400).json({ success: false, message: 'Invalid source' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to load columns' });
  }
});

// Route to start ingestion (using CSV file or ClickHouse data)
app.post('/api/start-ingestion', async (req, res) => {
  try {
    const { source, connectionParams, file, selectedColumns } = req.body;
    if (source === 'clickhouse') {
      // Simulate ingestion process for ClickHouse (for now)
      const columnList = selectedColumns.join(', ');
      const insertQuery = `INSERT INTO your_table (${columnList}) VALUES ('value1', 'value2', 'value3')`; // Example query

      // Execute the insertion
      await clickhouseClient.query(insertQuery).toPromise();
      
      res.json({ success: true, message: 'Ingestion completed!', recordCount: 100 }); // Example record count
    } else {
      res.status(400).json({ success: false, message: 'Invalid source' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to start ingestion' });
  }
});