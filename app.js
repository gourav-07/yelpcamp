var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

var campground = [
	{name:"Bank of River", image:"https://images.pexels.com/photos/6757/feet-morning-adventure-camping.jpg?auto=compress&cs=tinysrgb&h=350"},
	{name:"Mountain", image:"https://images.pexels.com/photos/14287/pexels-photo-14287.jpeg?auto=compress&cs=tinysrgb&h=350"},
	{name:"Hill", image:"https://images.pexels.com/photos/878251/pexels-photo-878251.jpeg?auto=compress&cs=tinysrgb&h=350"},
	{name:"Bank of River", image:"https://images.pexels.com/photos/6757/feet-morning-adventure-camping.jpg?auto=compress&cs=tinysrgb&h=350"},
	{name:"Mountain", image:"https://images.pexels.com/photos/14287/pexels-photo-14287.jpeg?auto=compress&cs=tinysrgb&h=350"},
	{name:"Hill", image:"https://images.pexels.com/photos/878251/pexels-photo-878251.jpeg?auto=compress&cs=tinysrgb&h=350"},
	{name:"Bank of River", image:"https://images.pexels.com/photos/6757/feet-morning-adventure-camping.jpg?auto=compress&cs=tinysrgb&h=350"},
	{name:"Mountain", image:"https://images.pexels.com/photos/14287/pexels-photo-14287.jpeg?auto=compress&cs=tinysrgb&h=350"},
	{name:"Hill", image:"https://images.pexels.com/photos/878251/pexels-photo-878251.jpeg?auto=compress&cs=tinysrgb&h=350"}
	];


app.get("/",function(req, res){
	res.render("landing");
});

app.get("/campground", function(req, res){
	
	res.render("campground", {campground: campground});
	
});

app.post("/campground", function(req, res){
	var name = req.body.name;
	var image = req.body.image;
	var newCampground = {name: name, image: image};
	campground.push(newCampground);
	res.redirect("/campground");
});

app.get("/campground/new", function(req, res){
	res.render("new");
});

app.listen(2000,function(){
	console.log("yelpcamp server started");
})