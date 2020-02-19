let PlantThumbnail = require('../models/PlantThumbnail');

class PlantThumbnailController {

  static async addThumbnail(req, res, next) {
    PlantThumbnail.create(req.body, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })

  }

  static async getThumbnailByDescId(req, res, next) {
    PlantThumbnail.find({descriptionId: req.params.id}, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  }

}

module.exports = PlantThumbnailController;