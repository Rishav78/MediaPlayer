function serveHomePage(req, res){
    if(req.isAuthenticated()) return res.redirect('/mediaplayer');
    res.render('home');
}

module.exports = {
    serveHomePage,
};