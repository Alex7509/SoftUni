const mongoose = require('mongoose');

const wizardSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 2,
    },
    species: {
        type: String,
        required: true,
        minLength: 3,
    },
    skinColour: {
        type: String,
        required: true,
        minLength: 3,
    },
    eyeColour: {
        type: String,
        required: true,
        minLength: 3,
    },
    image: {
        type: String,
        required: true,
        validate: /^https?:\/\//i,
    },
    description: {
        type: String,
        required: true,
        minLength: 5,
        maxlength: 500,
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
    voted: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'User',
        }
    ]
});

wizardSchema.method('getVoted', function () {
    return this.voted.map(x => x._id);
});


const Wizards = mongoose.model('Wizards', wizardSchema);

module.exports = Wizards;