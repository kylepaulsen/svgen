'use strict';

const GeomObject = require('./geomObject.js');

const RectangleObject = {
    create: function(topLeftPt, width, height) {
        let rectObj = GeomObject.create('rect');

        let resetViewObject = function() {
            var viewObj = rectObj.viewObject;
            var C = rectObj.data.topLeftPoint;
            var W = rectObj.data.width;
            var H = rectObj.data.height;
            viewObj.setTopLeftCorner(C[0], C[1]);
            viewObj.setWidth(W);
            viewObj.setHeight(H);
        };

        // data model for the aggregate object
        rectObj.data.topLeftPoint = topLeftPt;
        rectObj.data.width = width;
        rectObj.data.height = height;
        resetViewObject();

        rectObj.getTopLeftCorner = function() {
            return rectObj.data.center;
        };
        rectObj.getWidth = function() {
            return rectObj.data.width;
        };
        rectObj.getHeight = function() {
            return rectObj.data.height;
        };

        rectObj.setTopLeftCorner = function(x, y) {
            let viewObj = rectObj.viewObject;
            let C = rectObj.data.topLeftPoint;
            C[0] = x;
            C[1] = y;
            viewObj.setTopLeftCorner(C[0], C[1]);
        };
        rectObj.setWidth = function(w) {
            let viewObj = rectObj.viewObject;
            rectObj.data.width = w;
            viewObj.setWidth(w);
        };
        rectObj.setHeight = function(h) {
            let viewObj = rectObj.viewObject;
            rectObj.data.height = h;
            viewObj.setHeight(h);
        };

        let viewObject = rectObj.viewObject;
        rectObj.show = viewObject.show;
        rectObj.hide = viewObject.hide;
        rectObj.attach = viewObject.attach;
        rectObj.detach = viewObject.detach;

        return rectObj;
    }
};

module.exports = RectangleObject;