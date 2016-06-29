'use strict';

const canvas = require('../canvas.js');
const imageData = require('../imageData');
const glm = require('gl-matrix');

const previewCtx = canvas.previewCtx;

let firstPoint;
let mouseDown = false;
let mousePos = glm.vec2.create();

function drawLine(ctx, pt1, pt2) {
    ctx.beginPath();
    ctx.moveTo(pt1[0], pt1[1]);
    ctx.lineTo(pt2[0], pt2[1]);
    ctx.stroke();
}

// this might need to go in a different file.
function createLine(pt1, pt2) {
    const data = {
        type: 'line',
        pt1: pt1,
        pt2: pt2
        draw: function(ctx) {
            drawLine(ctx, data.pt1, data.pt2);
        },
        toSVG: function() {
            return `<path d="M${data.pt1[0]} ${data.pt1[1]} L${data.pt2[0]} ${data.pt2[1]}" stroke="#000000"/>`;
        }
    };
    return data;
}

function mousedown(e) {
    firstPoint = glm.vec2.fromValues(e.pageX, e.pageY);
    mouseDown = true;
}

function mousemove(e) {
    if (mouseDown && firstPoint) {
        canvas.previewCanvas.clear();
        mousePos[0] = e.pageX;
        mousePos[1] = e.pageY;
        drawLine(previewCtx, firstPoint, mousePos);
    }
}

function mouseup(e) {
    if (mouseDown && firstPoint) {
        if (firstPoint.x !== e.pageX || firstPoint.y !== e.pageY) {
            canvas.previewCanvas.clear();
            mousePos[0] = e.pageX;
            mousePos[1] = e.pageY;
            const line = createLine(firstPoint, glm.vec2.clone(mousePos));
            imageData.addObject(line);
        }
        firstPoint = undefined;
        mouseDown = false;
    }
}

module.exports = {
    mousedown,
    mouseup,
    mousemove,
    cursor: 'crosshair'
};
