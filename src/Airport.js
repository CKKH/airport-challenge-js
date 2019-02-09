'use strict'

function Airport() {
  this._hanger = [];
}

Airport.prototype.hanger = function() {
  return this._hanger;
}
