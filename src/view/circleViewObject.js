'use strict';

const createViewObject = require('./viewObject.js');

const circleViewObject = function() {
    let viewObject = createViewObject('circle');
    viewObject.setAttributes({
        cx: 0,
        cy: 0,
        r: 0
    });
    viewObject.setCenterPoint = function(x, y) {
        viewObject.setAttributes({
            cx: x,
            cy: y
        });
    };
    viewObject.setRadius = function(radius) {
        viewObject.setAttributes({
            r: radius
        });
    };
    return viewObject;
};

module.exports = circleViewObject;