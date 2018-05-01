const mongoose = require('mongoose');
const { answerSchema } = require('./schema');

const AnswerModel = mongoose.model('Answers', answerSchema);

module.exports = {
    AnswerModel,
}