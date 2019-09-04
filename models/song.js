const mongoose = require('./db');

const songSchema = new mongoose.Schema({
    name: {
        type: String,
    },
});

module.exports = mongoose.model('songs', songSchema);