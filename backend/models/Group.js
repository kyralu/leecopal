const mongoose = require("mongoose");

const groupSchema = new mongoose.Schema ({
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