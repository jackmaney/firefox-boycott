var uaParser = require('ua-parser');
var fs = require("fs");

module.exports = function(app,message,routes){
	
	if (typeof routes === "undefined" || !routes){
		routes = ["/"];
	}
	else if (typeof routes === "string" || routes instanceof String){
		routes = [routes];
	}
	else if (!(routes instanceof Array)){
		throw new Error("The 'routes' parameter, if passed, must either be a string or an array");
	}

	if(typeof message === "undefined" || !message){

		message = fs.readFileSync("default_message.html",{"encodng":"utf8"});
	}

		
	routes.forEach(function(route){
		app.all(route,function(req,res,next){
			browserType = uaParser.parse(req.headers['user-agent']).ua.family;
			if (!(req.query.firefox_bypass) && /Firefox/.test(browserType)){
				res.set("Content-Type","text/html");
				res.send(message);
			}
			else{
				next();
			}
		});
	});

}

