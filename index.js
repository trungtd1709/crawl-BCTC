require("dotenv").config();
const { inserReportXLSX } = require("./import_xlsx");
const db = require("./models");
const { connectDB, syncDB } = require("./database");
const { crawlData } = require("./services/crawl");
const { CronJob } = require("cron");

const start = async () => {
  connectDB();
  // await syncDB();
  // await inserReportXLSX();
  await crawlData();
};

// const job = new CronJob(
//   "16 11 * * *",
//   function() {
//     start().catch(err => console.error(err));
//   },
//   null,
//   true,
//   "Asia/Bangkok"
// );


// const app = express();

// app.get("/", async (req, res) => {
//   res.send("Hello World!");
// });

// const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

start();