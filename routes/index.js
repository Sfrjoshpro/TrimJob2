var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/Contracts', function(req, res, next) {
  res.render('other', { title: 'Conract' ,layout: 'other'});
});
router.get('/Apply', function(req, res, next) {
  res.render('other', {
     title: 'Aplly',
     class: 'Apply',
     formBody:"<script type='text/javascript' defer src='//www.123formbuilder.com/embed/3975968.js' data-role='form' data-default-width='650px'></script>",
     layout: 'other' 
    } );
});


module.exports = router;
