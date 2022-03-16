module.exports = (app) => {
    const books = require('../controllers/controller.js');

    // Retrieve all Book
    app.get('/book', books.getBookList);

    // Create a new Book
    app.post('/book', books.create);
	
	// Retrieve a single Emp with Id
    app.get('/book/:Id', books.findOne);
	
	// Update Book
    app.patch('/book/:Id', books.updateBook);

	// Delete Book
    app.delete('/book/:Id', books.deleteBook);	
}