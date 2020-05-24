const Hello = require('../models/helloModel.js');
const util = require('../util.js');


module.exports = {
	//Find All Hellos in DB
	getAllHellos: (req, response) =>
	{
		Hello.find({}, util.handleQuery(response));
	},

	//Find One Hello in DB
	getHello: (req, response) =>
	{
		Hello.findById(req.params.id, util.handleQuery(response));
	},

	//Add Hello to DB
	addHello: (req, response) =>
	{
		var hello = new Hello(req.body);
		hello.save(util.handleQuery(response));
	},

	//Update Hello in DB
	updateHello: (req, response) =>
	{
		Hello.findByIdAndUpdate(req.params.id, req.body, {runValidators: true, useFindAndModify: false},  util.handleQuery(response));
	},

	// Delete a Hello
	deleteHello: (req, response) =>
	{
		Hello.deleteOne({_id: req.params.id}, util.handleQuery(response));
	},
};