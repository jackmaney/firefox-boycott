On March 24, 2014, Brendan Eich was promoted to the CEO of Mozilla. In 2008, Eich made a $1,000 donation in support of Proposition 8. He has also donated money to white supremacists and Tea Party members. He is doubling down and refuses to resign.

This is a simple Node.js module inspired by [OKCupid](https://www.okcupid.com/)'s [brave message to Firefox users](http://www.huffingtonpost.com/2014/03/31/okcupid-mozilla_n_5065743.html). It currently makes use of [Express](http://expressjs.com), although this dependency may be removed in future versions.

Installation
------------

The module is up on npm, so the following should work:

	npm install firefox-boycott

Usage
-----

In essence, the module consists of a function to which you pass the Express app, a message in the form of a string (which defaults to the text in `default_message.html`), and an optional route or array of routes (defaults to `"/"`). Here's the very simple example included in the `example` folder, with only the first line altered:

	var boycotter = require("firefox-boycott");
	var app = require("express")();

	boycotter(app);

	app.all("/",function(req,res){
		res.status(200).send("<h1>Either you aren't using Firefox, or the bypass was successful!</h1>");
	});

	app.listen(3000);


The message is shown if and only if:

* Firefox is detected, and

* The `GET` parameter of `firefox_bypass` is not set (or is set to any false value in JavaScript).

TODO
-----

* ~~Make this installable via npm.~~

* Implement a cookie, so that once a bypass is made, it doesn't have to be made again for a set period of time.

* Include template engine support so that a link is generated to the original page (rather than making the user add a `GET` parameter manually).

* Adjust and tweak the default message.
