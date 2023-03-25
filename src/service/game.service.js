const Game = require("../model/game.model");

module.exports.get = get;

function get() {
  let prommise = new Promise((resolve, reject) => {
    try {
    } catch (ex) {
      reject(ex);
    }
  });

  return prommise;
}
