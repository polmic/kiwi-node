const express = require('express');
const app = express();
const plantDescriptionRoute = express.Router();

// PlantDescription model
let PlantDescription = require('../model/PlantDescription');

// Add PlantDescription
plantDescriptionRoute.route('/add').post((req, res, next) => {
  PlantDescription.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});


// Get all PlantDescriptions
plantDescriptionRoute.route('/rand').get((req, res) => {
  PlantDescription.find({}.limit(10), (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get all PlantDescriptions
plantDescriptionRoute.route('/').get((req, res) => {
    PlantDescription.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single PlantDescription
plantDescriptionRoute.route('/:id').get((req, res) => {
    PlantDescription.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

module.exports = plantDescriptionRoute;