var express = require("express");
var path = require("path");
var router = express.Router();



module.exports = function(app) {
    app.get("/", function(req, res) {
        res.send(path.join(__dirname,"../public/home.html"));
    });

    app.get("/survey", function(req, res){
        res.send(path.join(__dirname,"../public/survey.html"));
    });

}