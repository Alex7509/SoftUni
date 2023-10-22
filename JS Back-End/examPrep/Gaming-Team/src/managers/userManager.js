const bcrypt = require('bcrypt');

const User = require('../models/User');
const jwt = require('../lib/jwt');
const { SECRET } = require('../config/config');

async function validatePassword(password, userPassword) {
    const isValid = await bcrypt.compare(password, userPassword);

    if (!isValid) {
        throw new Error('Invalid email or password');
    }
};

async function getToken(user) {
    const payload = {
        _id: user._id,
        email: user.email,
        username: user.username,
    };

    const token = await jwt.sign(payload, SECRET);

    return token;
};

exports.login = async (email, password) => {
    const user = await User.findOne({ email });

    if (!user) {
        throw new Error('Invalid email or password');
    }

    await validatePassword(password, user.password);

    const token = await getToken(user);
    return token;
};

exports.register = async (userData) => {
    const { password } = userData;
    const username = await User.findOne({ username: userData.username });
    const user = await User.create(userData);

    if (username) {
        throw new Error('Username already exists');
    }

    await validatePassword(password, user.password);

    const token = await getToken(user);
    return token;
};