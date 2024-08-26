require("dotenv").config();
const { Pool } = require('pg');
const app = require("./app");

const pool = new Pool({
  user: process.env.DB_USERNAME,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on: localhost:${PORT}`);
});