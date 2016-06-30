'use strict';

const PathObject = require('./pathObject.js');
const LineSegment = require('./segments/lineSegment.js');

const LineObject = {
    create: function(p1, p2) {
        let lineObj = PathObject.create();
        let lineSeg = LineSegment.create(p1, p2);
        lineObj.segments.push(lineSeg);

        // TODO: expose data better than this
        lineObj.getStartPoint = function() {
            return lineObj.segments[0].data.P1;
        };
        lineObj.getEndPoint = function() {
            return lineObj.segments[0].data.P2;
        };
        lineObj.setStartPoint = function(x, y) {
            let p = lineObj.segments[0].data.P1;
            p[0] = x;
            p[1] = y;
        };
        lineObj.setEndPoint = function(x, y) {
            let p = lineObj.segments[0].data.P2;
            p[0] = x;
            p[1] = y;
        };
        return lineObj;
    }
};

module.exports = LineObject;