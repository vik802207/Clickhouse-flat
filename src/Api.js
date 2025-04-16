const apiUrl = 'http://localhost:8000/api'; // Replace with your backend URL

// Function to export data from ClickHouse to CSV
export const exportClickHouseToCSV = async (query, fileName) => {
  try {
    const response = await fetch(`${apiUrl}/clickhouse-to-csv`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query, fileName }),
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error exporting from ClickHouse to CSV:', error);
    throw error;
  }
};

// Function to import data from CSV to ClickHouse
export const importCSVToClickHouse = async (fileName, tableName) => {
  try {
    const response = await fetch(`${apiUrl}/csv-to-clickhouse`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fileName,     // example: "industry.csv"
        tableName,    // example: "nauserya"
      }),
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error importing CSV to ClickHouse:', error);
    throw error;
  }
};

