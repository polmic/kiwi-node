const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let PlantThumbnail = new Schema({
    descriptionId: Schema.Types.ObjectId,
    binary: Buffer
}, {
  collection: 'plant_thumbnail'
})

module.exports = mongoose.model('PlantThumbnail', PlantThumbnail)