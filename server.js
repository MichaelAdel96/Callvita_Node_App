var express = require('express');
var cookieParser = require('cookie-parser');
var path = require('path');
var router = require('./app/routes');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var flash = require('connect-flash');
var https = require('https');
var fs = require('fs');
var cors = require('cors')


const port = 8080;

// configure app
var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
app.use(cookieParser());
app.use(flash());
app.set('views', path.join(__dirname, 'views'));

// Express Validator
app.use(expressValidator({
    errorFormatter: function(param, msg, value) {
        var namespace = param.split('.'),
            root = namespace.shift(),
            formParam = root;
        while (namespace.length) {
            formParam += '[' + namespace.shift() + ']';
        }
        return {
            param: formParam,
            msg: msg,
            value: value
        };
    }
}));


var options = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
}

app.use('/', router);
https.createServer(options, app).listen(port, function() {
    console.log("server is listening on port " + port);
})