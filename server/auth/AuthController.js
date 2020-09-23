var authService = require('./AuthService');

/**
 * Signup For new user
 * @param req request
 * @param res response
 */
exports.register = function (req, res) {
    let register = authService.Register(req.body, function (err, result) {
        if (err)
            res.send(err);
        else
            res.send(result);
    })
}

/**
 * Login Api
 * @param req request
 * @param res response
 */
exports.login = function (req, res) {
    let login = authService.Login(req.body, function (err, result) {
        if (err)
            res.send(err)
        else 
            res.send(result);
    })
}