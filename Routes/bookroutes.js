const express = require('express')
const router = express.Router();

router.get('/', (req,res) => {
  res.send('book ok')
})

const bookController = require('./bookController');

router.get('/index', bookController.index)
router.get('/getBooks', bookController.getBooks)



module.exports = router;