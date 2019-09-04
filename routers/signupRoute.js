const router = require('express').Router();
const controllers = require('../controllers');

router.get('/', controllers.signup.serveSignupPage);
router.post('/', controllers.signup.signupUser);

module.exports = router;