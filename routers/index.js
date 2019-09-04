const router = require('express').Router();

// router.use('/', (req, res) => res.redirect('/home'));
router.use('/home', require('./homeRoute'));
router.use('/login', require('./loginRoute'));
router.use('/signup', require('./signupRoute'));
router.use('/mediaplayer', require('./mediaPlayerRoute'));
router.use('/songs', require('./songRoute'));

module.exports = router;