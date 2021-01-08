const router = require('express').Router();
const users = require('./userRouter');
const NewsController = require("../controllers/NewsController");
const TmdbController = require('../controllers/tmdbController')
const { authenticate } = require('../middlewares/auth');


router.get('/', (req, res) => {
    res.status(200).json({
        message: 'welcome'
    })
});
router.use(users);
router.use(authenticate);

// router selanjutnya untuk api
router.get("/news", NewsController.findAll);
router.get('/tmdb', TmdbController.getFilm)

module.exports = router;