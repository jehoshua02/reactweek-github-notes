var Firebase = require('firebase');
var config = require('../config/firebase');

var firebaseUtils = {
  homeInstance: function(){
    return new Firebase(config.host);
  },
  addNote: function(note){
    this.homeInstance().child(note.username).push(note.note);
  },
  toArray: function(obj){
    var arr = [];
    for(var key in obj){
      arr.push(obj[key]);
    }
    return arr;
  }
};

module.exports = firebaseUtils;
