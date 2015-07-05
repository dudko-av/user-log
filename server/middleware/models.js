var fs = require('fs');
var dir = __dirname + '/../models';

fs.readdir(dir, function (err, models) {
    models.forEach(function (model) {
       require(dir + '/' + model);
    });
});
