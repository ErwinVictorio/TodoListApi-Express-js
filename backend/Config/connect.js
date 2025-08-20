import mysql from "mysql2/promise";
import dotenv from 'dotenv';

dotenv.config(); // make sure env is loaded


// MySQL config
const config = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER || "root  ",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME
};

let pool;

async function getPool() {
  if (pool) return pool;
  pool = mysql.createPool(config);
  console.log("✅ Connected to MySQL");
  return pool;
}

// SELECT queries (with params)
export async function ExecuteRecordSetQry(qry, params = []) {
  const pool = await getPool();
  const [rows] = await pool.query(qry, params);
  return rows;
}

// INSERT/UPDATE/DELETE queries
export async function ExecuteQry(qry, params = []) {
  const pool = await getPool();
  const [result] = await pool.query(qry, params);

  return result;  // MySQL result object (contains insertId, affectedRows, etc.)
}
