const express = require('express');
const app = express();
const PlantThumbnailRouter = express.Router();
const PlantThumbnailController = require('../controllers/plantThumbnail.controller');

PlantThumbnailRouter.route('/').post(PlantThumbnailController.addThumbnail);
PlantThumbnailRouter.route('/:id').get(PlantThumbnailController.getThumbnailByDescId);

module.exports = PlantThumbnailRouter;