const Tour = require("../modals/tourModal");

exports.getAllTours = async (req, res) => {
	try {
		const tours = await Tour.find();

		res.status(200).json({
			status: "success",
			requestedAt: req.requestTime,
			results: tours.length,
			data: {
				tours,
			},
		});
	} catch (error) {
		res.status(404).json({
			status: "fail",
			message: error,
		});
	}
};

exports.getTour = async (req, res) => {
	try {
		const tour = await Tour.findById(req.params.id);
		res.status(200).json({
			status: "success",
			data: {
				tour,
			},
		});
	} catch (error) {
		res.status(404).json({
			status: "fail",
			message: error,
		});
	}
};

exports.createTour = async (req, res) => {
	try {
		const newTour = await Tour.create(req.body);

		res.status(201).json({
			status: "success",
			data: {
				tour: newTour,
			},
		});
	} catch (error) {
		res.status(400).json({
			status: "fail",
			message: "Invalid data sent",
		});
	}
};

exports.updateTour = async (req, res) => {
	try {
		const updatedTour = await Tour.findByIdAndUpdate(
			req.params.id,
			req.body,
			{
				returnDocument: "after",
				runValidators: true,
			}
		);

		res.status(200).json({
			status: "success",
			data: {
				tour: updatedTour,
			},
		});
	} catch (error) {
		res.status(404).json({
			status: "fail",
			message: error,
		});
	}
};

exports.deleteTour = async (req, res) => {
	try {

		res.status(204).json({
			status: "success",
			data: null,
		});
	} catch (error) {
		res.status(404).json({
			status: "fail",
			message: error,
		});
	}
};