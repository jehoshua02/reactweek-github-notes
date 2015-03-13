var appConstants = require('../constants/appConstants');
var axios = require('axios');
var { client_id, client_secret } = require('../config/github');

var param = "?client_id=" + client_id + "&client_secret=" + client_sec;

var githubUtils = {
  getBio: function(username){
    var url = "https://api.github.com/users/" + username + param;
    return axios.get(url);
  },
  getRepos: function(username){
    var url = "https://api.github.com/users/" + username + "/repos" + param;
    return axios.get(url);
  }
};

module.exports = githubUtils;
