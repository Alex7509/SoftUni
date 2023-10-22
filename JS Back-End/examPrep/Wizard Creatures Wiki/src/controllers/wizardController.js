const router = require('express').Router();

const wizardManager = require('../managers/wizardManager');
const { isAuth } = require('../middlewares/authMiddleware');

async function checkIsOwner(req, res, next) {
    const wizardId = req.params.wizardId;
    const wizard = await wizardManager.getOne(wizardId);

    if (wizard.owner == req.user?._id) {
        next();
    } else {
        res.redirect(`/wizards/${wizardId}/details`);
    }
};

async function isOwner(req, res, next) {
    const wizardId = req.params.wizardId;
    const wizard = await wizardManager.getOne(wizardId);

    if (wizard.owner == req.user?._id) {
        res.redirect(`/wizards/${wizardId}/details`);
    } else {
        next();
    }
};


router.get('/catalog', async (req, res) => {
    const wizards = await wizardManager.getAll().lean();

    res.render('all-posts', { wizards });
});

router.get('/create', (req, res) => {
    res.render('create');
});

router.post('/create', isAuth, async (req, res) => {
    const wizardData = {
        ...req.body,
        owner: req.user._id,
    };

    try {
        await wizardManager.create(wizardData);

        res.redirect('/wizards/catalog');
    } catch (error) {
        res.render('create', { error: error.message });
    }
});

router.get('/:wizardId/details', async (req, res) => {
    const wizardId = req.params.wizardId;
    const wizard = await wizardManager.getOne(wizardId);
    const wizardData = await wizard.toObject();

    const isOwner = req.user?._id == wizard.owner._id;

    const wizardOwner = await wizardManager.findOwner(wizard.owner).lean();

    const wizardInfo = wizardData.voted;

    const emails = [];
    wizardInfo.forEach(x => emails.push(x.email));
    emails.join(', ');

    const voted = wizard.getVoted();
    const isVoted = req.user && voted.some(x => x._id == req.user?._id);

    res.render('details', { ...wizardData, wizardOwner, isOwner, isVoted, wizardInfo, emails });
});

router.get('/:wizardId/delete', checkIsOwner, async (req, res) => {
    const wizardId = req.params.wizardId;

    try {
        await wizardManager.delete(wizardId);

        res.redirect('/wizards/catalog');
    } catch (error) {
        res.render(`wizards/${wizardId}/details`, { error: error.message });
    }
});

router.get('/:wizardId/edit', async (req, res) => {
    const wizardId = req.params.wizardId;
    const wizard = await wizardManager.getOne(wizardId).lean();

    res.render('edit', { wizard });
});

router.post('/:wizardId/edit', checkIsOwner, async (req, res) => {
    const wizardId = req.params.wizardId;
    const wizardData = req.body;

    try {
        await wizardManager.edit(wizardId, wizardData);

        res.redirect(`/wizards/${wizardId}/details`);
    } catch (error) {
        res.render('edit', { error: error.message });
    }
});

router.get('/:wizardId/vote', isOwner, async (req, res) => {
    const wizardId = req.params.wizardId;
    const wizard = await wizardManager.getOne(wizardId);

    wizard.voted.push(req.user);
    await wizard.save();

    res.redirect(`/wizards/${wizardId}/details`);
});

module.exports = router;