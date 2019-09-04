const song = require('../models/song');
const fs = require('fs');
const path = require('path');

async function getSongs(req, res) {
    const query = req.body.name ? req.body : {};
    const songs = await song.find(query);
    return res.json({success: true, songs});
}

async function getSongById(req, res) {
    const { id } = req.query;
    const filepath = path.join(__dirname, '..', 'assets', id+".mp3");
    if(!fs.existsSync(filepath)) return res.json({success: false, msg: "file does'nt exist"});
    const stat = fs.statSync(filepath);
    const fileSize = stat.size;
    const range = req.headers.range;
    if (range) {
      const parts = range.replace(/bytes=/, "").split("-")
      const start = parseInt(parts[0], 10)
      const end = parts[1] ? parseInt(parts[1], 10): fileSize-1
      const chunksize = (end-start)+1
      const file = fs.createReadStream(filepath, {start, end})
      const head = {
        'Content-Range': `bytes ${start}-${end}/${fileSize}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': chunksize,
        'Content-Type': 'video/mp4',
      }
      res.writeHead(206, head);
      file.pipe(res);
    } else {
      const head = {
        'Content-Length': fileSize,
        'Content-Type': 'video/mp4',
      }
      res.writeHead(200, head)
      fs.createReadStream(filepath).pipe(res)
    }
}

module.exports = {
    getSongs,
    getSongById
}