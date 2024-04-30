import express from "express";
import publicDirectory from "../utils/publicDirectoryPath.js";

const router = express.Router();

router.get("/:id", function (req, res, next) {
  res.sendFile(publicDirectory + "/book.html");
});

router.get("/new", function (req, res, next) {
  res.sendFile(publicDirectory + "/new-book.html");
});

router.get("/:id/edit", function (req, res, next) {
  res.sendFile(publicDirectory + "/edit-book.html");
});

export default router;
