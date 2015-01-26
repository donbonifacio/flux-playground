'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var Route = ReactRouter.Route;
var DefaultRoute = ReactRouter.DefaultRoute;
var TodoApp = require('./components/TodoApp.react.js');
var AboutPage = require('./components/AboutPage.react.js');

module.exports = (
  <Route name='root' path='/' handler={AboutPage}>
    <Route name="about" path="/about" handler={AboutPage} />
    <Route name='todo' path='/todo' handler={TodoApp} />
  </Route>
);
