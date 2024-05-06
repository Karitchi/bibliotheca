import express from "express";
import publicDirectory from "../utils/publicDirectoryPath.js";
import { createAccount } from "../utils/signUp.js";

const router = express.Router();

router.get("/", function (req, res, next) {
  res.sendFile(publicDirectory + "/sign-up.html");
});

router.post("/", (req, res, next) => {
  createAccount(req.body.username, req.body.email, req.body.password);
  res.send("Account created");
});

export default router;
