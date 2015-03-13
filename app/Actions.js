var Reflux = require('reflux');

var Actions = Reflux.createActions({
  Github: { children: [ 'getBio', 'getRepos' ] },
  Notes: { children: [ '', 'add' ] },
  changeUser: {}
});

module.exports = Actions;
