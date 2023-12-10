const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema ({
    _id: { type: Schema.Types.ObjectId },
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
    groups: [],
    acRecords: [],
})

module.exports = mongoose.model('User', userSchema);