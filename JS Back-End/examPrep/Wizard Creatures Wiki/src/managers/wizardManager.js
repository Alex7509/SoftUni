const Wizards = require('../models/Wizard');

exports.getAll = () => Wizards.find();

exports.create = (wizardData) => Wizards.create(wizardData);

exports.getOne = (wizardId) => Wizards.findById(wizardId).populate('voted');

exports.delete = (wizardId) => Wizards.findByIdAndDelete(wizardId);

exports.edit = (wizardId, wizardData) => Wizards.findByIdAndUpdate(wizardId, wizardData);

exports.findOwner = (userId) => Wizards.findById(userId); 