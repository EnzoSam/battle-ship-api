
var express = require('express');
var GameController = require('../controller/game.controller');

var router = express.Router();

router.get("/", GameController.get);  

module.exports = router;