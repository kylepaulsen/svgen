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

    tool.onMouseDown = function(e) {
        segment = undefined;
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
                segment = hitResult.location.segment;
            }
        }
        window.s = segment;
        if (hitResult.type === 'fill') {
            Paper.project.activeLayer.addChild(hitResult.item);
        }
    };

    tool.onMouseDrag = function(e) {
        if (segment) {
            segment.point.x += e.delta.x;
            segment.point.y += e.delta.y;
            // path.smooth();
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
