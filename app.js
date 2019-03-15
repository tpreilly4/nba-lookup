//bring in express, mongoose
const express = require('express');
const mongoose = require('mongoose');

//grab our players from players route
const players = require('./routes/api/players');

//initialize express server and put it in a container
const app = express();

//some middleware
app.use(express.json());

// grab our database uri from our keys file and store it in a variable
const db = require('./config/keys').mongoURI;

// try connecting to the db
// if we connect, output success string in console
// catch any errors and throw them in the console
mongoose
  .connect(db, {useNewUrlParser: true})
  .then(() => console.log("MongoDB connected!"))
  .catch(err => console.log(err));

// Anything that requests api/players should refer to the players variable - which points to the players route
app.use('/api/players', players)

//environmental variable if it's there, port 5000 if it's not. Right now it's not.
const port = process.env.PORT || 5000;

//listen in on our port and let us know via console
app.listen(port, () => console.log(`Listening on port ${port}`));