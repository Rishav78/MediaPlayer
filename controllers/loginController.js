const services = require('../services');

function loginUser(req, res){
    const { email } = req.body;
    const emailTest = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(req.isAuthenticated()) return res.redirect('/mediaplayer');
    if(!email || !emailTest.test(req.body.email)){
        return res.json({success: false, msg: "some error occurred try again later"});
    }
    services.login.loginUser(req, res)
}

function serveLoginPage(req, res){
    res.render('login');
}

module.exports = {
    serveLoginPage,
    loginUser,
}