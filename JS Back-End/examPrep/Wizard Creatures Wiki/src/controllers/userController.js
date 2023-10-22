const router = require('express').Router();

const userManager = require('../managers/userManager');
const { isAuth, isGuest } = require('../middlewares/authMiddleware');

router.get('/login', isGuest, (req, res) => {
    res.render('users/login');
});

router.post('/login', isGuest, async (req, res) => {
    const { email, password } = req.body;

    try {
        const token = await userManager.login(email, password);

        res.cookie('token', token);

        res.redirect('/');
    } catch (error) {
        res.render('users/login', { error: error.message });
    }
});

router.get('/register', isGuest, (req, res) => {
    res.render('users/register');
});

router.post('/register', isGuest, async (req, res) => {
    const { firstName, lastName, email, password, repeatPassword } = req.body;

    if (password !== repeatPassword) {
        res.locals.error = 'Passwords do not match';
        return res.render('users/register');
    }

    try {
        const token = await userManager.register({ firstName, lastName, email, password, repeatPassword });

        res.cookie('token', token);

        res.redirect('/');
    } catch (error) {
        res.render('users/register', { error: error.message });
    }
});

router.get('/logout', isAuth, (req, res) => {
    res.clearCookie('token');

    res.redirect('/');
});


module.exports = router;