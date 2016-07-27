// An example of running Pa11y on multiple URLS
// in series
'use strict';

var async = require('async');
var pa11y = require('pa11y');

// Create a test instance with some default options
var test = pa11y({

	// Log what's happening to the console
	log: {
		debug: console.log.bind(console),
		error: console.error.bind(console),
		info: console.log.bind(console)
	}

});

// Use the async library to run multiple tests in series
// https://github.com/caolan/async
async.series({

	home: test.run.bind(test, 'http://localhost:3000/'),
  news: test.run.bind(test, 'http://localhost:3000/news'),
	tech: test.run.bind(test, 'http://localhost:3000/plants')

}, function(error, results) {
	if (error) {
		return console.error(error.message);
	}
	//  console.log(results.home);
  //  console.log(results.news);
	//  console.log(results.plants);
   var htmlReporter = require('pa11y/reporter/html');
   var html = htmlReporter.process(results.home, 'http://localhost:3000/');
   var html1 = htmlReporter.process(results.home, 'http://localhost:3000/news');
   console.log(html1);
});
