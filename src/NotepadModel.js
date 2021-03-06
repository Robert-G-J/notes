(function(exports) {
  function NotePad() {
    this._notes = [];
  }

  NotePad.prototype.createNote = function(text) {
    var note = new Note(text);
    this._notes.push(note);
  };

  NotePad.prototype.getNote = function(noteIndex) {
    return this._notes[noteIndex];
  };

  NotePad.prototype.getAllNotes = function() {
    return this._notes;
  };
  exports.NotePad = NotePad;
})(this);
