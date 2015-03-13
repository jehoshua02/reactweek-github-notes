var React = require('react');
var Actions = require('../Actions');
var SearchGithub = require('./SearchGithub');

var Home = React.createClass({
  render: function(){
    return (
      <h2 className="text-center">
        Search by Github Username Above
      </h2>
    )
  }
});

module.exports = Home;
