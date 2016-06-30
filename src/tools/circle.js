'use strict';

const canvas = require('../canvas.js');
const imageData = require('../imageData');
const glm = require('gl-matrix');
const EllipseObject = require('../objects/ellipseObject.js');

const previewCtx = canvas.previewCtx;

let currentCircle = null;
let mouseDown = false;

function mousedown(e) {
    if (!mouseDown && !currentCircle) {
        let firstPoint = glm.vec2.fromValues(e.pageX, e.pageY);
        currentCircle = EllipseObject.create(firstPoint, 0, 0, 0);
        mouseDown = true;
    }
}

function mousemove(e) {
    if (mouseDown && currentCircle) {
        let firstPoint = currentCircle.data.center;
        canvas.previewCanvas.clear();
        let x = e.pageX - firstPoint[0];
        let y = e.pageY - firstPoint[1];
        let rad = Math.sqrt(x * x + y * y);
        currentCircle.setRadX(rad);
        currentCircle.setRadY(rad);
        currentCircle.drawOnCanvas(previewCtx);
    }
}

function mouseup(e) {
    if (mouseDown && currentCircle) {
        let firstPoint = currentCircle.data.center;
        if (firstPoint.x !== e.pageX || firstPoint.y !== e.pageY) {
            canvas.previewCanvas.clear();
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
