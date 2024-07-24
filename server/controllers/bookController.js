const Book = require('../models/bookModel');



//add book - POST 

const addBook = async (req, res, next) => {
    let book;
    const { bName, author, description, price, available, image } = req.body;

    try {
        book = new Book({
            bName,
            author,
            price,
            description,
            available,
            image
        })
        await book.save();
    }
    catch (e) {
        console.log(`Error is ${e}`);
    }

    if(!book){
        return res.status(500).json({message:"can't create book "})
    }else{
        return res.status(201).json(book);
    }
}

// get request 

const getBooks = async (req, res, next) => {
    let book;

    try {
        book = await Book.find();

    } catch (e) {
        console.log(`Error is ${e}`);
    }
    if (!book) {
        return res.status(404).json({ message: "Book not Found" })
    }
    else {
        return res.status(202).json(book)
    }

}

// get book by id

const getBookById = async (req, res, next) => {
    const _id = req.params.id;
    let book;

    try {
        book = await Book.findById(_id);
    }
    catch (e) {
        console.log(`Error is ${e}`);
    }
    if (!book) {
        return res.status(404).json({ message: "Book not Found" })
    }
    else {
        return res.status(201).json(book)
    }

}

//update By Id
const updateBook = async (req, res, next) => {
    let book;

    const _id = req.params.id;

    const { bName, author, description, price, available, image } = req.body;


    try {
        book = await Book.findByIdAndUpdate(_id, {
            bName,
            author,
            price,
            description,
            available,
            image

        },{new: true});
        book = await book.save();

    } catch (e) {
        console.log(`Error is ${e}`);
    }

    if (!book) {
        return res.status(404).json({ message: "Book not Found" })
    }
    else {
        return res.status(202).json(book)
    }
}

//delete book

const deleteBook = async (req,res,next) => {
    let book;

    const _id =req.params.id;

    try{
        book = await Book.findByIdAndDelete(_id);

    }catch(e){
        console.log(`Erro is ${e}`);
    }

    if (!book) {
        return res.status(404).json({ message: "Book not Found" })
    }
    else {
        return res.status(202).json({message: "Book Deleted..."})
    }
}

exports.addBook = addBook;
exports.getBooks = getBooks;
exports.getBookById = getBookById;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;
