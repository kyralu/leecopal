const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const groupSchema = new mongoose.Schema ({
    _id: { type: Schema.Types.ObjectId },
    groupIcon: {
        type: String,
        required: true
    },
    groupName: {
        type: String,
        required: true
    },
    groupMembers: [],
})

module.exports = mongoose.model('Group', groupSchema);