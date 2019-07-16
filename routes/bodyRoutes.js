const express = require('express');
const router  = express.Router();
const bcrypt  = require('bcrypt');

const Body    = require('../models/body');

const passport = require('passport');
const ensureLogin = require("connect-ensure-login");


// Main Route
router.get("/main", ensureLogin.ensureLoggedIn(), (req, res) => {
  res.render("body/index", { user: req.user });
});


// Accessing the API Database via Axios
// router.get("/main", (req, res, next) => {
//   axious.get('____')
//     .then(painDetails) => {
//       axious.get(`${painDetails.data.fomrs[0].url}`)
//         .then(formInfo => {
//           console.log(formInfo.data)
//           console.log(painDetails.data)
//           data = {
//             painDetails: painDetails.data;
//             formInfo: formInfo.data;
//           }
//         })
//     res.render('body/index', {response: ____.data})
//     }
// });


module.exports = router;