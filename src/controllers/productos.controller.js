import { config } from "../constants/index.js";
import { Producto } from "../models/Producto.js";

const productos = [];

export const getProductos = (req, res) => {
	const { id } = req.query;
	if (id) return res.status(200).json(productos.find((p) => p.id == id));
	return res.status(200).json(productos);
};

export const agregarProducto = (req, res) => {
	/* if (!config.isAdmin)
		next({ route: `${config.hostname}productos`, method: "POST" }); */
	try {
		const { name, description, code, image, price, stock } = req.body;

		const newProduct = new Producto(
			name,
			description,
			code,
			image,
			price,
			stock
		);

		productos.push(newProduct);

		return res.status(201).json(newProduct);
	} catch (err) {
		console.log(err);
	}
};

export const actualizarProducto = (req, res) => {
	const { id } = req.params;
	const { name, description, code, image, price, stock } = req.body;

	const producto = productos.find((p) => p.id == id);
	if (!producto) {
		return res.status(404).json({ msg: "Producto no encontrado" });
	}
	(producto.name = name),
		(producto.description = description),
		(producto.code = code),
		(producto.image = image),
		(producto.price = price),
		(producto.stock = stock);

	res.status(200).json(producto);
};

export const borrarProducto = (req, res) => {
	const { id } = req.params;
	const producto = productos.find((p) => p.id == id);

	if (!producto) {
		return res.status(404).json({ msg: "Producto no encontrado" });
	}

	const index = productos.findIndex((p) => p.id == id);
	productos.splice(index, 1);

	res.status(200).end();
};
