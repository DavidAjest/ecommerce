import mongoose from "mongoose";
const itemSchema = new mongoose.Schema({
  id: String,
  name: String,
  price: Number,
  imageUrl: String,
  quantity: Number,
});

export default mongoose.model("Item", itemSchema);

// "id": 1,
// "name": "Book",
// "price": 10.9,
// "imgUrl": "https://www.oferavnir.co.il/wp-content/uploads/2023/05/blue.webp",
// "quantity": 0
