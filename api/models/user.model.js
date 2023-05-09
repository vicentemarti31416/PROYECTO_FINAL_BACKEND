const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    surname: {type: String, required: false },
    phone: {type: Number, required: false },
    image: {type: String, required: false },
    nif: {type: String, required: true},
    email_verified: { type: Boolean, default: false },
    googleId: String
})

const User = mongoose.model('user', UserSchema);

module.exports = User;
