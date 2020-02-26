const PlantDescriptionService = require('../services/plantDescription.service');
const PlantThumbnailService = require('../services/plantThumbnail.service');

class PlantDescriptionController {

  static async getFullDescriptions() {
      const rand = Math.floor(Math.random() * 1853)
      let descriptions = await PlantDescriptionService.findRandom(rand);
      for (let i = 0; i < descriptions.length; i++) {
          const descriptionId = descriptions[i].id;
          await PlantThumbnailService.findByDescId(descriptionId).then(thumbnail => this._setThumbnail(thumbnail, descriptions[i]))
      }
      return descriptions
  }

  static async getAllDescriptions(req, res, next) {
    PlantDescriptionService.findAll()
    .then(data => res.json(data))
    .catch(error => {
      console.log(error)
      return next(error)
    });
  }

  static async getDescriptionById(req, res, next) {
    PlantDescriptionService.findById(req.params.id)
    .then(data => res.json(data))
    .catch(error => {
      console.log(error)
      return next(error)
    });
  }
  
  static async getRandomDescriptions(req, res, next) {
    const rand = Math.floor(Math.random() * 1853)
    PlantDescriptionService.findRandom(rand)
    .then(data => res.json(data))
    .catch(error => {
      console.log(error)
      return next(error)
    });
  }

  static async searchDescriptions(req, res, next) {
    PlantDescriptionService.search(req.body)
    .then(data => res.json(data))
    .catch(error => {
      console.log(error)
      return next(error)
    });
  }

  static async addDescription(req, res, next) {
    PlantDescriptionService.add(req.body)
    .then(data => res.json(data))
    .catch(error => {
      console.log(error)
      return next(error)
    });
  }

  /* * * * * * * * * * *
      
  Private Functions

  * * * * * * * * * * */

  static _setThumbnail(thumbnail, description) {
    if (thumbnail && thumbnail.binary) {
      description.thumbnail = Buffer.from(thumbnail.binary, 'binary')
    } else {
        description.thumbnail = ''
    }
  }

}

module.exports = PlantDescriptionController;