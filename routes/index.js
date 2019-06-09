var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.locals.path=req.path;
  res.render('index', { title: 'Computer on the Beach 2020' });
});

/* GET home page. */
router.get('/accommodation', function(req, res, next) {
  res.locals.path=req.path;
  res.render('accommodation', { title: 'Computer on the Beach 2020' });
});

module.exports = router;
