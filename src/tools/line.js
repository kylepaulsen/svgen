'use strict';

const glm = require('gl-matrix');

const imageData = require('../imageData');
const quadraticCurve = require('../objects/quadraticCurve.js');

let mouseDown = false;
let currentLine;

function mousedown(e) {
    if (!mouseDown && !currentLine) {
        let firstPoint = glm.vec2.fromValues(e.pageX, e.pageY);
        currentLine = quadraticCurve.create(firstPoint,
            glm.vec2.clone(firstPoint),
            glm.vec2.clone(firstPoint));
        imageData.addObject(currentLine);
        mouseDown = true;
    }
}

function mousemove(e) {
    if (mouseDown && currentLine) {
        currentLine.controlPoints[2][0] = e.pageX;
        currentLine.controlPoints[2][1] = e.pageY;
        currentLine.updatePath();
    }
}

function mouseup(e) {
    if (mouseDown && currentLine) {
        let firstPoint = currentLine.controlPoints[0];
        if (firstPoint[0] !== e.pageX || firstPoint[1] !== e.pageY) {
            currentLine.controlPoints[2][0] = e.pageX;
            currentLine.controlPoints[2][1] = e.pageY;
            currentLine.updatePath();
            currentLine = undefined;
            mouseDown = false;
        }
    }
}

module.exports = {
    mousedown,
    mouseup,
    mousemove,
    cursor: 'crosshair'
};
