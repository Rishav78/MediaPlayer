const home = require('./homeController');
const login = require('./loginController');
const signup = require('./signupController');
const mediaplayer = require('./mediaPlayerController');
const song = require('./songControllers');
const upload = require('./uploadSongController');

module.exports = {
    home,
    login,
    signup,
    mediaplayer,
    song,
    upload,
};