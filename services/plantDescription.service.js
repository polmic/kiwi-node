let PlantDescription = require('../models/PlantDescription');

class PlantDescriptionService {

  static async add(description) {
    return PlantDescription.create(description)
  }

  static async findAll(req, res, next) {
    return PlantDescription.find()
  }

  static async findById(id) {
    return PlantDescription.findById(id)
  }
      
  static async findRandom(rand, limit = 3) {
    return PlantDescription.find({}).limit(limit).skip(rand)
  }

  static async search(body) {
    console.log('search with body:')
    console.log(body)
    //return PlantDescription.find({SEARCH})
  }

}

module.exports = PlantDescriptionService;