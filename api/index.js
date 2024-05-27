import express from "express";
import mongoose from "mongoose";
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connect to database");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
app.listen(3000, () => {
  console.log("Server is listen port 3000");
});
