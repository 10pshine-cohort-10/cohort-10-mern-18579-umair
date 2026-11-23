const express = require("express");

const app = express();

// parse json body
app.use(express.json());

/**
 * health check route
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

module.exports = app;