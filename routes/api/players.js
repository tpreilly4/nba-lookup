const express = require('express');
const router = express.Router();

// Player model
const Player = require('../../models/Player');


//**  Routes  **//
// Route:       GET api/players
// Description: Gets all players
// Access:      Public
router.get('/', (req, res) =>{
  Player.find()
    .sort({playerName: 1})
    .then(players => res.json(players))
});

// Route:       POST api/players
// Description: Create a player
// Access:      Public
router.post('/', (req, res) => {
  const newPlayer = new Player({
    playerName: req.body.playerName,
    position: req.body.position,
    team: req.body.team,
    number: req.body.number,
  });

  newPlayer
    .save()
    .then(player => res.json(player))
    .catch(err => console.log(err));
});

// Route:       DELETE api/players
// Description: Gets all players
// Access:      Public
router.delete('/:id', (req, res) => {
  //gotta find the player before we delete it
  Player.findById(req.params.id)
    .then(player => player.remove().then(() => res.json({success:true})))
    .catch(err => res.status(404).json({success: false}));
});



module.exports = router;