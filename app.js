const express = require("express");
const morgan = require("morgan");

const toursRouter = require("./routes/tourRoutes");
const usersRouter = require("./routes/userRoute");

const app = express();

// 1) MIDDLEWARE
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static("./public"));

app.use((req, res, next) => {
	console.log("Hello from the middleware");
	next();
});

app.use((req, res, next) => {
	req.requestTime = new Date().toISOString();
	next();
});

// 2) ROUTES
app.use("/api/v1/tours", toursRouter);
app.use("/api/v1/users", usersRouter);

// 3) STARTING SERVER
module.exports = app;
