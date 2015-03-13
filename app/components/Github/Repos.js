var React = require('react');
var Store = require('../../stores/Github');
var Actions = require('../../Actions');


var Repos = React.createClass({
  getInitialState: function() {
    return {
      repos: Store.getRepos()
    }
  },
  componentWillReceiveProps: function(obj){
    Actions.Github.getRepos(obj.username);
  },
  componentDidMount: function(){
    Actions.Github.getRepos(this.props.username);
    Store.listen(this._onChange);
  },
  componentWillUnmount: function(){
    Store.listen(this._onChange);
  },
  _onChange: function(){
    this.setState({
      repos: Store.getRepos()
    });
  },
  render: function() {
    var repos = this.state.repos.map(function(repo, index){
      return (
        <li className="list-group-item" key={index}>
          {repo.html_url && <h4><a href={repo.html_url}>{repo.name}</a></h4>}
          {repo.description && <p>{repo.description}</p>}
        </li>
      )
    });
    return (
      <div>
        <h3> User Repos </h3>
        <ul className="list-group">
          {repos}
        </ul>
      </div>
    )
  }
});


module.exports = Repos;
