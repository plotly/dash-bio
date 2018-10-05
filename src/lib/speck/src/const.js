"use strict";

var elements = require("./elements");

var MIN_ATOM_RADIUS = Infinity;
var MAX_ATOM_RADIUS = -Infinity;
for (var i = 0; i <= 118; i++) {
    MIN_ATOM_RADIUS = Math.min(MIN_ATOM_RADIUS, elements[i].radius);
    MAX_ATOM_RADIUS = Math.max(MAX_ATOM_RADIUS, elements[i].radius);
}

module.exports.MIN_ATOM_RADIUS = MIN_ATOM_RADIUS;
module.exports.MAX_ATOM_RADIUS = MAX_ATOM_RADIUS;