'use strict';

const GeomObject = require('./geomObject.js');

const LineObject = {
    create: function(p1, p2) {
        let lineObj = GeomObject.create('line');

        let resetViewObject = function() {
            var viewObj = lineObj.viewObject;
            var P1 = lineObj.data.P1;
            var P2 = lineObj.data.P2;
            viewObj.setStartPoint(P1[0], P1[1]);
            viewObj.setEndPoint(P2[0], P2[1]);
        };

        lineObj.data.P1 = p1;
        lineObj.data.P2 = p2;
        resetViewObject();

        // TODO: expose data better than this
        lineObj.getStartPoint = function() {
            return lineObj.data.P1;
        };
        lineObj.getEndPoint = function() {
            return lineObj.data.P2;
        };
        lineObj.setStartPoint = function(x, y) {
            let p = lineObj.data.P1;
            p[0] = x;
            p[1] = y;
            resetViewObject();
        };
        lineObj.setEndPoint = function(x, y) {
            let p = lineObj.data.P2;
            p[0] = x;
            p[1] = y;
            resetViewObject();
        };

        let viewObject = lineObj.viewObject;
        lineObj.show = viewObject.show;
        lineObj.hide = viewObject.hide;
        lineObj.attach = viewObject.attach;
        lineObj.detach = viewObject.detach;

        return lineObj;
    }
};

module.exports = LineObject;