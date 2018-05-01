const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Profile = new Schema({
    fullName: String,
    post: String
});

const UserSchema = new Schema({
    _id: Schema.Types.ObjectId,
    email: String,
    profile: Profile,
    services: String
});

module.exports = {
    UserSchema,
}