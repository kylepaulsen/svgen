'use strict';

const createViewObject = require('./viewObject.js');

const rectViewObject = function() {
    let viewObject = createViewObject('rect');
    viewObject.setTopLeftCorner = function(x, y) {
        viewObject.setAttributes({
            x: x,
            y: y
        });
    };
    viewObject.setWidth = function(width) {
        viewObject.setAttributes({
            width: width
        });
    };
    viewObject.setHeight = function(height) {
        viewObject.setAttributes({
            height: height
        });
    };
    return viewObject;
};

module.exports = rectViewObject;