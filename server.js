require("dotenv").config();
const app = require("./app");
const { sequelize } = require("./models"); // Import sequelize dari models

const PORT = process.env.PORT || 3000;

sequelize.sync({ force: false }) // Synchronize Sequelize models
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on: localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });
