'use strict';

const glm = require('gl-matrix');
const svg = require('../svg.js');
const EllipseObject = require('../objects/ellipse.js');
const util = require('../util.js');

let mouseDown = false;
let firstPoint;
let currentEllipse;

function mousedown(e) {
    if (!mouseDown && !currentEllipse) {
        firstPoint = glm.vec2.fromValues(e.pageX, e.pageY);
        currentEllipse = EllipseObject.create(glm.vec2.clone(firstPoint), 0, 0);
        svg.add(currentEllipse);
        mouseDown = true;
    }
}

function mousemove(e) {
    if (mouseDown && currentEllipse) {
        const secondPoint = glm.vec2.fromValues(e.pageX, e.pageY);
        const rect = util.topLeftRectFrom2Points(firstPoint, secondPoint);
        const radX = rect.width / 2;
        const radY = rect.height / 2;
        currentEllipse.setCenter(rect.topLeft[0] + radX, rect.topLeft[1] + radY);
        currentEllipse.setRads(radX, radY);
    }
}

function mouseup(e) {
    if (mouseDown && currentEllipse) {
        const secondPoint = glm.vec2.fromValues(e.pageX, e.pageY);
        const rect = util.topLeftRectFrom2Points(firstPoint, secondPoint);
        const radX = rect.width / 2;
        const radY = rect.height / 2;
        currentEllipse.setCenter(rect.topLeft[0] + radX, rect.topLeft[1] + radY);
        currentEllipse.setRads(radX, radY);
        currentEllipse = undefined;
        mouseDown = false;
    }
}

module.exports = {
    mousedown,
    mouseup,
    mousemove,
    cursor: 'crosshair'
};
