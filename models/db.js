const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mediaplayer',{ useNewUrlParser: true });
mongoose.connection.on('error', (err) => console.log(err));

module.exports = mongoose;