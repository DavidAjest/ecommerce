import mongoose from "mongoose";
import itemModel from "../models/itemModel";
import items from "./items.json";
require("dotenv").config();
const DB_URL: string = process.env.DB_URL || "your-default-db-url";
mongoose
  .connect(DB_URL)
  .then(() => console.log("connected!"))
  .catch((e) => console.log("could not connect to db:", e));

const seedDB = async () => {
  await itemModel.deleteMany({});
  for (let i = 0; i < items.length; i++) {
    const item = await itemModel.create({ ...items[i] });
  }
};

seedDB();
