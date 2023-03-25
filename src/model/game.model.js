var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var GameSchema = Schema({
    number:Number,  
    createdAt:Date,
    updatedAt:Date
},
{ timestamps: true });

module.exports = mongoose.model('Game', GameSchema);