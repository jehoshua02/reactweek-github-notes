var Reflux = require('reflux');
var Actions = require('../Actions');
var FirebaseUtils = require('../utils/FirebaseUtils');


var state = {
  username: '',
  notes: []
};

var handleAdd = function (note) {
  FirebaseUtils.addNote(note);
};

var handleChangeUser = function (username) {
  if (state.username) {
    FirebaseUtils.homeInstance().child(state.username).off('value', handleFirebaseValue.bind(this));
  }
  FirebaseUtils.homeInstance().child(username).on('value', handleFirebaseValue.bind(this));
  state.username = username;
  this.trigger();
};

var handleFirebaseValue = function (snapshot) {
  var value = snapshot.val() || {};
  if (!value) { return; }
  state.notes = FirebaseUtils.toArray(value);
  this.trigger();
};

var Notes = Reflux.createStore({
  init: function () {
    Actions.changeUser.listen(handleChangeUser.bind(this));
    Actions.Notes.add.listen(handleAdd.bind(this));
  },

  getNotes: function () {
    return state.notes;
  }
});

module.exports = Notes;
