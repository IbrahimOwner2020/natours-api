const mongoose = require("mongoose");

const db = async () => {
	await mongoose
		.connect(process.env.DATABASE || process.env.DATABASE_LOCAL)
		.then((conn) =>
			console.log(`Database connected port ${conn.connection.host}`)
		)
		.catch((error) => console.log(error));
};

module.exports = db;
