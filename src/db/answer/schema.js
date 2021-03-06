const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const answerSchema = new Schema({
    description: String,
    title: String,
    questionId: {
        type: Schema.Types.ObjectId,
        ref: 'Questions'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    createdById: {
        type: Schema.Types.ObjectId,
        ref: 'Users'
    }
});

module.exports = {
    answerSchema,
}