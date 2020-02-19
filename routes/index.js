const PlantDescriptionRouter = require('./plantDescription.route')
const PlantDescriptionController = require('../controllers/plantDescription.controller')

module.exports = function (app) {

    app.get('/', async (req, res) => {
        try {
            const rand = Math.floor(Math.random() * 1853)
            let descriptions = await PlantDescriptionController.getRandomDescriptions(rand);
            res.render('../views/pages/index', { query: '', descriptions});
          } catch (e) {
            next(e);
          }
    })

    //app.post('/search', plantDescriptionRoute.post('/search'))

    app.use('/plant-description', PlantDescriptionRouter)

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