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

  static async getRandomDescriptions(rand, limit = 3) {
    return PlantDescription.find({}).limit(limit).skip(rand)
  }

  
/*   static async getRandomDescriptions(limit = 3) {
    PlantDescription.count().exec((err, count) => {
      const rand = Math.floor(Math.random() * count)
      return PlantDescription.find({}).limit(limit).skip(rand)
    })
  } */

  
/*   static async getRandomDescriptions(req, res, next) {
    console.log('getRandomDescriptions');
    PlantDescription.find({}, (error, data) => {
      if (error) {
        console.log(data);
        return next(error)
      } else {
        console.log(data)
        res.json(data)
      }
    }).limit(10)
  } */

  static async searchDescriptions(req, res, next) {
  console.log(req.body);
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

  static async getDescriptionById(req, res, next) {
    PlantDescription.findById(req.params.id, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  }

}

module.exports = PlantDescriptionController;