'use strict';

const Paper = require('paper');

function createRectangleTool(tools) {

    const tool = new Paper.Tool();
    let firstPoint;
    let path;

    function midPoint(p1, p2) {
        return new Paper.Point((p1.x + p2.x) / 2, (p1.y + p2.y) / 2);
    }

    tool.onMouseDown = function(e) {
        firstPoint = e.point;
    };

    tool.onMouseDrag = function(e) {
        // remove the old one so we can re-calc the correct rect.
        if (path) {
            path.remove();
        }
        path = new Paper.Path();
        path.strokeColor = 'black';

        const nePoint = new Paper.Point(e.point.x, firstPoint.y);
        const swPoint = new Paper.Point(firstPoint.x, e.point.y);

        path.add(firstPoint);
        path.add(midPoint(firstPoint, nePoint));
        path.add(nePoint);
        path.add(midPoint(nePoint, e.point));
        path.add(e.point);
        path.add(midPoint(e.point, swPoint));
        path.add(swPoint);
        path.add(midPoint(swPoint, firstPoint));
        path.closePath();
    };

    tool.onMouseUp = function() {
        // lose the reference so it stays.
        path = undefined;
    };

    tool.cursor = 'crosshair';

    tools.rectangle = tool;
}

module.exports = createRectangleTool;
