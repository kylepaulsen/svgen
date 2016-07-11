'use strict';

const createViewObject = require('./viewObject.js');

const ellipseViewObject = function() {
    let viewObject = createViewObject('ellipse');
    viewObject.setAttributes({
        cx: 0,
        cy: 0,
        rx: 0,
        ry: 0
    });
    viewObject.setCenterPoint = function(x, y) {
        viewObject.setAttributes({
            cx: x,
            cy: y
        });
    };
    viewObject.setXRadius = function(xradius) {
        viewObject.setAttributes({
            rx: xradius
        });
    };
    viewObject.setYRadius = function(yradius) {
        viewObject.setAttributes({
            ry: yradius
        });
    };
    return viewObject;
};

module.exports = ellipseViewObject;