'use strict';

const GeomObject = require('./geomObject.js');

const EllipseObject = {
    create: function(cenPt, radX, radY, xAxisAngle) {
        let ellipseObj = GeomObject.create('ellipse');

        let resetViewObject = function() {
            var viewObj = ellipseObj.viewObject;
            var C = ellipseObj.data.center;
            var Rx = ellipseObj.data.radX;
            var Ry = ellipseObj.data.radY;
            viewObj.setCenterPoint(C[0], C[1]);
            viewObj.setXRadius(Rx);
            viewObj.setYRadius(Ry);
        };

        // data model for the aggregate object
        ellipseObj.data.center = cenPt;
        ellipseObj.data.radX = radX;
        ellipseObj.data.radY = radY;
        ellipseObj.data.rotation = xAxisAngle;
        resetViewObject();

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
            let viewObj = ellipseObj.viewObject;
            let C = ellipseObj.data.center;
            C[0] = x;
            C[1] = y;
            viewObj.setCenterPoint(C[0], C[1]);
        };
        ellipseObj.setRadX = function(radX) {
            let viewObj = ellipseObj.viewObject;
            ellipseObj.data.radX = radX;
            viewObj.setXRadius(radX);
        };
        ellipseObj.setRadY = function(radY) {
            let viewObj = ellipseObj.viewObject;
            ellipseObj.data.radY = radY;
            viewObj.setYRadius(radY);
        };
        ellipseObj.setXRotation = function(angle) {
            // function unused -- things in here total crap
            resetViewObject();
            return angle;
        };

        let viewObject = ellipseObj.viewObject;
        ellipseObj.show = viewObject.show;
        ellipseObj.hide = viewObject.hide;
        ellipseObj.attach = viewObject.attach;
        ellipseObj.detach = viewObject.detach;

        return ellipseObj;
    }
};

module.exports = EllipseObject;