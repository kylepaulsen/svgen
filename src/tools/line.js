'use strict';

const Paper = require('paper');

function createLineTool(tools) {

    const tool = new Paper.Tool();
    let firstPoint;
    let path;

    tool.onMouseDown = function(e) {
        path = new Paper.Path();
        path.strokeColor = 'black';
        firstPoint = e.point;
        path.add(e.point);
        path.add(e.point);
    };

    tool.onMouseDrag = function(e) {
        path.segments[1].point = e.point;
    };

    tool.cursor = 'crosshair';

    tools.line = tool;
}

module.exports = createLineTool;
