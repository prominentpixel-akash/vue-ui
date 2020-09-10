const passport = require('passport');
const glob = require('glob');
const path = require('path');

const session = require('./middlewares/session');

const indexFiles = glob.sync(
    path.join(__dirname, 'features') + '/**/*[i|I]ndex.js'
);

app.all('*', (req, res, next) => {
    return next();
});

indexFiles.forEach((file) => {
    require(file)(app);
});

app.post('/api/login', (req, res, next) => {
    passport.authenticate('local', (err, passportUser, info) => {
        if (err) {
            info = err;
        }
        if (info) {
            if (!info.message) {
                info.message = "No error message";
            }
            return res.json({
                status: 'FAILED',
                msg: info.message
            });
        }

        req.logIn(passportUser, (err) => {
            if (err) {
                console.error("passport: authenticate - login failed. Error: ");
                return res.json({
                    status: 'FAILED',
                    msg: 'Login Failed'
                });
            }
            console.log(" user logged in");
            req.session.save(() => {
                return res.json({
                    status: 'OK',
                    msg: 'Login Successful'
                });
            });
        });
    })(req, res, next);
});

app.post('/api/logout' , (req, res, next) => {
    session.logout(req, res);
})