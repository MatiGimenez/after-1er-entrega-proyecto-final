export const errorHandlerMiddleware = (err, req, res, next) => {
	if (!err) return res.status(409).json({ message: "conflict" });

	return res.status(500).json({
		error: -1,
		descripcion: `ruta ${err.route} método ${err.method} no autorizada`,
	});
};
