var express = require("express");
var bodyParser = require("body-parser")
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set('views', __dirname + '/tpl');
app.set('view engine', "jade");
app.set('port', (process.env.PORT || 5000));
app.engine('jade', require('jade').__express);

app.use("/public", express.static(__dirname + '/public'));
app.use("/images", express.static(__dirname + '/images'));

var routes = require("./routes/routes");
app.use("/", routes);


/// catch 404 and forwarding to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
} else {
// production error handler
// no stacktraces leaked to user
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: {}
        });
    });
}


app.listen(app.get('port'), function () {
    console.log("Node app is running at localhost:" + app.get('port'));
}); 
