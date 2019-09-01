const request = require("supertest");
const server = require("../server.js");

describe("Testing the api", () => {
	//Just making sure were working correctly
	describe("GET / ", () => {
		it("should retrun an <h1>", async () => {
			const res = await request(server).get("/");
			expect(res.status).toBe(200);
		});
	});

	describe("should add a car to the database", () => {
		it("should return 201", async () => {
			const res = await request(server).post("/cars");
			expect(res.status).toBe(201);
		});

		it("should return a json object", async () => {
			const res = await request(server).post("/cars");
			expect(res.type).toBe("application/json");
		});
	});

	describe("should remove a car from the database", () => {
		it("should return 201", async () => {
			const res = await request(server).delete("/cars");
			expect(res.status).toBe(201);
		});

		it("should return a json object", async () => {
			const res = await request(server).delete("/cars");
			expect(res.type).toBe("application/json");
		});
	});

	describe("should get all the cars in the database", () => {
		it("should return 201", async () => {
			const res = await request(server).get("/cars");
			expect(res.status).toBe(201);
		});

		it("should return a json object", async () => {
			const res = await request(server).get("/cars");
			expect(res.type).toBe("application/json");
		});
	});
});
