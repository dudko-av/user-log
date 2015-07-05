module.exports = function (req, res, next) {
    return new LogController(req, res, next);
};

function LogController(req, res, next) {
    var mongoose = require('mongoose');

    this.createAction = function () {
        var LogModel = mongoose.model('Log');
        var newLog = req.body;
        newLog.userIP = req.connection.remoteAddress;
        var log = new LogModel(newLog);
        log.save(function (err) {
            if (err) { res.send({err: err}); }
            res.send('Done');
        });
    };

    this.listAction = function () {
        var LogModel = mongoose.model('Log');
        LogModel.find(req.body.conditions, req.body.projection, req.body.options, function (err, items) {
            if (err) {res.send({err: err});}
            res.send(items);
        });
    }
}
