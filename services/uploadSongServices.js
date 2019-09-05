const songs = require('../models/song');
const path = require('path');

function uploadSong(req, res){
    if(!req.files) return res.json({success: false, msg: "some error occurred"});
    let files = req.files.file;
    if(!Array.isArray(files)) files = [files];
    files.forEach(file => {
        const { name } = file;
        const song = new songs({name});
        song.save((result) => {
            file.mv(path.join(__dirname, '..', 'assets', song._id+  path.extname(name)), function(err){
                if(err) return res.json({success: false, msg: "some error occurred"});
            })
        })
    });
    res.redirect('/login');
}

module.exports = {
    uploadSong,
}