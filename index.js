import express from 'express';

import dotenv from "dotenv";
import { crawlData } from './src/services/crawl.js';
dotenv.config();

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

crawlData();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});