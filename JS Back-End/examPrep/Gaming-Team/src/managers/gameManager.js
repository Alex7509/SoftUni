const Games = require('../models/Game');

exports.getAll = () => Games.find().populate('owner');

exports.create = (gameData) => Games.create(gameData);

exports.getOne = (gameId) => Games.findById(gameId).populate('owner');

exports.delete = (gameId) => Games.findByIdAndDelete(gameId);

exports.edit = (gameId, gameData) => Games.findByIdAndUpdate(gameId, gameData);