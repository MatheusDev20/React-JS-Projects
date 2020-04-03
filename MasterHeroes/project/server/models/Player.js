const mongoose = require('mongoose')

const playerSchema = mongoose.Schema({
    nickname: {
        type: String,
        required: true
    },
    pts: Number
})
module.exports = mongoose.model('Player', playerSchema)