const router = require('express').Router();
const controllers = require('../controllers');

router.get('/', controllers.mediaplayer.serveMusicListPage);

module.exports = router;
