var Reflux = require('reflux');

var state = {
  user: '',
  bio: {},
  repos: []
};

var Github = Reflux.createStore({
  init: function () {},
  setUser: function () {}
});

module.exports = Github;
