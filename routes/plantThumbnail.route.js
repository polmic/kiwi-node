const express = require('express');
const app = express();
const PlantThumbnailRouter = express.Router();
const PlantThumbnailController = require('../controllers/plantThumbnail.controller');

PlantThumbnailRouter.route('/has-thumbnail/:id').get(PlantThumbnailController.descriptionHasThumbnails);
PlantThumbnailRouter.route('/:id').delete(PlantThumbnailController.removeThumbnail);
PlantThumbnailRouter.route('/:id').post(PlantThumbnailController.addThumbnail);
PlantThumbnailRouter.route('/:id').get(PlantThumbnailController.getThumbnailByDescId);
PlantThumbnailRouter.route('/accept/:id').post(PlantThumbnailController.acceptThumbnail);

module.exports = PlantThumbnailRouter;