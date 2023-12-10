const mongoose = require("mongoose");


const teamSchema = new mongoose.Schema ({
    teamIcon: {
        type: String,
        required: true
    },
    teamName: {
        type: String,
        required: true
    },
    teamMembers: {
        type: Array,
        default: [],
        required: true
    }
})

module.exports = mongoose.model('Team', teamSchema);