var express = require("express");
var app = express();
app.set('views', __dirname + '/tpl');
app.set('view engine', "jade");
app.engine('jade', require('jade').__express);

app.get("/", function(req, res){
    res.render("home");
});

app.get("/pictures", function(req, res){
    res.render("pictures");
});
app.get("/blog", function(req, res){
    res.render("blog");
});
app.get("/resume", function(req, res){
    res.render("resume");
});
app.get("/contact", function(req, res){
    res.render("contact");
});
app.get("/interesting", function(req, res){
    res.render("interesting");
});
app.use("/public", express.static(__dirname + '/public'));
app.use("/images", express.static(__dirname + '/images'));
 
var port = 3700;
var io = require('socket.io').listen(app.listen(port));
io.sockets.on('connection', function (socket) {
    socket.emit('message', { message: 'welcome to the chat' });
    socket.on('send', function (data) {
        io.sockets.emit('message', data);
    });
});
console.log("Listening on port " + port);
