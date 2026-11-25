require("dotenv").config();

const app = require("./app");
const logger = require("./utils/logger");

const PORT = process.env.PORT || 5000;

app.listen(PORT, (error) => {
  if (error) {
    logger.error(error, "failed to start server");
    process.exit(1);
  }

  logger.info(`Server running on port ${PORT}`);
});
