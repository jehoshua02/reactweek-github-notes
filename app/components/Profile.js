var React = require('react');
var Router = require('react-router');

var Bio = require('../components/Github/Bio');
var Repos = require('../components/Github/Repos');
var Notes = require('../components/Notes');
var Actions = require('../Actions');


var Profile = React.createClass({
  mixins: [ Router.State ],

  render: function() {
    var username = this.getParams().username;
    return (
      <div className="row">
        <div className="col-md-4">
          <Bio username={username}/>
        </div>
        <div className="col-md-4">
          <Repos username={username}/>
        </div>
        <div className="col-md-4">
          <Notes username={username}/>
        </div>
      </div>
    );
  },

  componentDidMount: function () {
    Actions.changeUser(this.getParams().username);
  }
});

module.exports = Profile;
