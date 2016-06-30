'use strict';

const PathSegment = {
    create: function() {
        let pathSeg = {
            data: null,
            toSVG: null,
            drawOnCanvas: null
        };
        return pathSeg;
    }
};

module.exports = PathSegment;