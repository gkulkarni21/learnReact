$ = jQuery = require('jquery');
var React = require('react');
var Home = require('./components/homePage');

//format React.render('component we would like to render', DOM element to attach application to)
React.render(<Home />, document.getElementById('app')); //Take component 'Home' and attach it to DOM element with id = app
