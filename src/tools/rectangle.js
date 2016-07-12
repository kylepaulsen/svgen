'use strict';

const glm = require('gl-matrix');
const svg = require('../svg.js');
const RectangleObject = require('../objects/rectangle.js');
const util = require('../util.js');

let mouseDown = false;
let firstPoint;
let currentRect;

function mousedown(e) {
    if (!mouseDown && !currentRect) {
        firstPoint = glm.vec2.fromValues(e.pageX, e.pageY);
        currentRect = RectangleObject.create(glm.vec2.clone(firstPoint), 0, 0);
        svg.add(currentRect);
        mouseDown = true;
    }
}

function mousemove(e) {
    if (mouseDown && currentRect) {
        const secondPoint = glm.vec2.fromValues(e.pageX, e.pageY);
        currentRect.setRect(util.topLeftRectFrom2Points(firstPoint, secondPoint));
    }
}

function mouseup(e) {
    if (mouseDown && currentRect) {
        const secondPoint = glm.vec2.fromValues(e.pageX, e.pageY);
        currentRect.setRect(util.topLeftRectFrom2Points(firstPoint, secondPoint));
        currentRect = undefined;
        mouseDown = false;
    }
}

module.exports = {
    mousedown,
    mouseup,
    mousemove,
    cursor: 'crosshair'
};
