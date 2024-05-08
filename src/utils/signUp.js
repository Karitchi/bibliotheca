import pg from "pg";
import Joi from "joi";
const { Client } = pg;

// Define schema for email validation
const emailSchema = Joi.string().email().required();

// Define schema for password validation
const passwordSchema = Joi.string().min(6).required();

function validateCredentials(email, password) {
  const validationResult = {
    email: emailSchema.validate(email),
    password: passwordSchema.validate(password),
  };

  // Check for email validation error
  if (validationResult.email.error) {
    throw new Error("Invalid email: " + validationResult.email.error.message);
  }

  // Check for password validation error
  if (validationResult.password.error) {
    throw new Error(
      "Invalid password: " + validationResult.password.error.message
    );
  }

  return validationResult;
}

async function createAccount(email, password) {
  const validationResult = validateCredentials(email, password);
}

export { createAccount };
