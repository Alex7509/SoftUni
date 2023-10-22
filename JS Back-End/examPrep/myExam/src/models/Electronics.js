const mongoose = require('mongoose');

const electronicsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 10,
    },
    type: {
        type: String,
        required: true,
        minLength: 2,
    },
    damages: {
        type: String,
        required: true,
        minLength: 10,
    },
    image: {
        type: String,
        required: true,
        validate: /^https?:\/\//i,
    },
    description: {
        type: String,
        required: true,
        minLength: 10,
        maxlength: 200,
    },
    production: {
        type: Number,
        required: true,
        min: 1900,
        max: 2023,
    },
    exploitation: {
        type: Number,
        required: true,
        min: 1,
    },
    price: {
        type: Number,
        required: true,
        min: 1,
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
    buyingList: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'User',
        }
    ]
});

electronicsSchema.method('getBuyers', function () {
    return this.buyingList.map(x => x._id);
})


const Electronics = mongoose.model('Electronics', electronicsSchema);

module.exports = Electronics;