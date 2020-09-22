const glob = require('glob');
const path = require('path');
const authController = require('./auth/AuthController');
var JwtValidator = require('./middlewares/jwtValidator');

const indexFiles = glob.sync(
    path.join(__dirname, 'features') + '/**/*[i|I]ndex.js'
);

app.get('/auth/register', authController.register);

app.get('/auth/login', authController.login);

app.all('*', JwtValidator.Validate, (req, res, next) => {
    return next();
});

indexFiles.forEach((file) => {
    require(file)(app);
});