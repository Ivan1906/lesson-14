const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const voteSchema = new Schema({
    isPositive: Boolean,
    createdAt: {
        type: Date,
        default: Date.now
    },
    answerId: {
        type: Schema.Types.ObjectId,
        ref: 'Answers'
    },
    createdById: {
        type: Schema.Types.ObjectId,
        ref: 'Users'
    }
});

module.exports = {
    voteSchema,
}