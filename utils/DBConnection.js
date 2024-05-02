import pg from "pg";
const { Pool } = pg;

async function connectToDB() {
  const pool = new Pool({
    user: process.env.PGUSER || "postgres",
    host: process.env.PGHOST || "bibliotheca-postgres",
    database: process.env.PGDATABASE || "postgres",
    password: process.env.PGPASSWORD || "postgres",
    port: process.env.PGPORT || 5432,
  });

  try {
    await pool.query("SELECT NOW()");
  } catch (err) {
    console.error(err);
    return err;
  } finally {
    await pool.end();
  }
}

export default connectToDB;
