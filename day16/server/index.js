require('dotenv').config();
const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const passport = require('passport');
const passportLocal = require('passport-local').Strategy;
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const expressSession = require('express-session');

const app = express();

mongoose.connect('mongodb://localhost:27017/ytbAuth');


// Middleware

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))
app.use(expressSession({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true
}))
app.use(cookieParser('secretcode'))

app.use(passport.initialize());
app.use(passport.session());


// Passport

passport.use(
    new passportLocal((username, password, done) => {
        User.findOne({username: username})
        .then((user) => {
            if (!user) {
                return done(null, false);
            }
            bcrypt.compare(password, user.password, (err, result) => {
                if (err) throw err;
                if (result === true) {
                    return done(null, user);
                } else {
                    return done(null, false);
                }
            })
        })
        .catch((err) => console.log(err))
    })
)

passport.serializeUser((user, cb) => { // Store a cookie in browser
    cb(null, user.id);
}) 

passport.deserializeUser((id, cb) => { // Open the cookie
    User.findOne({_id: id})
    .then((user) => { 
        const onlyUsername = { username: user.username } // So it doesnt send the password in the console
        cb(null, onlyUsername);
    }) 
    .catch((err) => { 
        cb(err, null);
    });
})


// Schema

const userSchema = new mongoose.Schema({
    username: String,
    password: String
})

const User = mongoose.model('User', userSchema);


// Routes

app.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) return next(err);
        if (!user) return res.send('No user exists');
        req.logIn(user, err => {
            if (err) return next(err);
            res.send('Successfully Authenticated');
            console.log(req.user);
        })
    }) (req, res, next);
});

app.post('/register', (req, res) => {
    User.findOne({username: req.body.username})
    .then((doc) => { 
        if (doc) {
            res.send('User already exists');
        } else if (req.body.password === '' && req.body.username === ''){
            res.send('Need to provide a correct Username and Password');
            console.log('Username or password empty');
        } else {
            bcrypt.hash(req.body.password, 10)
            .then((hashedPassword) => {
                const newUser = new User({
                    username: req.body.username,
                    password: hashedPassword
                })
                newUser.save();
                res.send('User created');
            })
            .catch((err) => console.log(err));
        }
    })
    .catch((err) => { console.log(err) })

    console.log(req.body);
})

app.post('/logout', (req, res, next) => {
    req.logout(function(err) {
      if (err) { return next(err); }
      else { console.log('Logout Successfully') }
    });
  });

app.get('/user', (req, res) => {
    res.send(req.user); // req.user store the entire user after authenticated
})                      // le token est dans tous les request


// Port

app.listen(5000, () => { console.log('listening to port 5000')});