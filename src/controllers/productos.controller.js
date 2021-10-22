import { database } from "../db/firebase.js";
import { Producto } from "../models/Producto.js";

export const getProductos = async (req, res) => {
  const { id } = req.query;
  if (id) {
    const producto = await Producto.findById(id);
    if (!producto)
      return res.status(404).json({ msg: "Producto no encontrado" });
    return res.status(200).json(producto);
  }
  const productos = await Producto.find({});
  return res.status(200).json(productos);
};

/* export const agregarProducto = async (req, res) => {
  try {
    const { name, description, code, image, price, stock } = req.body;
    console.log({ name, description, code, image, price, stock });

    let doc = database.collection("Productos").doc();
    const created = await doc.set({
      name: name,
      description: description,
      code: code,
      image: image,
      price: price,
      stock: stock,
    });

    return res.status(201).json(created);
  } catch (err) {
    console.log(err);
  }
}; */

export const agregarProducto = async (req, res) => {
  try {
    const { name, description, code, image, price, stock } = req.body;

    const created = await Producto.create({
      name,
      description,
      code,
      image,
      price,
      stock,
    });

    return res.status(201).json(created);
  } catch (err) {
    console.log(err);
  }
};

export const actualizarProducto = async (req, res) => {
  const { id } = req.params;
  const { name, description, code, image, price, stock } = req.body;
  //Validar que esten todos los datos
  try {
    const updated = await Producto.updateOne(
      { _id: id },
      { name, description, code, image, price, stock }
    );
    return res.status(200).json(updated);
  } catch (err) {
    console.log(err);
    return res.status(500).end();
  }
};

export const borrarProducto = async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await Producto.deleteOne({ _id: id });
    return res.status(200).json(deleted);
  } catch (err) {
    console.log(err);
    return res.status(500).end();
  }
};
