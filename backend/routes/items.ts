import express from "express";
import mongoose from "mongoose";
import itemModel from "../models/itemModel";
import itemControllers from "../controllers/itemController";

const router = express.Router();

router.get("/", itemControllers.showItems);
router.get("/:id", itemControllers.showItemById);

export default router;
