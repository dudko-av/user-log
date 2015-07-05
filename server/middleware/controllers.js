module.exports = function (req, res, next) {

    try {
        var controller = require('../controllers/' + capitalizeFirstLetter(req.params.controller) + 'Controller')(req, res, next);
        controller[req.params.action + 'Action']();
    } catch (e) {
        next();
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
};