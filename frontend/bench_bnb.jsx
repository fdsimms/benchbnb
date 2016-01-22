var ApiUtil = require('./util/api_util'),
    BenchStore = require('./stores/bench'),
    ReactDOM = require('react-dom'),
    React = require('react'),
    Index = require('./components/index');


document.addEventListener("DOMContentLoaded", function () {
  var content = document.getElementById('content');
  ReactDOM.render(<Index />, content);
});
