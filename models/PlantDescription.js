const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let PlantDescription = new Schema({
    category: String,
    commonName: String,
    diseasesPests: String,
    exposure: String,
    family: String,
    flowering: String,
    flowersColor: String,
    foliageType: String,
    height: String,
    latinName: String,
    multiplicationMethods: String,
    origin: String,
    plantType: String,
    plantationRepotting: String,
    relatedSpecies: String,
    rusticity: String,
    soilAcidity: String,
    soilHumidity: String,
    soilType: String,
    synonyms: String,
    trimming: String,
    toxicity: String,
    plantUsage: String,
    vegetationType: String
}, {
  collection: 'plant_description'
})

module.exports = mongoose.model('PlantDescription', PlantDescription)