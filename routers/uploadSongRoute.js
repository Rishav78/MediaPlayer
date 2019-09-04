const router = require('express').Router();
const controllers = require('../controllers');

router.get('/', controllers.upload.serveUploadSongPage);
router.post('/', controllers.upload.uploadSong);

module.exports = router;