const PlantDescriptionRouter = require('./plantDescription.route')

module.exports = function (app) {

    app.get('/', (req, res) => {
        res.render('../views/pages/index', { query: '' })
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