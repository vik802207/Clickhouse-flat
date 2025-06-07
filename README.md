# 📦📄 ClickHouse-CSV Ingestion Tool

A Bidirectional Data Ingestion Tool for seamless transfer between **ClickHouse** and **Flat Files (CSV)**.  
Manage your data workflows with JWT-secured APIs, beautiful UI, and easy import/export capabilities.

---

## 🚀 Features

- 🔁 **Bidirectional Ingestion**: Export data from ClickHouse to CSV and import CSV to ClickHouse.
- 🔐 **JWT Authentication**: Secure access with login/register functionality.
- 🧾 **Dynamic Query Support**: Run custom ClickHouse queries via the frontend.
- 🎨 **Modern UI**: React-based frontend with clean, fancy dashboard styles.
- ⚙️ **Node.js + Express Backend**: Fast, lightweight, and easily extendable.

---

## 🏗️ Tech Stack

- **Frontend**: React, Tailwind CSS or styled-components
- **Backend**: Node.js, Express, JWT Auth
- **Database**: ClickHouse Cloud
- **Others**: Mongoose (for optional user DB), bcryptjs (for password hashing)

---

## 📁 Project Structure
```bash
clickhouse-csv-ingestion/
├── backend/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   └── ingestionFunctions.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.js
├── .env
└── README.md
```
## Screnshot

![Alt text](https://github.com/vik802207/Clickhouse-flat/blob/main/img/Screenshot%20(427).png?raw=true)
![Alt text](https://github.com/vik802207/Clickhouse-flat/blob/main/img/Screenshot%20(428).png?raw=true)
![Alt text](https://github.com/vik802207/Clickhouse-flat/blob/main/img/Screenshot%20(429).png?raw=true)
![Alt text](https://github.com/vik802207/Clickhouse-flat/blob/main/img/Screenshot%20(426).png?raw=true)
![Alt text](https://github.com/vik802207/Clickhouse-flat/blob/main/img/Screenshot%20(430).png?raw=true)
![Alt text](https://github.com/vik802207/Clickhouse-flat/blob/main/img/Screenshot%20(431).png?raw=true)
---
## ClickHouse Database
---
![Alt text](https://github.com/vik802207/Clickhouse-flat/blob/main/img/Screenshot%20(432).png?raw=true)


## 🚀 Project Setup Instructions

# Clone the repository
git clone https://github.com/vik802207/Clickhouse-flat

## 🔧 Backend Setup
```bash
cd backend
node index.js
```

## 💻 Frontend Setup
```bash
cd Bidirectional ClickHouse
npm install
npm start
```

## 📤 API Endpoints

| Method | Endpoint             | Description                     |
| ------ | -------------------- | ------------------------------- |
| POST   | `/clickhouse-to-csv` | Export ClickHouse data to CSV   |
| POST   | `/csv-to-clickhouse` | Import CSV data into ClickHouse |
| POST   | `/register`          | Register a new MCP user         |
| POST   | `/login`             | Login MCP and get JWT           |

## 📌 Future Improvements

- **File Upload Interface**: Implement an easy-to-use file upload feature for importing CSVs directly through the UI.
- **Query Validator with syntax hints**: Add a query validation tool that checks for syntax errors in real-time and offers helpful hints.
- **Download CSV directly from browser**: Enable direct CSV download functionality from the UI after exporting data from ClickHouse.
- **Admin dashboard with table stats**: Build a dedicated admin dashboard displaying relevant table statistics, including row counts, data types, and column information.
## 🚀 Live Demo

Check out the live demo of **ClickPorter** - ClickHouse ↔️ CSV Connector:

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Available-brightgreen)](https://clickhouse-flat.vercel.app/)


### Demo Features:
- **Export ClickHouse Data to CSV**: Try exporting data from ClickHouse to CSV.
- **Import CSV to ClickHouse**: Import your CSV files into ClickHouse seamlessly.
- **Dynamic Queries**: Run custom ClickHouse queries directly from the UI.
- **MCP Login**: Register and log in as an MCP (Micro Collection Partner) user.

---

Feel free to explore the demo to get a firsthand look at how the tool works.
## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📞 Contact

For any questions or feedback, feel free to reach out:

- **Name**: Vikash Gupta
- **Email**: vikashg802207@gmail.com
- **GitHub**: https://github.com/vik802207


