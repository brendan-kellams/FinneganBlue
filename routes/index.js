var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Finnegan Blue' });
});

/* GET bio page. */
router.get('/bio', function (req, res, next) {
  res.render('bio', { title: 'Finnegan Blue' });
});

/* GET music page. */
router.get('/music', function (req, res, next) {
  res.render('music', { title: 'Finnegan Blue' });
});

/* GET photos page. */
router.get('/photos', function (req, res, next) {
  res.render('photos', { title: 'Finnegan Blue' });
});

/* GET videos page. */
router.get('/videos', function (req, res, next) {
  res.render('videos', { title: 'Finnegan Blue' });
});

/* GET shows page. */
router.get('/shows', function (req, res, next) {
  res.render('shows', { title: 'Finnegan Blue' });
});

/* GET merch page. */
router.get('/merch', function (req, res, next) {
  res.render('merch', { title: 'Finnegan Blue' });
});

/* GET merch page. */
router.get('/error', function (req, res, next) {
  res.render('error', { title: 'Finnegan Blue' });
});



module.exports = router;
