const logger = require("../utils/logger");

/**
 * @param {Error & { statusCode?: number }} err
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} _next
 */
const errorHandler = (err, req, res, _next) => {
  const statusCode = err.statusCode || 500;

  if (statusCode >= 500) {
    logger.error(err, "unexpected error");
  } else {
    logger.warn({ statusCode, path: req.originalUrl }, err.message);
  }

  const message = statusCode >= 500 ? "Internal server error" : err.message;

  res.status(statusCode).json({ message });
};

module.exports = errorHandler;