const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const questionSchema = new Schema({
    title: String,
    description: String,
    tags: [String],
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
    questionSchema,
}