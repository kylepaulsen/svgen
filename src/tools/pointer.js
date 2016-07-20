'use strict';

const Paper = require('paper');

function createPointerTool(tools) {
    const tool = new Paper.Tool();

    const hitOptions = {
        segments: true,
        stroke: true,
        fill: true,
        tolerance: 5
    };

    let segment;
    let path;
    let curve;

    tool.onMouseDown = function(e) {
        segment = undefined;
        curve = undefined;
        path = undefined;

        var hitResult = Paper.project.hitTest(e.point, hitOptions);
        if (!hitResult) {
            return;
        }

        if (hitResult) {
            path = hitResult.item;
            if (hitResult.type === 'segment') {
                segment = hitResult.segment;
            } else if (hitResult.type === 'stroke') {
                curve = hitResult.location.curve;
            }
        }
        if (hitResult.type === 'fill') {
            Paper.project.activeLayer.addChild(hitResult.item);
        }
    };

    tool.onMouseDrag = function(e) {
        if (segment) {
            segment.point.x += e.delta.x;
            segment.point.y += e.delta.y;

            //path.smooth();
        } else if (curve) {
            // allow mouse to "sculpt" the curve by pointing the handles towards the mouse position.
            // power needs to be negative because of canvas origin.
            const DRAG_POWER = -1.5;
            const dist1 = curve.point1.getDistance(e.point);
            const dist2 = curve.point2.getDistance(e.point);
            const totalDist = dist1 + dist2;
            curve.handle1 = curve.point1.subtract(e.point).multiply(DRAG_POWER * dist1 / totalDist);
            curve.handle2 = curve.point2.subtract(e.point).multiply(DRAG_POWER * dist2 / totalDist);
        } else if (path) {
            path.position.x += e.delta.x;
            path.position.y += e.delta.y;
        }
    };

    tool.onMouseUp = function() {

    };

    tool.cursor = 'default';

    tools.pointer = tool;
}

module.exports = createPointerTool;
