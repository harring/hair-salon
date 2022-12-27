var express = require('express');
var router = express.Router();
var Service = require('../models/service');

// Create a new service
router.post('/services', function(req, res, next){
   var service = new Service(req.body);
   service.save(function(err, service) {
       if (err) { return next(err); }
       res.status(201).json(service);
   })
});

// Get all services 
router.get('/services', function(req, res, next) {
    Service.find(function(err, services) {
        if (err) { return res.status(500).send(err); }
        res.json({ 'services': services });
        res.status(200);
    });
});

// Get service by ID
router.get('/services/:id', function(req, res, next) {
    var id = req.params.id;
    Service.findById(id, function(err, services){
    if (err){return next(err); }
    if(services === null) {
        return res.status(404).json({'message': 'Service not found!'});
    }
    res.status(200).json(services);
})
});

// Update the service with the given ID
router.put('/services/:id', function(req, res, next) {
    var id = req.params.id;
    Service.findById(id, function(err, service) {
        if (err) { return next(err); }
        if (service === null) {
            return res.status(404).json({'message': 'Service not found!'});
        }
        service.name = req.body.name;
        service.description = req.body.description;
        service.price = req.body.price;
        service.image = req.body.image;
        service.save();
        res.status(200).json(service);
    });
 });
// Delete service by id
router.delete('/services/:id', function(req, res, next) {
    var id = req.params.id;
    Service.findByIdAndDelete({_id: id}, function(err, service) {
        if (err) { return next(err); }
        if (service === null) {
            return res.status(404).json({'message': 'Service not found'});
        }
        res.status(202).json(service);
    });
});

module.exports = router;