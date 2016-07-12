'use strict';

const glm = require('gl-matrix');
const svg = require('../svg.js');
const LineObject = require('../objects/line.js');

let mouseDown = false;
let firstPoint;
let currentLine;

function mousedown(e) {
    if (!mouseDown) {
        firstPoint = glm.vec2.fromValues(e.pageX, e.pageY);
        currentLine = LineObject.create(firstPoint, glm.vec2.clone(firstPoint));
        svg.add(currentLine);
        mouseDown = true;
    }
}

function mousemove(e) {
    if (mouseDown && currentLine) {
        currentLine.setEndPoint(e.pageX, e.pageY);
    }
}

function mouseup(e) {
    if (mouseDown && currentLine) {
        currentLine.setEndPoint(e.pageX, e.pageY);
        currentLine = undefined;
        mouseDown = false;
    }
}

module.exports = {
    mousedown,
    mouseup,
    mousemove,
    cursor: 'crosshair'
};
