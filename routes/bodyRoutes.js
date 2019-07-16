const express = require('express');
const router  = express.Router();
const bcrypt  = require('bcrypt');

const Body    = require('../models/body');

const passport = require('passport');
const ensureLogin = require("connect-ensure-login");


//Main Route
router.get("/main", ensureLogin.ensureLoggedIn(), (req, res) => {
  res.render("body/index", { user: req.user });
});


module.exports = router;