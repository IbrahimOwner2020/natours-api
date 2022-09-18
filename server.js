require("dotenv").config();
const db = require('./db/config')
const app = require("./app");

// DATABASE
db()

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`App running on port ${port}`);
});
