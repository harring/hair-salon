var express = require('express');
var router = express.Router();
var User = require('../models/user');
 
// create new user
router.post('/users', function(req, res, next){
   var user = new User(req.body);
   user.save(function(err, user) {
       if (err) { return next(err); }
       res.status(201).json(user);
   })
});

// get all users 
router.get('/users', function(req, res, next) {
    User.find(function(err, users) {
        if (err) { return res.status(500).send(err); }
        res.json({ 'users': users });
        res.status(200);
    });
});

// Find user by ID
router.get('/users/:id', function(req, res, next) {
    User.findOne({ _id: req.params.id })
    .exec(function (err, user) {
      if (err) {return res.status(500).send(err);}
      return res.status(200).send(user);
    });
});

module.exports = router;
