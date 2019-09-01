const express = require("express");

const db = require("./cars/cars-model.js");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
	res.status(200).send("<h1> Hello from node-server-challenge! </h1>");
});

server.post("/cars", async (req, res) => {
	const car = req.body;

	try {
		const added = await db.addCar({
			make: "nissan",
			model: "Juke",
			color: "silver",
		});
		res.status(201).json(added);
	} catch ({ message }) {
		res.status(500).json(message);
	}
});

server.delete("/cars", async (req, res) => {
	const id = req.body;

	try {
		const removed = await db.removeCar(id);
		res.status(201).json(removed);
	} catch ({ message }) {
		res.status(500).json(message);
	}
});

server.get("/cars", async (req, res) => {
	try {
		const cars = await db.getCars();
		res.status(201).json(cars);
	} catch ({ message }) {
		res.status(500).json(message);
	}
});

module.exports = server;
