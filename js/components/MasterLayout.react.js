var Router = require('react-router');
var React = require('react');
var Route = Router.Route, DefaultRoute = Router.DefaultRoute,
    Link=Router.Link, RouteHandler = Router.RouteHandler;

var MasterLayout = React.createClass({
  render: function () {
    return (
      <div>
      <header>
      <ul>
      <li><Link to="todo">Todos</Link></li>
      <li><Link to="about">About</Link></li>
      </ul>
      </header>

      {/* this is the important part */}
      <RouteHandler/>
      </div>
    );
  }
});

module.exports = MasterLayout;
