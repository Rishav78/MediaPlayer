const home = require('./homeController');
const login = require('./loginController');
const signup = require('./signupController');
const mediaplayer = require('./mediaPlayerController');
const song = require('./songControllers');

module.exports = {
    home,
    login,
    signup,
    mediaplayer,
    song,
};