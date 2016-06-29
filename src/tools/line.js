'use strict';

const canvas = require('../canvas.js');
const imageData = require('../imageData');

const previewCtx = canvas.previewCtx;

let firstPoint;
let mouseDown = false;

function drawLine(ctx, x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

// this might need to go in a different file.
function createLine(x1, y1, x2, y2) {
    const data = {
        type: 'line',
        x1: x1,
        y1: y1,
        x2: x2,
        y2: y2,
        draw: function(ctx) {
            drawLine(ctx, data.x1, data.y1, data.x2, data.y2);
        },
        toSVG: function() {
            return `<path d="M${data.x1} ${data.y1} L${data.x2} ${data.y2}" stroke="#000000"/>`;
        }
    };
    return data;
}

function mousedown(e) {
    firstPoint = {
        x: e.pageX,
        y: e.pageY
    };
    mouseDown = true;
}

function mousemove(e) {
    if (mouseDown && firstPoint) {
        canvas.previewCanvas.clear();
        drawLine(previewCtx, firstPoint.x, firstPoint.y, e.pageX, e.pageY);
    }
}

function mouseup(e) {
    if (mouseDown && firstPoint) {
        if (firstPoint.x !== e.pageX || firstPoint.y !== e.pageY) {
            canvas.previewCanvas.clear();
            const line = createLine(firstPoint.x, firstPoint.y, e.pageX, e.pageY);
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
