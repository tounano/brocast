var inherits = require('util').inherits,
  EventEmitter = require('events').EventEmitter;

module.exports = EventCursor;

function EventCursor () {
  EventEmitter.call(this);
}
inherits(EventCursor, EventEmitter);

EventCursor.prototype.destroy = function (reason) {
  if (this.isClosed) return;
  this.emit('close', reason);
  this.isClosed = true;
  this.removeAllListeners();
}
