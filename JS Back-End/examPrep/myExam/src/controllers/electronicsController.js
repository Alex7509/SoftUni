const router = require('express').Router();

const electronicsManager = require('../managers/electronicsManager');
const { isAuth } = require('../middlewares/authMiddleware');

async function checkIsOwner(req, res, next) {
    const electronicsId = req.params.electronicsId;
    const electronics = await electronicsManager.getOne(electronicsId);

    if (electronics.owner == req.user?._id) {
        next();
    } else {
        res.redirect(`/electronics/${electronicsId}/details`);
    }
};

async function isOwner(req, res, next) {
    const electronicsId = req.params.electronicsId;
    const electronics = await electronicsManager.getOne(electronicsId);

    if (electronics.owner == req.user?._id) {
        res.redirect(`/electronics/${electronicsId}/details`);
    } else {
        next();
    }
};


router.get('/catalog', async (req, res) => {
    const electronics = await electronicsManager.getAll().lean();

    res.render('catalog', { electronics });
});

router.get('/create', (req, res) => {
    res.render('create');
});

router.post('/create', isAuth, async (req, res) => {
    const electronicsData = {
        ...req.body,
        owner: req.user._id,
    };

    try {
        await electronicsManager.create(electronicsData);

        res.redirect('/electronics/catalog');
    } catch (error) {
        res.render('create', { error: error.message });
    }
});

router.get('/:electronicsId/details', async (req, res) => {
    const electronicsId = req.params.electronicsId;
    const electronics = await electronicsManager.getOne(electronicsId);
    const electronicsData = await electronics.toObject();

    const isOwner = req.user?._id == electronics.owner._id;

    const buyer = electronics.getBuyers();
    const isBought = req.user && buyer.some(x => x._id == req.user?._id);

    res.render('details', { ...electronicsData, isOwner, isBought });
});

router.get('/:electronicsId/delete', checkIsOwner, async (req, res) => {
    const electronicsId = req.params.electronicsId;

    try {
        await electronicsManager.delete(electronicsId);

        res.redirect('/electronics/catalog');
    } catch (error) {
        res.render('details', { error: error.message });
    }
});

router.get('/:electronicsId/edit', async (req, res) => {
    const electronicsId = req.params.electronicsId;
    const electronics = await electronicsManager.getOne(electronicsId).lean();

    res.render('edit', { electronics });
});

router.post('/:electronicsId/edit', checkIsOwner, async (req, res) => {
    const electronicsId = req.params.electronicsId;
    const electronicsData = req.body;

    try {
        await electronicsManager.edit(electronicsId, electronicsData);

        res.redirect(`/electronics/${electronicsId}/details`);
    } catch (error) {
        res.render('edit', { error: error.message });
    }
});

router.get('/:electronicsId/buy', isOwner, async (req, res) => {
    const electronicsId = req.params.electronicsId;
    const electronics = await electronicsManager.getOne(electronicsId);

    electronics.buyingList.push(req.user._id);
    await electronics.save();

    res.redirect(`/electronics/${electronicsId}/details`);
});

module.exports = router;