const mongoose = require("mongoose")

const Schema = mongoose.Schema

const offersSchema = new Schema (
    {
        position: {type: String, required: true },
        company: {type: String, required: true },
        description: {type: String, required: true },
        requirements: {type: String, required: true },
        salary: {type: Number, required: true },
        location: {type: String, required: true },
    }
)

const Offers = mongoose.model("offers", offersSchema);

module.exports = Offers;