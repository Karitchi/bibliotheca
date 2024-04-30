import express from "express";
import publicDirectory from "../utils/publicDirectoryPath.js";

const router = express.Router();

router.get("/", function (req, res, next) {
  res.sendFile(publicDirectory + "/index.html");
});

router.get("/test", function (req, res, next) {
  res.sendFile(publicDirectory + "/test.html");
});

export default router;
