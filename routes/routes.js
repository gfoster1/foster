/**
 * Created by gfoster on 3/4/15.
 */
var express = require('express');
var router = express.Router();

router.get("/", function(req, res){
    res.render("home");
});

router.get("/pictures", function(req, res){
    res.render("pictures");
});
router.get("/blog", function(req, res){
    res.render("blog");
});
router.get("/resume", function(req, res){
    res.render("resume");
});
router.get("/contact", function(req, res){
    res.render("contact");
});
router.get("/interesting", function(req, res){
    res.render("interesting");
});

module.exports = router;