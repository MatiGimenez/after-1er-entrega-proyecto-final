import mongoose from "mongoose";
const Schema = mongoose.Schema;

const productoSchema = new Schema({
  timestamp: { type: Date, default: Date.now },
  name: String,
  description: String,
  code: String,
  image: String,
  prince: Number,
  stock: Number,
});

export const Producto = mongoose.model("Productos", productoSchema);
