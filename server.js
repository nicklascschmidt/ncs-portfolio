// Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');

// Bring in routes, initialize express, define port
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Parses ajax requests (not needed yet)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, 'client/build')));
}

app.use(routes);

// Start server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

module.exports = app;
