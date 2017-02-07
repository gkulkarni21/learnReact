"use strict";

var React = require('react');

var About = React.createClass({
  render: function () {
    return (
          <div>
            <h1> About </h1>
            <p>Technologies used for this website
                <ul>
                    <li> React</li>
                    <li> Node JS</li>
                    <li> Gulp</li>
                    <li> Browserify</li>
                    <li> Bootstrap</li>
                    <li> React Router</li>
                </ul>
            </p>
          </div>
    );
  }
});

module.exports = About;
