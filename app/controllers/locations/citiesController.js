var express = require('express');
var app = express.Router();
var restful = require('node-restful');
var mongoose = restful.mongoose;

var Provider = restful.model('locations', new mongoose.Schema({
	city :   String,
	areas :   [
                    {
                      Area : String,
                      subArea : []
                    }
                ],
}));

Provider.methods(['get', 'post', 'put', 'delete']);
Provider.register(app, '/area');

Provider.after('get', 'post', 'put', 'delete', function(req, res, next) {
 console.log('logging from nore-restful');
  next(); // Don't forget to call next! 
});

Provider.before('get', 'post', 'put', 'delete', function(req, res, next) {
 console.log(req);
  next(); // Don't forget to call next! 
});

module.exports = app;