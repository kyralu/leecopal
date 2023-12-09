const mongoose = require("mongoose");

const userSchema = new mongoose.Schema ({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    teams: {
        type: Array,
        default: [],
        required: true
    },
})

module.exports = mongoose.model('User', userSchema);