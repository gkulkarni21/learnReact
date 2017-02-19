"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var About = React.createClass({
  statics: {
    willTransitionTo: function(transition, params, query, callback){
      if(!confirm("Are you sure you want to see what we are all ABOUT?")){
          transition.abort();
      }
      else {
          callback();
      }
    },
    willTransitionFrom: function(transition, component){
      if(!confirm("Are you sure you want to NOT READ about us?")){
          transition.abort();
      }
    }
  },

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
            <Link to="contact" className="btn btn-primary btn-lg"> Contact Us </Link>
          </div>
    );
  }
});

module.exports = About;
