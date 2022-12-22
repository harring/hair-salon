var express = require('express');
var router = express.Router();
var OpeningHours = require('../models/openingHours');

//Creates a new openingHours
router.post('/api/openingHours', function(req, res, next){
    var openingHours = new OpeningHours(req.body);
    openingHours.save(function(err, openingHours){
        if (err){return next(err); }
        res.status(201).json(openingHours);
    })
});

module.exports = router;