"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;


//creating component "Home".
var Home = React.createClass({
  render: function() {
      return (
        <div className = "jumbotron">
          <h1> Gaurav's React Page </h1>
          <p> A sample paragraph </p>
          <Link to="about" className="btn btn-primary btn-lg"> Learn More </Link>
        </div>
      );
  }
});

module.exports = Home;
