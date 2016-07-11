'use strict';

const createViewObject = require('./viewObject.js');

const lineViewObject = function() {
    let viewObject = createViewObject('line');
    viewObject.setAttributes({
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 0
    });
    viewObject.setStartPoint = function(x, y) {
        viewObject.setAttributes({
            x1: x,
            y1: y
        });
    };
    viewObject.setEndPoint = function(x, y) {
        viewObject.setAttributes({
            x2: x,
            y2: y
        });
    };
    return viewObject;
};

module.exports = lineViewObject;