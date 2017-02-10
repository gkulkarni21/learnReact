$ = jQuery = require('jquery');
var React = require('react');
var Home = require('./components/homePage');
var About = require('./components/about/aboutPage');
var Header = require('./components/common/header');
var Contact = require('./components/contact/contact');
var Authors = require('./components/authors/authorPage');

//creating a react component called "App" which would help us switch between About and Home
var App = React.createClass({
  render: function(){
    var Child;
    console.log("here");
    switch(this.props.route){
      case 'about': Child = About; break;
      case 'contact': Child = Contact; break;
      case 'authors': Child = Authors; break;
      default: Child = Home; break;
    }
    console.log("Child" + Child);
    return (
      <div>
        <Header />
        <Child />
      </div>
    );
}
});

function render() {
  var webroute = window.location.hash.substr(1);
  console.log(webroute);
  React.render(<App route={webroute} />, document.getElementById('app'));  //Take component returned by App and attach it to DOM element with id = app
}

window.addEventListener('hashchange', render);
render();
