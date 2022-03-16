var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var books = new Schema({
	book: {
		type: String,
		required : 'Please enter name of the Book',
		unique: true
	},
	created_date: {
		type: Date,
		default: Date.now
	}
})

module.export = mongoose.model('books', books);