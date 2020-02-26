const PlantDescriptionRouter = require('./plantDescription.route')
const PlantThumbnailRouter = require('./plantThumbnail.route')
const PlantDescriptionController = require('../controllers/plantDescription.controller')
const PlantThumbnailService = require('../services/plantThumbnail.service')
const PlantDescriptionService = require('../services/plantDescription.service')

module.exports = function (app) {

    app.get('/', async (req, res) => {
        PlantDescriptionController.getFullDescriptions()
        .then((descriptions) => {
            res.render('../views/pages/index', { descriptions })
        }).catch(e => {
            console.log(e);
        })
    })

    app.get('/curation', (req, res) => {
        res.redirect('/curation/1');
    })

    app.get('/curation/:page', async (req, res) => {
        const resPerPage = 10
        const page = req.params.page || 1
        const totalUncurated = await PlantThumbnailService.countUncuratedThumbnails()
        const totalPages = Math.ceil(totalUncurated / resPerPage)
        const thumbnails = await PlantThumbnailService.getUncuratedThumbnails(resPerPage, page)
        const uncurated = [];
        for (let i = 0; i < thumbnails.length; i++) {
            const descriptionId = thumbnails[i].descriptionId;
            const description = await PlantDescriptionService.findById(descriptionId)
            uncurated.push({
                id: thumbnails[i].id,
                thumbnail: Buffer.from(thumbnails[i].binary, 'binary'),
                description
            });
        }
        res.render('../views/pages/curation/index', {
            uncurated,
            totalUncurated,
            currentPage: page,
            totalPages
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