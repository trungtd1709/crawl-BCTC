require("dotenv").config();
const { inserReportXLSX } = require("./import_xlsx");
const db = require("./models");
const { connectDB, syncDB } = require("./services/database");

// const app = express();

// app.get("/", async (req, res) => {
//   res.send("Hello World!");
// });

// const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

const start = async () => {
  connectDB();
  //   await syncDB();
  await inserReportXLSX();
};

start();
// await crawlData();
