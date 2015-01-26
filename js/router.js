'use strict';

var ReactRouter = require('react-router');
var HistoryLocation = ReactRouter.HistoryLocation;
var HashLocation = ReactRouter.HashLocation;
var routes = require('./routes');

var router = ReactRouter.create({
  location: process.env.NODE_ENV === 'production' ? HashLocation : HistoryLocation,
  routes: routes
});

module.exports = router;
