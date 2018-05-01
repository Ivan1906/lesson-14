const mongoose = require('mongoose');
const { voteSchema } = require('./schema');

const VoteModel = mongoose.model('Votes', voteSchema);

module.exports = {
    VoteModel
}