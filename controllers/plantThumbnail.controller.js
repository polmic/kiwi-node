let PlantThumbnail = require('../models/PlantThumbnail');

class PlantThumbnailController {

  static async addThumbnail(req, res, next) {
    PlantThumbnail.create({descriptionId: req.params.id, binary: req.body}, (error, data) => {
      if (error) {
        console.log(error)
        return next(error)
      } else {
        res.json(data)
      }
    })

  }

  /*
  static async getThumbnailByDescId(req, res, next) {
    PlantThumbnail.find({descriptionId: req.params.id}, (error, data) => {
      if (error) {
        return next(error)
      } else {
        const result = data[0] ? data[0].binary : []
        console.log(result)
        res.end(Buffer.from(result, 'binary'))
      }
    })
  }
  */

  static async getThumbnailByDescId(descriptionId) {
    return PlantThumbnail.find({descriptionId: "" + descriptionId})
  }

}

module.exports = PlantThumbnailController;