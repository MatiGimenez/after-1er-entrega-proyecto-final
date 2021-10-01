import { Router } from "express";
import {
	getProductos,
	agregarProducto,
	actualizarProducto,
	borrarProducto,
} from "../controllers/productos.controller.js";

const productosRouter = Router();

productosRouter
	.get("/", getProductos)
	.post("/", agregarProducto)
	.put("/:id", actualizarProducto)
	.delete("/:id", borrarProducto);

export default productosRouter;
