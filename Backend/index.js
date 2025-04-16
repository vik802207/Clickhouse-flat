const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');
const ingestionRoutes=require('./routes/ingestionRoutes')
const { createClient } = require('@clickhouse/client');
const bodyParser = require('body-parser');
app.use(express.json());
const connectDB=require('./config/db')
connectDB();

const Papa = require('papaparse'); // Make sure it's imported at the top
// Define routes for ClickHouse and Flat File ingestion
app.use(cors())

app.get('/', (req, res) => {
  res.send('Backend is running!');
});


app.use('/api', ingestionRoutes);
app.use("/api/auth", require('./routes/auth'));

// Create ClickHouse client instance
const clickhouseClient = createClient({
  url: 'https://rp9etccikx.asia-southeast1.gcp.clickhouse.cloud:8443',
  username: 'default',
  password: 'euS3i1AsT6F.i',
});

// Route to load columns from a ClickHouse table
app.post('/api/load-columns', async (req, res) => {
    try {
      const { query, tableName } = req.body;
  
      const resultSet = await clickhouseClient.query({
        query,
        format: 'JSON',
      }).then(response => response.json());
  
      const columns = resultSet.meta.map(col => col.name);
      const data = resultSet.data;
  
      // Convert data to CSV using Papa
      const csv = Papa.unparse(data);
  
      res.json({
        success: true,
        columns,
        data,
        csv, // You get this if frontend needs CSV download or preview
      });
    } catch (error) {
      console.error('Error loading columns and data:', error);
      res.status(500).json({ success: false, message: 'Failed to load columns and data' });
    }
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
