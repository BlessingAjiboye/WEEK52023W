var express = require('express');
var router = express.Router();
let express = require('express');
let router = express.Router();
let indexController = require('../controllers/index');

/*GET home page.*/
router.get('/',indexController.displayHo)

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About' });
});
router.get('/products', function(req, res, next) {
  res.render('index', { title: 'Products' });
});
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact' });
});
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services' });
});

module.exports = router;
