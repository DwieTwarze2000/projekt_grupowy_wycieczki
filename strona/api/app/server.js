import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

let configInit = dotenv.config();
if (configInit.error) {
  throw 'Error loading .env file';
}

const app = express();

app.use(cors());

app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});
