const express = require('express');
const app = express();
const PlantDescriptionRoute = express.Router();
const PlantDescriptionController = require('../controllers/plantDescription.controller');

PlantDescriptionRoute.route('/').get(PlantDescriptionController.getAllDescriptions);
PlantDescriptionRoute.route('/add').post(PlantDescriptionController.addDescription);
PlantDescriptionRoute.route('/rand').get(PlantDescriptionController.getRandomDescriptions);
PlantDescriptionRoute.route('/:id').get(PlantDescriptionController.getDescriptionById);

module.exports = PlantDescriptionRoute;