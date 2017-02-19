"use strict";
var React = require('react');

var Router = require('react-router');
var routes = require('./routes');

//Run the Router by passing it routes and render the Handler as defined in routes.js
Router.run(routes, Router.HistoryLocation, function(Handler) {
    React.render(<Handler/>, document.getElementById('app'));
});
