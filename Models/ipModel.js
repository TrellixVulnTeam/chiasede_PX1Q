const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ip = new Schema({
    ip: {type: String, required: true},
})


module.exports = mongoose.model('bannedid', ip);