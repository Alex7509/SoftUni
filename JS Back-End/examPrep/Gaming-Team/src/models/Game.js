const mongoose = require('mongoose');

const gamesShema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength:4,
    },
    image: {
        type: String,
        required: true,
        validate:/^https?:\/\//i,
    },
    price: {
        type: Number,
        required: true,
        minValue: 0,
    },
    description: {
        type: String,
        required: true,
        minLength: 10,
    },
    genre: {
        type: String,
        required: true,
        minLength: 2,
    },
    platform: {
        type: String,
        required: true,
        enum: ['PC', 'Nintendo', 'PS4', 'PS5', 'XBOX'],
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
    buyer: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'User',
        }
    ],
});

gamesShema.method('getBuyers', function () {
    return this.buyer.map(x => x._id);
})

const Games = mongoose.model('Games', gamesShema);

module.exports = Games;