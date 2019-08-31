exports.up = function(knex) {
	return knex.schema.createTable("cars", tbl => {
		tbl.increments();
		tbl.text("make", 128).notNullable();
		tbl.text("model", 128).notNullable();
		tbl.text("color", 128);
	});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists("cars");
};
