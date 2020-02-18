let PlantDescription = require('../models/PlantDescription');

class PlantDescriptionController {

  static async getAllDescriptions(req, res, next) {
    PlantDescription.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  }

  static async getDescriptionById(req, res, next) {
    PlantDescription.findById(req.params.id, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  }

  static async getRandomDescriptions(req, res, next) {
    PlantDescription.find({}, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    }).limit(10)
  }

  static async addDescription(req, res, next) {
    PlantDescription.create(req.body, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  }

}

module.exports = PlantDescriptionController;