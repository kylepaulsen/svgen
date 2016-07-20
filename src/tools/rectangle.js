'use strict';

const Paper = require('paper');

function createRectangleTool(tools) {

    const tool = new Paper.Tool();
    let firstPoint;
    let path;

    tool.onMouseDown = function(e) {
        firstPoint = e.point;
    };

    tool.onMouseDrag = function(e) {
        // remove the old one so we can re-calc the correct rect.
        if (path) {
            path.remove();
        }
        path = new Paper.Path.Rectangle(firstPoint, e.point);
        path.strokeColor = 'black';
    };

    tool.onMouseUp = function() {
        // lose the reference so it stays.
        path = undefined;
    };

    tool.cursor = 'crosshair';

    tools.rectangle = tool;
}

module.exports = createRectangleTool;
