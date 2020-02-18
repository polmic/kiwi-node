const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let PlantDescription = new Schema({
    category: {
        type: String
    },
    commonName: {
        type: String
    },
    diseasesPests: {
        type: String
    },
    exposure: {
        type: String
    },
    family: {
        type: String
    },
    flowering: {
        type: String
    },
    flowersColor: {
        type: String
    },
    foliageType: {
        type: String
    },
    height: {
        type: String
    },
    latinName: {
        type: String
    },
    multiplicationMethods: {
        type: String
    },
    origin: {
        type: String
    },
    plantType: {
        type: String
    },
    plantationRepotting: {
        type: String
    },
    relatedSpecies: {
        type: String
    },
    rusticity: {
        type: String
    },
    soilAcidity: {
        type: String
    },
    soilHumidity: {
        type: String
    },
    soilType: {
        type: String
    },
    synonyms: {
        type: String
    },
    trimming: {
        type: String
    },
    toxicity: {
        type: String
    },
    plantUsage: {
        type: String
    },
    vegetationType: {
        type: String
    }
}, {
  collection: 'plant_description'
})

module.exports = mongoose.model('PlantDescription', PlantDescription)