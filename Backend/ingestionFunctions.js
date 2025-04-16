const { createClient } = require('@clickhouse/client');
const fs = require('fs');
const Papa = require('papaparse');

// Create a ClickHouse client instance
const clickhouse = createClient({
  url: 'https://rp9etccikx.asia-southeast1.gcp.clickhouse.cloud:8443',
  username: 'default',
  password: 'euS3i1AsT6F.i',
});

// ✅ ClickHouse to CSV Export
async function clickhouseToCSV(query, fileName) {
  try {
    if (!query || typeof query !== 'string') {
      throw new Error('Invalid query provided');
    }

    const resultSet = await clickhouse.query({
      query,
      format: 'JSON'
    }).then(response => response.json());

    // Convert rows to CSV
    const csv = Papa.unparse(resultSet.data); // Make sure to use `.data`
    fs.writeFileSync(fileName, csv);

    return { success: true, message: 'Data exported to CSV successfully.' };
  } catch (error) {
    console.error('Error exporting to CSV:', error);
    return { success: false, message: error.message };
  }
}




// ✅ CSV to ClickHouse Import with Auto Table Creation
async function csvToClickhouse(fileName, tableName) {
  console.log(fileName)
  try {
    // 1. Check if file exists
    if (!fs.existsSync(fileName)) {
      throw new Error(`File not found: ${fileName}`);
    }

    // 2. Read file content
    const fileContent = fs.readFileSync(fileName, 'utf8');
    const parsed = Papa.parse(fileContent, { header: true });

    const records = parsed.data.filter(row => Object.values(row).some(v => v !== '')); // skip empty lines

    if (records.length === 0) {
      throw new Error('CSV file is empty or has no valid rows.');
    }

    const columns = Object.keys(records[0]);

    console.log('Columns detected:', columns);

    // 3. Auto-create table query
    const createTableQuery = `CREATE TABLE IF NOT EXISTS ${tableName} (
      ${columns.map(col => {
        const val = records[0][col];
        return !isNaN(Number(val)) ? `${col} UInt32` : `${col} String`;
      }).join(',')}
    ) ENGINE = MergeTree()
    ORDER BY ${columns[0]};`;

    console.log('Generated create table query:', createTableQuery);

    // 4. Execute CREATE TABLE
    await clickhouse.command({ query: createTableQuery });

    console.log('Table created successfully.');

    // 5. Prepare INSERT values
    const values = records
      .map(record => {
        return '(' + columns.map(col => {
          const val = record[col];
          if (!isNaN(Number(val))) {
            return val === '' || val === null || val === undefined ? '0' : val;
          } else {
            return `'${(val || '').replace(/'/g, "\\'")}'`;
          }
        }).join(',') + ')';
      })
      .join(',');

    const insertQuery = `INSERT INTO ${tableName} (${columns.join(',')}) VALUES ${values}`;

    console.log('Generated insert query:', insertQuery);

    // 6. Execute INSERT
    await clickhouse.command({ query: insertQuery });

    console.log('Data inserted successfully.');

    return { success: true, message: 'Data imported to ClickHouse successfully.' };
  } catch (error) {
    console.error('Error importing CSV to ClickHouse:', error);
    return { success: false, message: error.message };
  }
}
module.exports = {
  clickhouseToCSV,
  csvToClickhouse,
};
