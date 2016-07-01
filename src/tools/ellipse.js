'use strict';

const glm = require('gl-matrix');

const imageData = require('../imageData');
const EllipseObject = require('../objects/ellipseObject.js');

let currentEllipse;
let mouseDown = false;

function updateEllipse(e) {
    const firstPoint = currentEllipse.data.center;
    const cx = (e.pageX - firstPoint[0]) / 2;
    const cy = (e.pageY - firstPoint[1]) / 2;
    currentEllipse.setPos(cx, cy);
    currentEllipse.setRadX(cx);
    currentEllipse.setRadY(cy);
}

function mousedown(e) {
    if (!mouseDown && !currentEllipse) {
        let firstPoint = glm.vec2.fromValues(e.pageX, e.pageY);
        currentEllipse = EllipseObject.create(firstPoint, 0, 0, 0);
        imageData.addObject(currentEllipse);
        mouseDown = true;
    }
}

function mousemove(e) {
    if (mouseDown && currentEllipse) {
        updateEllipse(e);
    }
}

function mouseup(e) {
    if (mouseDown && currentEllipse) {
        let firstPoint = currentEllipse.data.center;
        if (firstPoint.x !== e.pageX || firstPoint.y !== e.pageY) {
            updateEllipse(e);
        }
        currentEllipse = null;
        mouseDown = false;
    }
}

module.exports = {
    mousedown,
    mouseup,
    mousemove,
    cursor: 'crosshair'
};
