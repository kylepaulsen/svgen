'use strict';

const glm = require('gl-matrix');
const imageData = require('../imageData.js');
const LineObject = require('../objects/lineObject.js');

const previewCanvas = window.app.canvas.previewCanvas;
let mouseDown = false;
let firstPoint = glm.vec2.create();
let lineViewObj = null;

function mousedown(e) {
    if (!mouseDown) {
        firstPoint[0] = e.pageX;
        firstPoint[1] = e.pageY;
        lineViewObj = LineObject.create(firstPoint, glm.vec2.clone(firstPoint));
        lineViewObj.attach(previewCanvas);
        mouseDown = true;
    }
}

function mousemove(e) {
    if (mouseDown && lineViewObj) {
        lineViewObj.setEndPoint(e.pageX, e.pageY);
    }
}

function mouseup(e) {
    if (mouseDown && lineViewObj) {
        if (firstPoint[0] !== e.pageX || firstPoint[1] !== e.pageY) {
            lineViewObj.setEndPoint(e.pageX, e.pageY);
            lineViewObj.detach(previewCanvas);
            imageData.addObject(lineViewObj);
            lineViewObj = null;
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
