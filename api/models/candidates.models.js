const mongoose = require("mongoose")

const Schema = mongoose.Schema

const candidatesSchema = new Schema (
    {
        image: {type: String, required: false },
        name: {type: String, required: true },
        surname: {type: String, required: true },
        profession: {type: String, required: true },
        contact: {type: {String}, required: true },
        age: {type: Number, required: true },
        location: {type: String, required: true },
        city: {type: String, required: true },
        email: {type: String, required: false },
        phone: {type: Number, required: true },
        keywords: {type:[String], required: true },
        education: {type: String, required: true },
    }
)

const Candidates = mongoose.model("candidates", candidatesSchema);

module.exports = Candidates;