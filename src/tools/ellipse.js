'use strict';

const Paper = require('paper');

function createEllipseTool(tools) {
    const tool = new Paper.Tool();
    let firstPoint;
    let path;

    tool.onMouseDown = function(e) {
        firstPoint = e.point;
    };

    tool.onMouseDrag = function(e) {
        // remove the old one so we can re-calc the correct ellipse.
        if (path) {
            path.remove();
        }

        const rect = new Paper.Rectangle(firstPoint.x, firstPoint.y,
            e.point.x - firstPoint.x, e.point.y - firstPoint.y);
        path = new Paper.Path.Ellipse(rect);
        path.strokeColor = 'black';
    };

    tool.onMouseUp = function() {
        // lose the reference so it stays.
        path = undefined;
    };

    tool.cursor = 'crosshair';

    tools.ellipse = tool;
}

module.exports = createEllipseTool;
