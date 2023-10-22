const router = require('express').Router();

const homeControler = require('./controllers/homeController');
const userController = require('./controllers/userController');
const gameController = require('./controllers/gameController');

router.use(homeControler);
router.use('/users', userController);
router.use('/games', gameController);
router.use('/*', (req, res) => {
    res.render('404')
});

module.exports = router;