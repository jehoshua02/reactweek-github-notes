var React = require('react');
var Store = require('../../stores/Github');
var Actions = require('../../Actions');


var Bio = React.createClass({

  getInitialState: function () {
    return {
      bio: Store.getBio()
    };
  },

  render: function() {
    return (
      <div>
        <h3> User Profile </h3>
        <ul className="list-group">
          {this.state.bio.avatar_url && <li className="list-group-item"> <img src={this.state.bio.avatar_url} className="img-rounded img-responsive"/> </li>}
          {this.state.bio.name && <li className="list-group-item"> Name: {this.state.bio.name} </li>}
          {this.state.bio.login && <li className="list-group-item"> Username: {this.state.bio.login} </li>}
          {this.state.bio.email && <li className="list-group-item"> Email: {this.state.bio.email} </li>}
          {this.state.bio.location && <li className="list-group-item"> Location: {this.state.bio.location} </li>}
          {this.state.bio.company && <li className="list-group-item"> Company: {this.state.bio.company} </li>}
          {this.state.bio.followers && <li className="list-group-item"> Followers: {this.state.bio.followers} </li>}
          {this.state.bio.following && <li className="list-group-item"> Following: {this.state.bio.following} </li>}
          {this.state.bio.following && <li className="list-group-item"> Public Repos: {this.state.bio.public_repos} </li>}
          {this.state.bio.blog && <li className="list-group-item"> Blog: <a href={this.state.bio.blog}> {this.state.bio.blog} </a></li>}
        </ul>
      </div>
    )
  },

  componentDidMount: function () {
    this.GithubStoreUnsub = Store.listen(this.handleStoreChange);
    Actions.Github.getBio(this.props.username);
  },

  componentWillUnmount: function () {
    this.GithubStoreUnsub();
  },

  componentWillReceiveProps: function (newProps) {
    Actions.Github.getBio(newProps.username);
  },

  handleStoreChange: function () {
    this.setState({ bio: Store.getBio() });
  }
});


module.exports = Bio;
