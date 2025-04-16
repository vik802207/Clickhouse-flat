const express = require('express');
const router = express.Router();
const { clickhouseToCSV, csvToClickhouse } = require('../ingestionFunctions'); // 🛠 Corrected path

// ClickHouse to CSV
router.post('/clickhouse-to-csv', async (req, res) => {
  const { query, fileName } = req.body;

  const result = await clickhouseToCSV(query, fileName);
  res.json(result);
});

// CSV to ClickHouse
router.post('/csv-to-clickhouse', async (req, res) => {
  const { fileName, tableName } = req.body;
  console.log(fileName,tableName);
  const result = await csvToClickhouse(fileName, tableName);
  res.json(result);
});

module.exports = router;
