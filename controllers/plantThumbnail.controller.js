var mongoose = require('mongoose');
const PlantThumbnailService = require('../services/plantThumbnail.service');

class PlantThumbnailController {

  static async addThumbnail(req, res, next) {
    const binary = req.body
    if (!binary) {
      res.status(400).json({})
    }
    const thumbnail = {
      descriptionId: new mongoose.mongo.ObjectId(req.params.id), 
      binary: req.body
    }
    PlantThumbnailService.add(thumbnail)
    .then(res.status(201).json({/*NEW_THUMBNAIL_ID*/}))
    .catch(error => {
      console.log(error)
      return next(error)
    });
  }

  static async getThumbnailByDescId(req, res, next) {
    PlantThumbnailService.findByDescId(new mongoose.mongo.ObjectId(descriptionId))
    .then(data => res.json(data))
    .catch(error => {
      console.log(error)
      return next(error)
    });
  }
  
  static async descriptionHasThumbnails(req, res, next) {
    PlantThumbnailService.countByDescId(new mongoose.mongo.ObjectId(req.params.id))
    .then(data => {
      const result = data !== 0;
      res.json(result)
    })
    .catch(error => {
      console.log(error)
      return next(error)
    })
  }

  static async acceptThumbnail(req, res, next) {
    const id = req.params.id
    PlantThumbnailService.acceptThumbnail(new mongoose.mongo.ObjectId(id))
    .then(data => res.json(data))
    .catch(error => {
      console.log(error)
      return next(error)
    })
  }

  static async removeThumbnail(req, res, next) {
    const id = req.params.id
    //TODO if no id specified
    return PlantThumbnailService.remove(new mongoose.mongo.ObjectId(id))
  }
 
}

module.exports = PlantThumbnailController;