import mongoose from "mongoose";
const Schema = mongoose.Schema;

const carritoSchema = new Schema({
  timestamp: { type: Date, default: Date.now },
  products: { type: Schema.Types.ObjectId, ref: "Productos" },
});

export const Carrito = mongoose.model("Carritos", carritoSchema);
