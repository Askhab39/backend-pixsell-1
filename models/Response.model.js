const mongoose = require("mongoose")
const responseSchema =  mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    commit: String
})
const Response = mongoose.model("Response",  responseSchema)

module.exports = Response