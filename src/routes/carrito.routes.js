import { Router } from "express";
import {
  agregarProducto,
  borrarProducto,
  getCarrito,
  getProductsFromCarrito,
} from "../controllers/carrito.controller.js";

const carritoRouter = Router();

carritoRouter
  .get("/:id", getCarrito)
  .get("/:id/productos", getProductsFromCarrito)
  .post("/:id/productos", agregarProducto)
  .delete(":id/productos/:idProducto", borrarProducto);

export default carritoRouter;
