'use strict';

const PathSegment = require('./pathSegment.js');

const EllipseSegment = {
    create: function(cenPt, startPt, endPt, rx, ry, xAxisAngle) {
        let ellipse = PathSegment.create();
        ellipse.data = {
            center: cenPt,
            start: startPt,
            end: endPt,
            radX: rx,
            radY: ry,
            rotation: xAxisAngle
        };
        ellipse.toSVG = function() {
            let c = ellipse.data.center;
            let s = ellipse.data.start;
            let e = ellipse.data.end;
            let sAngle = Math.atan2(s[1] - c[1], s[0] - c[0]);
            let eAngle = Math.atan2(e[1] - c[1], e[0] - c[0]);
            if (sAngle < 0) {
                sAngle += Math.PI * 2;
            }
            if (eAngle < 0) {
                eAngle += Math.PI * 2;
            }
            if (sAngle > eAngle) {
                eAngle += Math.PI * 2;
            }
            let useLargeArc = (eAngle - sAngle >= Math.PI ? 1 : 0);
            return `M${s[0]} ${s[1]} ` +
                `A ${ellipse.data.radX} ${ellipse.data.radY} ${ellipse.data.rotation} ` +
                `${useLargeArc} 1 ${e[0]} ${e[1]}`;
        };
        ellipse.drawOnCanvas = function(ctx) {
            let c = ellipse.data.center;
            let s = ellipse.data.start;
            let e = ellipse.data.end;
            let rx = ellipse.data.radX;
            let ry = ellipse.data.radY;
            let xAxisAngle = ellipse.data.rotation;
            let sa = Math.atan2(s[1] - c[1], s[0] - c[0]);
            let ea = Math.atan2(e[1] - c[1], e[0] - c[0]);
            if (sa < 0) {
                sa += Math.PI * 2;
            }
            if (ea < 0) {
                ea += Math.PI * 2;
            }
            if (sa > ea) {
                ea += Math.PI * 2;
            }
            ctx.beginPath();
            ctx.ellipse(c[0], c[1], rx, ry, xAxisAngle, sa, ea, true);
            ctx.stroke();
        };
        return ellipse;
    }
};

module.exports = EllipseSegment;