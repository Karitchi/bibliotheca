import express from "express";
import signUpRouter from "./routes/signUp.js";
import * as db from "./utils/db.js";

try {
  const NOW = await db.query("SELECT NOW()");
  console.log("Database connection established successfully.");
} catch (error) {
  console.error("Failed to connect to the database:", error);
}

const app = express();

const port = process.env.NODE_PORT || 3000;
const host = process.env.NODE_HOST || "0.0.0.0";

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/sign-up", signUpRouter);

app.listen(port, host, () => {
  console.log(`Server listening on http://${host}:${port}`);
});
