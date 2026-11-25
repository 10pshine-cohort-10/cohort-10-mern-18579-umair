const express = require("express");
const requestLogger = require("./middlewares/requestLogger");
const notFound = require("./middlewares/notFound");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

app.use(requestLogger);
app.use(express.json());

/**
 * health check route
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

app.use(notFound);
app.use(errorHandler);

module.exports = app;
