const express = require('express');
const router =express.Router();

const bookController = require("../controllers/bookController");

//routes 
router.post('/',bookController.addBook);
router.get('/', bookController.getBooks);
router.get('/:id', bookController.getBookById);
router.patch('/:id', bookController.updateBook);
router.put('/:id', bookController.updateBook);
router.delete('/:id', bookController.deleteBook);

module.exports = router