"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var notFound = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Page Not Found</h1>
        <p>We dont have what you asked for!</p>
        <Link to="app"> Go back Home </Link>
      </div>
    );
  }
});

module.exports = notFound;
