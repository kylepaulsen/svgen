'use strict';

const GeomObject = require('./geomObject.js');

const CircleObject = {
    create: function(cenPt, rad) {
        let circleObj = GeomObject.create('circle');

        let resetViewObject = function() {
            var viewObj = circleObj.viewObject;
            var C = circleObj.data.center;
            var R = circleObj.data.radius;
            viewObj.setCenterPoint(C[0], C[1]);
            viewObj.setRadius(R);
        };

        // data model for the aggregate object
        circleObj.data.center = cenPt;
        circleObj.data.radius = rad;
        resetViewObject();

        circleObj.setCenterPoint = function() {
            return circleObj.data.center;
        };
        circleObj.getRadius = function() {
            return circleObj.data.radius;
        };

        circleObj.setCenterPoint = function(x, y) {
            let viewObj = circleObj.viewObject;
            let C = circleObj.data.center;
            C[0] = x;
            C[1] = y;
            viewObj.setCenterPoint(C[0], C[1]);
        };
        circleObj.setRadius = function(rad) {
            let viewObj = circleObj.viewObject;
            circleObj.data.radius = rad;
            viewObj.setRadius(rad);
        };

        let viewObject = circleObj.viewObject;
        circleObj.show = viewObject.show;
        circleObj.hide = viewObject.hide;
        circleObj.attach = viewObject.attach;
        circleObj.detach = viewObject.detach;

        return circleObj;
    }
};

module.exports = CircleObject;