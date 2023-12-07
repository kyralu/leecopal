const mongoose = require("mongoose");

const answerSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
});

const questionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    answers: [answerSchema]
});

module.exports = mongoose.model('Question', questionSchema);