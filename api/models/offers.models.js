const mongoose = require("mongoose")

const Schema = mongoose.Schema

const offersSchema = new Schema (
    { 
        // title: {type: String, required: false },
        position: {type: String, required: false },
        company: {type: String, required: false },
        description: {type: String, required: false },
        requirements: {type: String, required: false },
        salary: {type: String, required: false },
        availability: {type: String, required: false },
        location: {type: String, required: false },
        city: {type: String, required: false },
        contractType: {type: String, required: false},
        scheduleType: {type: String, required: false},
    }
)

const Offers = mongoose.model("offers", offersSchema);

module.exports = Offers;