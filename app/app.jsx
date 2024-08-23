var React = require("react");
var ReactDOM = require("react-dom");
var { Router, Route, IndexRoute, hasHistory } = require("react-router");
var Main = require("Main");
var Weather = require("Weather");
var About = require("About");
var Examples = require("Examples");

// load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Router history={hasHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About} />
      <Route path="examples" component={Examples} />
      <IndexRoute component={Weather} />
    </Route>
  </Router>,
  document.getElementById("rootApp")
);
