const services = require('../services');

function serveSignupPage(req, res) {
    res.render('signup');
}

function signupUser(req, res){
    const { firstname, lastname, email, password } = req.body;
    const emailTest = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(req.isAuthenticated()) return res.redirect('/mediaplayer');
    if(!firstname || !lastname || !email || !password || !emailTest.test(email)) return res.json({success: false, msg: "some error occurred try again later"});
    services.signup.signupUser(req, res);
}

module.exports = {
    serveSignupPage,
    signupUser,
}