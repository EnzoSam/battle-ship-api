const { response } = require('express');
const GameService = require('../service/game.service');

var controller = {
  get: function (req, res) {    
    let state = req.params.state;
    GameService.getTikets().
    then(data=>
      {
        res.status(200).send(data);
      })
      .catch(error =>{
        console.log(error);
        res.status(500).send(error);
      });
  }
};

module.exports = controller;
