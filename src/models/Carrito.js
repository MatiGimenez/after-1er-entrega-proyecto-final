import { v4 } from "uuid";

export class Carrito {
	constructor() {
		this.id = v4();
		this.timestamp = Date.now();
		this.productos = [];
	}
}
