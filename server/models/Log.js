var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var LogSchema = new Schema({
    userName: String,
    windowLocationHref: String,
    userCookie: String,
    logTime: Date,
    userIP: String
});

mongoose.model('Log', LogSchema);