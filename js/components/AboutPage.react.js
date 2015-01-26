var Footer = require('./Footer.react');
var Header = require('./Header.react');
var MainSection = require('./MainSection.react');
var React = require('react');
var TodoStore = require('../stores/TodoStore');
var Router = require('react-router');
var Link = Router.Link;

var AboutPage = React.createClass({

  render: function() {
    return (
      <div>ABOUT BIAATCHES

        <Link to="/todo">Todos</Link>
      </div>
  	);
  },

});

module.exports = AboutPage;
