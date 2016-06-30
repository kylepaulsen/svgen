'use strict';

const glm = require('gl-matrix');
const PathObject = require('./pathObject.js');
const EllipseSegment = require('./segments/ellipseSegment.js');

const EllipseObject = {
    create: function(cenPt, radX, radY, xAxisAngle) {
        let ellipseObj = PathObject.create();

        // data model for the aggregate object
        ellipseObj.data.center = cenPt;
        ellipseObj.data.radX = radX;
        ellipseObj.data.radY = radY;
        ellipseObj.data.rotation = xAxisAngle;

        let startPt = glm.vec2.fromValues(cenPt[0] + radX, cenPt[1]);
        let endPt = glm.vec2.fromValues(cenPt[0] - radX, cenPt[1]);
        let seg1 = EllipseSegment.create(cenPt, startPt, endPt, radX, radY, xAxisAngle);
        ellipseObj.segments.push(seg1);
        let seg2 = EllipseSegment.create(cenPt, glm.vec2.clone(endPt), glm.vec2.clone(startPt), radX, radY, xAxisAngle);
        ellipseObj.segments.push(seg2);

        ellipseObj.getCenter = function() {
            return ellipseObj.data.center;
        };
        ellipseObj.getRadX = function() {
            return ellipseObj.data.radX;
        };
        ellipseObj.getRadY = function() {
            return ellipseObj.data.radY;
        };
        ellipseObj.getXRotation = function() {
            return ellipseObj.data.rotation;
        };

        ellipseObj.setCenter = function(x, y) {
            let p = ellipseObj.data.center;
            p[0] = x;
            p[1] = y;
            let seg = ellipseObj.segments[0];
            p = seg.data.center;
            p[0] = x;
            p[1] = y;
            seg = ellipseObj.segments[1];
            p = seg.data.center;
            p[0] = x;
            p[1] = y;
        };
        ellipseObj.setRadX = function(radX) {
            let c = ellipseObj.data.center;
            ellipseObj.data.radX = radX;
            let seg = ellipseObj.segments[0];
            seg.data.radX = radX;
            let s = seg.data.start;
            let e = seg.data.end;
            s[0] = c[0] + radX;
            e[0] = c[0] - radX;
            seg = ellipseObj.segments[1];
            seg.data.radX = radX;
            s = seg.data.start;
            s[0] = c[0] - radX;
            e[0] = c[0] + radX;
        };
        ellipseObj.setRadY = function(radY) {
            ellipseObj.data.radY = radY;
            ellipseObj.segments[0].data.radY = radY;
            ellipseObj.segments[1].data.radY = radY;
        };
        ellipseObj.setXRotation = function(angle) {
            ellipseObj.data.rotation = angle;
            let seg = ellipseObj.segments[0];
            seg.data.rotation = angle;
            seg = ellipseObj.segments[1];
            seg.data.rotation = angle;
        };

        return ellipseObj;
    }
};

module.exports = EllipseObject;