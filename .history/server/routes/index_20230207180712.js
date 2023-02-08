let express = require('express');
let router = express.Router();
let indexController = require('../controllers/index');

/*GET home page.*/
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home',indexController.displayHomePage);


/*router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});*/

router.get('/about', indexController.displayAboutPage);

router.get('/products', indexController.displayProductsPage);

router.get('/services', indexController.displayServicesPage);

router.get('/contact', indexController.displayContactPage);
/router.get('/products', function(req, res, next) {
  res.render('index', { title: 'Products' });
});
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact' });
});
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services' });
});

module.exports = router;
