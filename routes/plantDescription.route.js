const express = require('express');
const app = express();
const PlantDescriptionRouter = express.Router();
const PlantDescriptionController = require('../controllers/plantDescription.controller');

PlantDescriptionRouter.route('/').get(PlantDescriptionController.getAllDescriptions);
PlantDescriptionRouter.route('/add').post(PlantDescriptionController.addDescription);
//PlantDescriptionRouter.route('/rand').get(PlantDescriptionController.getRandomDescriptions);
PlantDescriptionRouter.route('/search').post(PlantDescriptionController.searchDescriptions);
PlantDescriptionRouter.route('/:id').get(PlantDescriptionController.getDescriptionById);

module.exports = PlantDescriptionRouter;