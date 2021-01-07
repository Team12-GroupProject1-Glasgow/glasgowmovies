const router = require('express').Router();
const users = require('./userRouter');
const NewsController = require("../controllers/NewsController");
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

module.exports = router;