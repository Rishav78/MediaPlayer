function serveMusicListPage(req, res){
    if(!req.isAuthenticated()) return res.redirect('/login');
    return res.render('mediaPlayer');
}

module.exports = {
    serveMusicListPage,
}