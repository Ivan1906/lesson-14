const mongoose = require('mongoose');
const { questionSchema } = require('./schema');

const QuestionModel = mongoose.model('Questions', questionSchema);

module.exports = {
    QuestionModel,
}