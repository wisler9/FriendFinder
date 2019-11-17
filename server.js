var express = require("express");
var app = express();
var path = require("path");


var routes = require("./app/routing/apiRoutes.js");
var htmlRoutes = require("./app/routing/htmlRoutes.js")


var PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", routes );


app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/app/public/home.html"));
});

   
app.get("/survey", function(req, res){
    res.sendFile(path.join(__dirname, "/app/public/survey.html"));
});

// app.get("/:id", function(req, res){
//     res.sendFile(path.join(__dirname, "/app/public/home.html"));
// });
// require("./app/routing/apiRoutes")(app);
// require("./app/routing/htmlRoutes")(app);



app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
});