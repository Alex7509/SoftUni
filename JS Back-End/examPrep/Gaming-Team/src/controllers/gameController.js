const router = require('express').Router();

const gameManager = require('../managers/gameManager');
const { isAuth } = require('../middlewares/authMiddleware');

function getErrorMessage(error) {
    let errorsArr = Object.keys(error.errors);

    if (errorsArr.length > 0) {
        return error.errors[errorsArr[0]];
    } else {
        return error.message; 
    }
};

router.get('/catalog', async (req, res) => {
    const games = await gameManager.getAll().lean();

    res.render('games/catalog', { games });
});

router.get('/create',isAuth, (req, res) => {
    res.render('games/create');
});

router.post('/create',isAuth, async (req, res) => {
    const gameData = {
        ...req.body,
        owner: req.user._id
    }

    try {
        await gameManager.create(gameData);

        res.redirect('/games/catalog');
    } catch (error) {
        res.render('games/create', { error: getErrorMessage(error) });
    }
});

router.get('/:gameId/details', async (req, res) => {
    const game = await gameManager.getOne(req.params.gameId);
    const gameData = await game.toObject();

    const isOwner = req.user?._id == game.owner._id;
    const buyer = game.getBuyers();
    const isBought = req.user && buyer.some(x => x._id == req.user?._id);

    res.render('games/details', { ...gameData, isOwner, isBought });
});

router.get('/:gameId/delete',isAuth, async (req, res) => {
    const gameId = req.params.gameId;

    try {
        await gameManager.delete(gameId);

        res.redirect('/games/catalog');
    } catch (error) {
        res.render(`games/details`, { error: getErrorMessage(error) });
    }
});

router.get('/:gameId/edit',isAuth, async (req, res) => {
    const gameId = req.params.gameId;
    const game = await gameManager.getOne(gameId).lean();

    res.render(`games/edit`, { game });
});

router.post('/:gameId/edit',isAuth, async (req, res) => {
    const gameId = req.params.gameId;
    const gameData = req.body

    try {
        await gameManager.edit(gameId, gameData);

        res.redirect(`/games/${gameId}/details`);
    } catch (error) {
        res.render('games/edit', { error: getErrorMessage(error) });
    }
});

router.get('/:gameId/buy', isAuth, async (req, res) => {
    const gameId = req.params.gameId;
    const game = await gameManager.getOne(gameId);

    game.buyer.push(req.user._id);
    await game.save();

    res.redirect(`/games/${gameId}/details`);
});

module.exports = router;