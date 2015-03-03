var express = require("express");
var app = express();
app.set('views', __dirname + '/tpl');
app.set('view engine', "jade");
app.set('port', (process.env.PORT || 5000));
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

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
}); 
