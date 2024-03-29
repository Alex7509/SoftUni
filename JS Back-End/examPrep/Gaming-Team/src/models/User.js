const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minLength: 5,
    },
    password: {
        type: String,
        required: true,
        minLength: 4,
    },
    email: {
        type: String,
        required: true,
        minLength: 10,
    },
});

userSchema.pre('save', async function () {
    const hash = await bcrypt.hash(this.password, 10);

    this.password = hash;
});


const User = mongoose.model('User', userSchema);

module.exports = User;