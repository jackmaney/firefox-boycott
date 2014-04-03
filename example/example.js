var boycotter = require("../index.js");
var app = require("express")();

boycotter(app);

app.all("/",function(req,res){
	res.status(200).send("<h1>Either you aren't using Firefox, or the bypass was successful!</h1>");
});

app.listen(3000);