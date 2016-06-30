'use strict';

const canvas = require('../canvas.js');
const imageData = require('../imageData');
const glm = require('gl-matrix');
const LineObject = require('../objects/lineObject.js');

const previewCtx = canvas.previewCtx;

let mouseDown = false;
let currentLine = null;

function mousedown(e) {
    if (!mouseDown && !currentLine) {
        let firstPoint = glm.vec2.fromValues(e.pageX, e.pageY);
        currentLine = LineObject.create(firstPoint, glm.vec2.clone(firstPoint));
        mouseDown = true;
    }
}

function mousemove(e) {
    if (mouseDown && currentLine) {
        canvas.previewCanvas.clear();
        currentLine.setEndPoint(e.pageX, e.pageY);
        currentLine.drawOnCanvas(previewCtx);
    }
}

function mouseup(e) {
    if (mouseDown && currentLine) {
        let firstPoint = currentLine.getStartPoint();
        if (firstPoint[0] !== e.pageX || firstPoint[1] !== e.pageY) {
            canvas.previewCanvas.clear();
            currentLine.setEndPoint(e.pageX, e.pageY);
            imageData.addObject(currentLine);
            currentLine = null;
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
