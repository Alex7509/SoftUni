const Electronics = require('../models/Electronics');

exports.getAll = () => Electronics.find();

exports.create = (electronicsData) => Electronics.create(electronicsData);

exports.getOne = (electronicsId) => Electronics.findById(electronicsId);

exports.delete = (electronicsId) => Electronics.findByIdAndDelete(electronicsId);

exports.edit = (electronicsId, electronicsData) => Electronics.findByIdAndUpdate(electronicsId, electronicsData);
