require("dotenv").config();
const db = require("./models");

console.log("process.env.DB_HOST", process.env.DB_HOST);
console.log("process.env.DB_USER", process.env.DB_USER);
console.log("process.env.DB_PASSWORD", process.env.DB_PASSWORD);
console.log("process.env.DB_DIALECT", process.env.DB_DIALECT);


// const app = express();

// app.get("/", async (req, res) => {
//   res.send("Hello World!");
// });

// const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

try {
  db.sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

// await crawlData();
