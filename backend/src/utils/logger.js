const pino = require("pino");

const isDevelopment = process.env.NODE_ENV === "development";

const logger = pino({
  level: process.env.LOG_LEVEL || "info",
  transport: isDevelopment
    ? {
        target: "pino-pretty",
        options: { colorize: true },
      }
    : undefined,
});

module.exports = logger;
