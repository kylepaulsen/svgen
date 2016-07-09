'use strict';

const glm = require('gl-matrix');
const imageData = require('../imageData.js');
const EllipseObject = require('../objects/ellipseObject.js');

const previewCanvas = window.app.canvas.previewCanvas;
let mouseDown = false;
let firstPoint = glm.vec2.create();
let currentCircle = null;

function mousedown(e) {
    if (!mouseDown && !currentCircle) {
        firstPoint[0] = e.pageX;
        firstPoint[1] = e.pageY;
        currentCircle = EllipseObject.create(glm.vec2.clone(firstPoint), 0, 0, 0);
        currentCircle.attach(previewCanvas);
        mouseDown = true;
    }
}

function mousemove(e) {
    if (mouseDown && currentCircle) {
        let firstPoint = currentCircle.data.center;
        let x = e.pageX - firstPoint[0];
        let y = e.pageY - firstPoint[1];
        let rad = Math.sqrt(x * x + y * y);
        currentCircle.setRadX(rad);
        currentCircle.setRadY(rad);
    }
}

function mouseup(e) {
    if (mouseDown && currentCircle) {
        let firstPoint = currentCircle.data.center;
        if (firstPoint[0] !== e.pageX || firstPoint[1] !== e.pageY) {
            let x = e.pageX - firstPoint[0];
            let y = e.pageY - firstPoint[1];
            let rad = Math.sqrt(x * x + y * y);
            currentCircle.setRadX(rad);
            currentCircle.setRadY(rad);
            imageData.addObject(currentCircle);
        }
        currentCircle = null;
        mouseDown = false;
    }
}

module.exports = {
    mousedown,
    mouseup,
    mousemove,
    cursor: 'crosshair'
};
