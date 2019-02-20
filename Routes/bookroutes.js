const express = require('express')
const router = express.Router();
const bookController = require('./bookController');

router.get('/', (req,res) => {
  res.send('book ok')
})


router.get('/index', bookController.index)
router.get('/getBooks', bookController.getBooks)



module.exports = router;