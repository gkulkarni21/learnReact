"use strict";

var React = require('react');


//creating component "Home".
var Home = React.createClass({
  render: function() {
      return (
        <div className = "jumbotron">
          <h1> Gaurav's React Page </h1>
          <p> A sample paragraph </p>
        </div>
      );
  }
});

module.exports = Home;
