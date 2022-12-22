var express = require('express');
var router = express.Router();
var OpeningHours = require('../models/openingHours');

//Creates a new openingHours
router.post('/openingHours', function(req, res, next){
    var openingHours = new OpeningHours(req.body);
    openingHours.save(function(err, openingHours){
        if (err){return next(err); }
        res.status(201).json(openingHours);
    })
});

//Gets all openingHours
router.get('/openingHours', function(req, res, next){
    OpeningHours.find(function(err, openingHours){
        if (err){return next(err); }
        res.status(200).json(openingHours);
    })
});

//Get a specific openingHour by its ID
router.get('/openingHours/:id', function(req, res, next){
    var id = req.params.id;
    OpeningHours.findById(id, function(err, openingHours){
        if (err){return next(err); }
        if(openingHours === null) {
            return res.status(404)
        }
        res.status(200).json(openingHours);
    })
});

module.exports = router;