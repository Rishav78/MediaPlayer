const users = require('../models/user');
const bcrypt = require('bcrypt');

async function loginUser(req, res) {
    const {email, password} = req.body;
    const user = await users.findOne({email});
    if(!user) return res.json({success: false, msg: "user does'nt exist"});
    bcrypt.compare(password, user.password, (err, result) => {
        if(err) return res.json({success: false, msg: "some error occurred try again later"});
        if(result) req.login(user._id, (err) => {
            if(err) return res.json({success: false, msg: "some error occurred try again later"});
            return res.redirect('/mediaplayer');
        });
    });
}

module.exports = {
    loginUser,
}