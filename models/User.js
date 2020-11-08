const mongoose = require('mongoose')

const user = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = User = mongoose.model('user',user);
