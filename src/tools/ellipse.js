'use strict';

const Paper = require('paper');

function createEllipseTool(tools) {
    const tool = new Paper.Tool();
    const kappa = 0.5522847498307936;
    let firstPoint;
    let path;

    tool.onMouseDown = function(e) {
        let oldRadX = 0.1;
        let oldRadY = 0.1;
        firstPoint = e.point;
        firstPoint.name = 'This is the first point';
        const rect = new Paper.Rectangle(firstPoint.x, firstPoint.y, oldRadX, oldRadY);
        path = new Paper.Path.Ellipse(rect);
        path.strokeColor = 'black';
    };

    tool.onMouseDrag = function(e) {
        // remove the old one so we can re-calc the correct ellipse.
        let x = firstPoint.x;
        let y = firstPoint.y;
        let dx = Math.abs(e.point.x - firstPoint.x);
        let dy = Math.abs(e.point.y - firstPoint.y);
        if (dx === 0) {
            dx = 0.1;
        }
        if (dy === 0) {
            dy = 0.1;
        }
        path.segments.forEach(function(segment, idx) {
            segment.handleIn.x = Math.sign(segment.handleIn.x) * kappa * dx;
            segment.handleIn.y = Math.sign(segment.handleIn.y) * kappa * dy;
            segment.handleOut.x = Math.sign(segment.handleOut.x) * kappa * dx;
            segment.handleOut.y = Math.sign(segment.handleOut.y) * kappa * dy;
            switch (idx) {
            case 0:
                segment.point.x = x - dx;
                break;
            case 1:
                segment.point.y = y - dy;
                break;
            case 2:
                segment.point.x = x + dx;
                break;
            case 3:
                segment.point.y = y + dy;
                break;
            }
        });
    };

    tool.onMouseUp = function() {
        // lose the reference so it stays.
        path = undefined;
    };

    tool.cursor = 'crosshair';
    tools.ellipse = tool;
}

module.exports = createEllipseTool;
