'use strict';
	
var mongoose = require('mongoose');
const Book1 = require("../models/listModel");
const Book = mongoose.model('books')

// Create and Save a new Book
exports.create = (req, res) => {

	var new_task = new Book(req.body);
	new_task.save(function(err, task){
		if(err)
			res.send(err);
		res.json(task);
	});
};

// Retrieve and all Book from the database.
exports.getBookList = (req, res) => {
	Book.find({}, function(err, task){
		if(err)
			res.send(err);
		res.json(task);
	});
};

// Update Book with Id
exports.updateBook = (req, res) => {
	Book.findByIdAndUpdate(req.params.Id, req.body, { runValidators: true }, function(err, item){
		if(err)
			res.send(err);
		res.json(item);
	});
	
};

// Find a single Book with a Id
exports.findOne = (req, res) => {

	Book.find({_id: req.params.Id}, function(err, item){
	if(err)
		res.send(err);
	res.json(item);
	});
};

// Book deleted with a Id
exports.deleteBook = function(req, res, next){
	
	Book.findByIdAndRemove( req.params.Id, (error, data) => {

    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: 'Deleted Successfully',
      });
    }
  });
	
	
}