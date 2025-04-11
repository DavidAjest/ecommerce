import { Request, Response } from "express";
import itemModel from "../models/itemModel";

interface Item {
  _id: string;
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
  __v: number;
}

const showItems = async (req: Request, res: Response) => {
  const items: string[] = await itemModel.find();
  res.status(200).json({ items });
};

const showItemById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const item: Item | null = await itemModel.findById(id);
  console.log(item);
  res.status(200).json({ item });
};

export default { showItems, showItemById };
