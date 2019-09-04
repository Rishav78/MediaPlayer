const users = require('../models/user');
const bcrypt = require('bcrypt');
const login = require('./loginService');

async function signupUser(req, res) {
    const { firstname, lastname, email, password } = req.body;
    const saltRound = 10;
    const userExist = await users.findOne({email});
    if(userExist) return res.json({success: false, msg: "user already exist"});
    bcrypt.hash(password, saltRound, function(err, hash){
        if(err) return res.json({success: false, msg: "some error occurred try again later"});
        const user = new users({firstname, lastname, email, password: hash});
        user.save(result => login.loginUser(req, res));
    });
}

module.exports = {
    signupUser,
}