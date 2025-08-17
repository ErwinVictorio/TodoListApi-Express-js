import express from 'express';










//Notes


// mga need install para auth

//npm install bcrypt jsonwebtoken express-validator

// npm install dotenvh
// dotenv → to keep JWT secret, DB credentials, etc. safe sa .env file


// Controller ang bahala sa request → response flow.

// Registration is not just a "gatekeeper" check, it’s a business action (create new record).

// Middleware is only for things like: auth, validation, logging, error handling.