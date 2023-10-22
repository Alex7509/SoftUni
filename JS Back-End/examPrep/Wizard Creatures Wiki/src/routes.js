const router = require('express').Router();

const homeControler = require('./controllers/homeController');
const userController = require('./controllers/userController');
const wizardController = require('./controllers/wizardController');

router.use(homeControler);
router.use('/users', userController);
router.use('/wizards', wizardController);
router.use('/*', (req, res) => {
    res.render('404')
});

module.exports = router;