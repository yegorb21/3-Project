// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

  // GET route for getting all of the todos
  app.get("/api/history", function (req, res) {
    // findAll returns all entries for a table when used with no options
    db.History.findAll({}).then(function (dbHistory) {
      // We have access to the todos as an argument inside of the callback function
      res.json(dbHistory);
    });
  });

  // POST route for saving a new todo
  app.post("/api/history", function (req, res) {
    console.log(req.body);
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    db.History.create({
      numCorrectGuess: req.body.numCorrectGuess,
      numTotalGuess: req.body.numTotalGuess
    })
  });
};
