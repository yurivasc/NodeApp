const express = require("express");
const aboutController = require("./controllers/aboutController");


const router = express.Router();

router.get('/', (req, res) => {
    res.send('hi');
})

router.get('/home', (req,res) => {
    res.send('home');
})

router.get("/about", aboutController);


module.exports = router;