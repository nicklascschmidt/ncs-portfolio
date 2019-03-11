const router = require("express").Router();
const path = require('path');

// Renders homepage
router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname,'../','../', 'client', 'build', 'index.html'));
});

module.exports = router;
