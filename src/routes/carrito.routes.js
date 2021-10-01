import { Router } from "express";
import {
	agregarProducto,
	borrarProducto,
	getCarrito,
	getProductsFromCarrito,
} from "../controllers/carrito.controller.js";

const carritoRouter = Router();

carritoRouter
	.get("/", getCarrito)
	.get("/productos", getProductsFromCarrito)
	.post("/productos", agregarProducto)
	.delete("/productos/:id", borrarProducto);

export default carritoRouter;
