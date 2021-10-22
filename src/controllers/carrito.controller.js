import { Carrito } from "../models/Carrito.js";
import { Producto } from "../models/Producto.js";

export const getCarrito = async (req, res) => {
  const { id } = req.params;
  try {
    const carrito = await Carrito.findById(id);
    if (!carrito) {
      return res.status(404).json({ msg: "Carrito not found" });
    }
    return res.status(200).json(carrito);
  } catch (err) {
    console.log(err);
    return res.status(500).end();
  }
};

export const getProductsFromCarrito = async (req, res) => {
  const { id } = req.params;
  try {
    const carrito = await Carrito.findById(id);
    if (!carrito) {
      return res.status(404).json({ msg: "Carrito not found" });
    }
    return res.status(200).json(carrito.products);
  } catch (err) {
    console.log(err);
    return res.status(500).end();
  }
};

export const agregarProducto = async (req, res) => {
  const { id } = req.params;
  const { idProducto } = req.body;
  try {
    const carrito = await Carrito.findById(id);
    if (!carrito) {
      return res.status(404).json({ msg: "Carrito not found" });
    }
    const producto = await Producto.findById(idProducto);
    if (!producto) {
      return res.status(404).json({ msg: "Producto not found" });
    }
    await Carrito.updateOne(
      { _id: id },
      { $addToSet: { products: [idProducto] } }
    );
    return res.status(200).end();
  } catch (err) {
    console.log(err);
    return res.status(500).end();
  }
};

export const borrarProducto = async (req, res) => {
  const { id, idProducto } = req.params;

  try {
    const carrito = await Carrito.findById(id);
    if (!carrito) {
      return res.status(404).json({ msg: "Carrito not found" });
    }
    await Carrito.updateOne({ _id: id }, { $pull: { products: [idProducto] } });

    return res.status(200).end();
  } catch (err) {
    console.log(err);
    return res.status(500).end();
  }
};
