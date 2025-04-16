const { ClickHouse } = require('clickhouse');

// Connect to ClickHouse
const clickhouse = new ClickHouse({
  url: 'http://localhost:8123', // ClickHouse server URL
  port: 8123,
  user: 'default',
  password: '',
  database: 'default',
});

async function createTable() {
  const query = `
    CREATE TABLE test_users (
      id UInt32,
      name String,
      age UInt8
    ) ENGINE = MergeTree()
    ORDER BY id;
  `;

  try {
    await clickhouse.query(query).toPromise();
    console.log('Table created successfully!');
  } catch (error) {
    console.error('Error creating table:', error);
  }
}

createTable();
