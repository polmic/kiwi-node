
let PlantThumbnail = require('../models/PlantThumbnail');

class PlantThumbnailService {

  static async add(thumbnail) {
    return PlantThumbnail.create(thumbnail)
  }

  static async findByDescId(id) {
    if (id instanceof String) {
      id = new mongoose.mongo.ObjectId(id)
    }
    //return PlantThumbnail.findOne({descriptionId: id})
    const rand = Math.floor(Math.random() * 6000)
    return PlantThumbnail.findOne().skip(rand)
  }

  static async countByDescId(id) {
    if (id instanceof String) {
      id = new mongoose.mongo.ObjectId(id)
    }
    return PlantThumbnail.countDocuments({descriptionId: id})
  }

  static async remove(id) {
    return PlantThumbnail.remove({_id: id})
  }

  static async getUncuratedThumbnails(resPerPage, page) {
    return PlantThumbnail.find({curated: {$exists: false}})
      .skip((resPerPage * page) - resPerPage)
      .limit(resPerPage);
  }

  static async countUncuratedThumbnails() {
    return PlantThumbnail.countDocuments({curated: {$exists: false}})
  }

  static async acceptThumbnail(id) {
    return PlantThumbnail.findOneAndUpdate({_id: id}, {$set: {curated: true}})
  }

}

module.exports = PlantThumbnailService;