const login = require('./loginService');
const signup = require('./signupService');
const song = require('./songService');
const upload = require('./uploadSongServices');


module.exports = {
    login,
    signup,
    song,
    upload,
};