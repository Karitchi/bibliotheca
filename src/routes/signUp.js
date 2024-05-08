import express from "express";
import publicDirectory from "../utils/publicDirectoryPath.js";
import { createAccount } from "../utils/signUp.js";

const router = express.Router();

router.get("/", function (req, res, next) {
  res.sendFile(publicDirectory + "/sign-up.html");
});

router.post("/", (req, res, next) => {
  try {
    createAccount(req.body.email, req.body.password);
  } catch (error) {
    console.log("Error creating account:");
    console.log(error.message);
  }
  res.send("Account created successfully");
});

export default router;
