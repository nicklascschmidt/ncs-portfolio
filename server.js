const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, 'client/build')));
}

require("./routes/html-routes")(app);

app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

module.exports = app;
