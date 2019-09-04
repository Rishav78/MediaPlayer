const router = require('express').Router();
const controllers = require('../controllers');

router.post('/', controllers.song.getSongs);
router.get('/', controllers.song.getSongById);

module.exports = router;