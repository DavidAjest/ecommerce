import express from "express";
import mongoose from "mongoose";
import itemRoutes from "./routes/items";

require("dotenv").config();
const app = express();
const DB_URL: string = process.env.DB_URL || "your-default-db-url";
const cors = require("cors");

// app use
app.use(cors());
app.use(express.json());

//db
mongoose
  .connect(DB_URL)
  .then(() => console.log("connected!"))
  .catch((e) => console.log("could not connect to db:", e));

app.use("/items", itemRoutes);

app.listen(5000, () => {
  console.log("listening to port 5000");
});
