var express = require('express');
var router = express.Router();
var User = require('../models/user');
 
// Create a new user
router.post('/users', function(req, res, next){
   var user = new User(req.body);
   user.save(function(err, user) {
       if (err) { return next(err); }
       res.status(201).json(user);
   })
});

// Get all users 
router.get('/users', function(req, res, next) {
    User.find(function(err, users) {
        if (err) { return res.status(500).send(err); }
        res.json({ 'users': users });
        res.status(200);
    });
});

// Get user by ID
router.get('/users/:id', function(req, res, next) {
    var id = req.params.id;
    User.findById(id, function(err, users){
    if (err){return next(err); }
    if(users === null) {
        return res.status(404).json({'message': 'User not found!'});
    }
    res.status(200).json(users);
})
});

// Update the user with the given ID
router.put('/users/:id', function(req, res, next) {
    var id = req.params.id;
    User.findById(id, function(err, user) {
        if (err) { return next(err); }
        if (user === null) {
            return res.status(404).json({'message': 'User not found!'});
        }
        user.username = req.body.username;
        user.email = req.body.email;
        user.password = req.body.password;
        user.save();
        res.status(200).json(user);
    });
 });
// Delete user by id
router.delete('/users/:id', function(req, res, next) {
    var id = req.params.id;
    User.findByIdAndDelete({_id: id}, function(err, user) {
        if (err) { return next(err); }
        if (user === null) {
            return res.status(404).json({'message': 'User not found'});
        }
        res.status(202).json(user);
    });
});

module.exports = router;
