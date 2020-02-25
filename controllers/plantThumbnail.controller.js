var mongoose = require('mongoose');
let PlantThumbnail = require('../models/PlantThumbnail');

class PlantThumbnailController {

  static async addThumbnail(req, res, next) {
    const binary = req.body
    if (!binary) {
      res.status(400).json({})
    }
    PlantThumbnail.create({descriptionId: new mongoose.mongo.ObjectId(req.params.id), binary: req.body}, (error, data) => {
      if (error) {
        console.log(error)
      } else {
        res.status(201).json({})
      }
    })
  }

  static async getThumbnailByDescId(descriptionId) {
    return PlantThumbnail.findOne({descriptionId: new mongoose.mongo.ObjectId(descriptionId)})
  }
  
/*   static async getThumbnailByDescId(req, res, next) {
    PlantThumbnail.find({descriptionId: req.params.id}, (error, data) => {
      if (error) {
        return next(error)
      } else {
        const result = data[0] ? data[0].binary : []
        console.log(result)
        res.end(Buffer.from(result, 'binary'))
      }
    })
  } */


  static async descriptionHasThumbnails(req, res, next) {
    const start = new Date()
    PlantThumbnail.count({descriptionId: new mongoose.mongo.ObjectId(req.params.id)}, (error, data) => {
      if (error) {
        return next(error)
      } else {
        const result = data !== 0;
        res.json(result)
      }
      const end = new Date() - start
      console.info('Execution time: %dms', end)
    })
  }

  static async removeThumbnail(thumbnailId) {
    return PlantThumbnail.remove({id:  new mongoose.mongo.ObjectId(thumbnailId)})
  }
 
}

module.exports = PlantThumbnailController;