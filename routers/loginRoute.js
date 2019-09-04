const router = require('express').Router();
const controllers = require('../controllers');

router.get('/', controllers.login.serveLoginPage);
router.post('/', controllers.login.loginUser);

module.exports = router;