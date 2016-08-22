//import react
var React = require('react');
var ReactDOM = require('react-dom');
//ES6 Destructuting syntax
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
//add components
var Main = require('Main');
var Bio = require('Bio');
var Face = require('Face')


//app css require
require('style!css!sass!applicationStyles');

//Create our Router
ReactDOM.render(    //pass two args, JSX and the app element
  <Router history={hashHistory}>
    {/*Main component will always be rendered*/}
    <Route path="/" component={Main}>
      {/*Add Routes here */}
    <IndexRoute component={Face}/>
    <Route path="bio" component={Bio}/>
    </Route>
  </Router>,
  document.getElementById('app') //where to render
);
