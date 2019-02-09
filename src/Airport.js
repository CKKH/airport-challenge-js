'use strict'

function Airport() {
  this._hanger = [];
}

Airport.prototype.hanger = function() {
  return this._hanger;
}

Airport.prototype.land = function(plane) {
  return this._hanger.push(plane);
}
