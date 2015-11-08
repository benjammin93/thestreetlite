var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if (req.device == 'phone') {
    res.render('phone', { title: 'The Streetlite Co. Phone' });
}
  else if (req.device == 'tablet') {
    res.render('tablet', { title: 'The Streetlite Co. Tablet' });
  }

/*
  else if (req.device == 'bot') {

  }
*/

  else {
    res.render('index', { title: 'The Streetlite Co.' });
  }
});

module.exports = router;
