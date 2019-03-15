const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create the schema
const PlayerSchema = new Schema({
    playerName: {type: String, required: true},
    position: {type: String, required: true},
    team: {type: String, required: true},
    number: {type: Number, required: true},
 });

 // exports our model using the schema we made
 module.exports = Player = mongoose.model('player', PlayerSchema);