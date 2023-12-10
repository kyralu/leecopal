const mongoose = require("mongoose");
const User = require('./User');

const userSchema = new mongoose.Schema ({
    email: {
        type: String,
        required: true
    },
    leetcodeId: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    teams: [User]
})

module.exports = mongoose.model('User', userSchema);