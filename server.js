// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");

var LocalStrategy, passport;

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Routes
// =============================================================
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

passport = require("passport");

LocalStrategy = require("passport-local").Strategy;

passport.use(new LocalStrategy(function(username, password, done) {
  console.log("LocalStrategy invoked");
  return done(null, {
    id: 1,
    name: "Marius"
  });
}));

passport.serializeUser(function(user, done) {
  return done(null, user);
});

passport.deserializeUser(function(obj, done) {
  return done(null, obj);
});

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});
