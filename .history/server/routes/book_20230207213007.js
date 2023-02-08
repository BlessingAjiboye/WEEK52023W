let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
//connect to our books model
let Book = require('../models/books');
let bookController = require('../controllers/book');

//GET ROUTE for the book list page -READ OPERATION
router.get('/', bookController.displayBookList);

/*router.get('/', (req, res, next) => {
    Book.find((err, bookList) => {
        if (err) {
            return console.error(err);
        }
        else {
           //console.log(BookList);
            res.render('book/list', { title: 'Books', BookList: bookList });
        }
    });
});*/

/*GET Route for displaying the Add Page- CREATE Operation*/
router.get('/add', bookController.displayAddPage);

/* POST Route for processing the Add Page - CREATE operation*/

router.post('/add', bookController.processAddPage);
/*router.post('/add', (req, res, next) => {
    let newBook = Book({
        "name": req.body.name,
        "author": req.body.author,
        "published": req.body.published,
        "description": req.body.description,
        "price": req.body.price
    });
    Book.create(newBook, (err, Book) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.redirect('/bookList');
        }
    });
});*/

/*GET Route for displaying the Edit page - UPDATE operation*/
router.get('/edit/:id', bookController.displayEditPage);
//router.get('/edit/:id', bookController.displayEditPage);
/*router.get('/edit/:id', (req, res, next) => {
    let id = req.params.id;
    Book.findById(id, (err, bookToEdit) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.render('book/edit', { title: 'Edit Book', book: bookToEdit });
        }
    });
});*/

/*POST Route for processing the Edit page - UPDATE Operation*/
router.get('/edit/id', bookController.processEditPage);


/*GET to perform Deletion - DELETE Operation */
router.get('/delete/:id', bookController.performDelete);

module.exports = router;