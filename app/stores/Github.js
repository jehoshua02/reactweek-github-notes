var Reflux = require('reflux');
var GithubUtils = require('../utils/GithubUtils');
var Actions = require('../Actions');

var state = {
  username: '',
  bio: {},
  repos: []
};

var handleBio = function (username) {
  GithubUtils.getBio(username).then(updateBio.bind(this));
};

var updateBio = function (response) {
  state.bio = response.data;
  this.trigger();
};

var handleRepos = function (username) {
  GithubUtils.getRepos(username).then(updateRepos.bind(this));
};

var updateRepos = function (response) {
  state.repos = response.data;
  this.trigger();
};

var handleChangeUsername = function (username) {
  state.username = username;
  this.trigger();
};

var GithubStore = Reflux.createStore({
  init: function () {
    Actions.Github.getBio.listen(handleBio.bind(this));
    Actions.Github.getRepos.listen(handleRepos.bind(this));
    Actions.changeUser.listen(handleChangeUsername.bind(this));
  },

  getBio: function () {
    return state.bio;
  },

  getRepos: function () {
    return state.repos;
  }
});

module.exports = GithubStore;
