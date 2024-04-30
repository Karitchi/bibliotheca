import pg from "pg";
const { Client } = pg;

async function connectToDB() {
  const client = new Client();
  await client.connect();

  try {
    await client.query("SELECT NOW()");
  } catch (err) {
    console.error(err);
    return err;
  } finally {
    await client.end();
  }
}

export default connectToDB;
