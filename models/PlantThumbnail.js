const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let PlantThumbnail = new Schema({
  descriptionId: Schema.Types.ObjectId,
  curated: Boolean,
  binary: Buffer
}, {
  collection: 'plant_thumbnail'
}, { strict: false });

module.exports = mongoose.model('PlantThumbnail', PlantThumbnail)