import express from "express";
import indexRouter from "./routes/index.js";
import booksRouter from "./routes/books.js";

const app = express();

const port = process.env.PORT || 3000;
const host = process.env.HOST || "127.0.0.1";

app.use("/", indexRouter);
app.use("/books", booksRouter);

app.listen(port, host, () => {
  console.log(`Server listening on http://${host}:${port}`);
});
