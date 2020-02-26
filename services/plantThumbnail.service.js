
let PlantThumbnail = require('../models/PlantThumbnail');

class PlantThumbnailService {

  static async add(thumbnail) {
    return PlantThumbnail.create(thumbnail)
  }

  static async findByDescId(id) {
    if (id instanceof String) {
      id = new mongoose.mongo.ObjectId(id)
    }
    return PlantThumbnail.findOne({descriptionId: id})
  }

  static async countByDescId(id) {
    if (id instanceof String) {
      id = new mongoose.mongo.ObjectId(id)
    }
    return PlantThumbnail.count({descriptionId: id})
  }

  static async remove(id) {
    return PlantThumbnail.remove({id: id})
  }

}

module.exports = PlantThumbnailService;