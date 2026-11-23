require("dotenv").config();

const app = require("./app");

const PORT = process.env.PORT || 5000;

app.listen(PORT, (error) => {
  if (error) {
    console.error(`failed to start server: ${error.message}`);
    process.exit(1);
  }

  console.log(`Server running on port ${PORT}`);
});
