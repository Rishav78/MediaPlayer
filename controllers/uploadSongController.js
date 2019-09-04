const services = require('../services');

function serveUploadSongPage(req, res){
    res.render('uploadSong');
}

function uploadSong(req, res) {
    services.upload.uploadSong(req, res);
}

module.exports = {
    serveUploadSongPage,
    uploadSong,
}