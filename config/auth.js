const passport = require('passport');
const BearerStrategy = require('passport-http-bearer');

const User = require('../models/user');

passport.use(new BearerStrategy(
    function(token, done) {
        // User.findByToken(token, function (err, user) {
        //     if (err) { return done(err); }
        //     if (!user) { return done(null, false); }
        //     return done(null, user, { scope: 'all' });
        // });
        console.log(done);

        let user =  User.findByToken(token);
        if (!user) { return done(null, false); }
        return done(null, user, { scope: 'all' });

    }
));

module.exports = passport;