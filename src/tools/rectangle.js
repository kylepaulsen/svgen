'use strict';

const glm = require('gl-matrix');
const imageData = require('../imageData.js');
const RectangleObject = require('../objects/rectangleObject.js');

const previewCanvas = window.app.canvas.previewCanvas;
let mouseDown = false;
let point1 = glm.vec2.create();
let point2 = glm.vec2.create();
let currentRect = null;
let rectState = {
    x: 0,
    y: 0,
    w: 0,
    h: 0
};

function calculateState(p1, p2, state) {
    let x = p2[0] - p1[0];
    let y = -(p2[1] - p1[1]);
    let angle = Math.atan2(y, x);
    if (angle < 0) {
        angle += Math.PI * 2;
    }
    state.w = Math.abs(x);
    state.h = Math.abs(y);
    if (angle >= 0 && angle < Math.PI / 2) {
        state.x = p1[0];
        state.y = p2[1];
    } else if (angle >= Math.PI / 2 && angle < Math.PI) {
        state.x = p2[0];
        state.y = p2[1];
    } else if (angle >= Math.PI && angle < 3 * Math.PI / 2) {
        state.x = p2[0];
        state.y = p1[1];
    } else if (angle >= 3 * Math.PI / 2 && angle < Math.PI * 2) {
        state.x = p1[0];
        state.y = p1[1];
    }
}

function mousedown(e) {
    if (!mouseDown && !currentRect) {
        point1[0] = e.pageX;
        point1[1] = e.pageY;
        point2[0] = point1[0];
        point2[1] = point1[1];
        currentRect = RectangleObject.create(glm.vec2.clone(point1), 0, 0);
        currentRect.attach(previewCanvas);
        mouseDown = true;
    }
}

function mousemove(e) {
    if (mouseDown && currentRect) {
        point2[0] = e.pageX;
        point2[1] = e.pageY;
        calculateState(point1, point2, rectState);
        currentRect.setTopLeftCorner(rectState.x, rectState.y);
        currentRect.setWidth(rectState.w);
        currentRect.setHeight(rectState.h);
    }
}

function mouseup(e) {
    if (mouseDown && currentRect) {
        if (point1[0] !== e.pageX || point1[1] !== e.pageY) {
            point2[0] = e.pageX;
            point2[1] = e.pageY;
            calculateState(point1, point2, rectState);
            currentRect.setTopLeftCorner(rectState.x, rectState.y);
            currentRect.setWidth(rectState.w);
            currentRect.setHeight(rectState.h);
            imageData.addObject(currentRect);
        }
        currentRect = null;
        mouseDown = false;
    }
}

module.exports = {
    mousedown,
    mouseup,
    mousemove,
    cursor: 'crosshair'
};
