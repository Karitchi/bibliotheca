import express from "express";
import signUpRouter from "./routes/signUp.js";
import connectToDB from "./utils/DBConnection.js";

await connectToDB();

const app = express();

const port = process.env.NODE_PORT || 3000;
const host = process.env.NODE_HOST || "127.0.0.1";

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/sign-up", signUpRouter);

app.listen(port, host, () => {
  console.log(`Server listening on http://${host}:${port}`);
});
