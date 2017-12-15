var express = require('express');
var router = express.Router();

//controller instances
const dogs = require('../controllers/dogs')

//root
router.get('/', (req, res, next) => {
  res.render('index');
});

//dogs
router.get('/dogs', dogs.index);



//export
module.exports = router;
