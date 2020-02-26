const PlantDescriptionRouter = require('./plantDescription.route')
const PlantThumbnailRouter = require('./plantThumbnail.route')
const PlantDescriptionController = require('../controllers/plantDescription.controller')

module.exports = function (app) {

    app.get('/', async (req, res) => {
        PlantDescriptionController.getFullDescriptions()
        .then((descriptions) => {
            res.render('../views/pages/index', {descriptions})
        }).catch(e => {
            console.log(e);
        })
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