'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var Route = ReactRouter.Route;
var DefaultRoute = ReactRouter.DefaultRoute;
var TodoApp = require('./components/TodoApp.react.js');

module.exports = (
  <Route name='todo' path='/index.html' handler={TodoApp}>
    <Route name='todofileaccess' path='/Users/pedrosantos/projects/donbonifacio/flux-playground/index.html' handler={TodoApp}>
    </Route>
  </Route>
);
