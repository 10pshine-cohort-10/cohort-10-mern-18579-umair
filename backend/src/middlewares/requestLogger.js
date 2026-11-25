const pinoHttp = require("pino-http");
const logger = require("../utils/logger");

const requestLogger = pinoHttp({
  logger,
  serializers: {
    /**
     * @param {{ id: string | number, method: string, url: string }} req
     */
    req: (req) => ({
      id: req.id,
      method: req.method,
      url: req.url,
    }),
    /**
     * @param {{ statusCode: number }} res
     */
    res: (res) => ({
      statusCode: res.statusCode,
    }),
  },
});

module.exports = requestLogger;
