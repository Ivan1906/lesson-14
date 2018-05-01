const mongoose = require('mongoose');
const { UserSchema } = require('./schema');

const UserModel = mongoose.model('Users', UserSchema);

module.exports = {
    UserModel,
}