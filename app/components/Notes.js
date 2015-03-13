var React = require('react');
var Store = require('../stores/Notes');
var Actions = require('../Actions');


var Notes = React.createClass({

  getInitialState: function () {
    return {
      notes: Store.getNotes()
    };
  },

  render: function () {
    return (
      <div>
        <h3> Notes for {this.props.username} </h3>
        {this.renderAddNote()}
        {this.renderNotes()}
      </div>
    );
  },

  componentDidMount: function () {
    this.NotesStoreUnsub = Store.listen(this.handleStoreChange);
  },

  componentWillUnmount: function () {
    this.NotesStoreUnsub();
  },

  componentWillReceiveProps: function (newProps) {
    Actions.changeUser(newProps.username);
  },

  handleStoreChange: function () {
    this.setState({
      notes: Store.getNotes()
    });
  },

  renderNotes: function() {
    var notes = this.state.notes.map(function(note, index) {
      return <li className="list-group-item" key={index}> {note} </li>
    });
    return (
      <ul className="list-group">
        {notes}
      </ul>
    );
  },

  renderAddNote: function () {
    return (
      <div className="input-group cushion">
        <input type="text" ref="note" className="form-control" placeholder="Add Note" />
        <span className="input-group-btn">
          <button className="btn btn-default" type="button" onClick={this.handleSubmit}>Submit</button>
        </span>
      </div>
    );
  },

  handleSubmit: function() {
    Actions.Notes.add({
      username: this.props.username,
      note: this.refs.note.getDOMNode().value
    });
    this.refs.note.getDOMNode().value = '';
  }
});

module.exports = Notes;
