const db = require("../data/db-config.js");

module.exports = {
	addCar,
	removeCar,
	getCars,
};

function addCar(car) {
	return db("cars").insert(car);
}

function removeCar(id) {
	return db("cars")
		.where({ id })
		.del();
}

function getCars() {
	return db("cars");
}
