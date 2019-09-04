const services = require('../services');

function getSongs(req, res) {
    if(Object.keys(req.body).length!=1 || typeof req.body.name == 'undefined') return res.json({success: false, msg: "invalid query"});
    services.song.getSongs(req, res);
}

function getSongById(req, res){
    console.log(req.query);
    if(!req.query.id) return res.json({success: false, msg: "no id pass"});
    services.song.getSongById(req, res);
}

module.exports = {
    getSongs,
    getSongById,
}