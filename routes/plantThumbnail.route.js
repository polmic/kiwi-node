const express = require('express');
const app = express();
const PlantThumbnailRouter = express.Router();
const PlantThumbnailController = require('../controllers/plantThumbnail.controller');

PlantThumbnailRouter.route('/:id').post(PlantThumbnailController.addThumbnail);
PlantThumbnailRouter.route('/:id').get(PlantThumbnailController.getThumbnailByDescId);
PlantThumbnailRouter.route('/:id').delete(PlantThumbnailController.removeThumbnail);
PlantThumbnailRouter.route('/has-thumbnail/:id').get(PlantThumbnailController.descriptionHasThumbnails);

module.exports = PlantThumbnailRouter;