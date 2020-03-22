var express = require('express');
var router = express.Router();
var conn = require('./../db/connection');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  // res.send('API WORKING');
});

router.get('/get-questions', (req, res, next) => {
	conn.query("SELECT * FROM questions", (err, rows) => {
		if(err) throw err;
		res.json(rows);
	});
});
module.exports = router;
