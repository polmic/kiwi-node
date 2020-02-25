const PlantDescriptionRouter = require('./plantDescription.route')
const PlantThumbnailRouter = require('./plantThumbnail.route')
const PlantDescriptionController = require('../controllers/plantDescription.controller')
const PlantThumbnailController = require('../controllers/plantThumbnail.controller');

module.exports = function (app) {

    app.get('/', async (req, res) => {
        try {
            const rand = Math.floor(Math.random() * 1853)
            let descriptions = await PlantDescriptionController.getRandomDescriptions(rand);
            for (let i = 0; i < descriptions.length; i++) {
                const descriptionId = descriptions[i].id;
                const thumbnail = await PlantThumbnailController.getThumbnailByDescId(descriptionId)
                if (thumbnail && thumbnail.binary) {
                    descriptions[i].thumbnail = Buffer.from(thumbnail.binary, 'binary')
                } else {
                    descriptions[i].thumbnail = ''
                }
            }
            res.render('../views/pages/index', { query: '', descriptions});
          } catch (e) {
            console.log(e);
          }
    })

    //app.post('/search', plantDescriptionRoute.post('/search'))

    app.use('/plant-description', PlantDescriptionRouter)
    app.use('/plant-thumbnail', PlantThumbnailRouter)

    // Find 404 and hand over to error handler
    app.use((req, res, next) => {
        next(createError(404));
    });

    // error handler
    app.use(function (err, req, res, next) {
        if (!err.statusCode) err.statusCode = 500;
        res.status(err.statusCode).send(err.message);
    });

}