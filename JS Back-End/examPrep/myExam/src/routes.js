const router = require('express').Router();

const homeControler = require('./controllers/homeController');
const userController = require('./controllers/userController');
const electronicsController = require('./controllers/electronicsController');

router.use(homeControler);
router.use('/users', userController);
router.use('/electronics', electronicsController);
router.use('/*', (req, res) => {
    res.render('404')
});

module.exports = router;