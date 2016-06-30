'use strict';

const PathSegment = require('./pathSegment.js');

const LineSegment = {
    create: function(p1, p2) {
        let line = PathSegment.create();
        line.data = {
            P1: p1,
            P2: p2
        };
        line.toSVG = function() {
            return `M${line.data.P1[0]} ${line.data.P1[1]} ` +
                `L ${line.data.P2[0]} ${line.data.P2[1]}`;
        };
        line.drawOnCanvas = function(ctx) {
            ctx.beginPath();
            ctx.moveTo(line.data.P1[0], line.data.P1[1]);
            ctx.lineTo(line.data.P2[0], line.data.P2[1]);
            ctx.stroke();
        };
        return line;
    }
};

module.exports = LineSegment;