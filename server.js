const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const session = require('express-session');
const MongooseStore = require('connect-mongo')(session);
const passport = require('passport');
const bodyParser = require('body-parser');
const User = require('./models/user');
const mongoose = require('./models/db');
const upload = require('express-fileupload');
const port = 4000;

app.use('/', express.static(path.join(__dirname, 'public', 'JavaScript')));
app.use('/', express.static(path.join(__dirname, 'public', 'CSS')));
// app.use('/', express.static(path.join(__dirname, 'public', 'JavaScript')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(upload());
app.set('view engine', 'ejs');
app.use(session({
    secret: 'vcaw34567ioo',
    resave: true,
    saveUninitialized: true,
    store: new MongooseStore({
        mongooseConnection: mongoose.connection,
    }),
}));

app.use(passport.initialize());
app.use(passport.session());


app.use('/', require('./routers'));


passport.serializeUser(function(user, done) {
    done(null, user);
});
  
passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});

app.listen(port, () => console.log(`listening on port ${port}`));