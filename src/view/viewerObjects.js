'use strict';

// Ways to interact with the canvas
function createViewObject(nsType) {
    let viewObject = (function() {
        var svgObject = document.createElementNS('http://www.w3.org/2000/svg', nsType);
        svgObject.setAttribute('stroke', '#000000');
        svgObject.setAttribute('fill', 'transparent');
        svgObject.setAttribute('stroke-width', '1');
        svgObject.setAttribute('visibility', 'true');
        return {
            setAttributes: function(attribObj) {
                Object.keys(attribObj).forEach(function(prop) {
                    svgObject.setAttribute(prop, attribObj[prop]);
                });
            },
            show: function() {
                svgObject.setAttribute('visibility', 'true');
            },
            hide: function() {
                svgObject.setAttribute('visibility', 'false');
            },
            attach: function(svgElement) {
                svgElement.appendChild(svgObject);
            },
            detach: function(svgElement) {
                svgElement.removeChild(svgObject);
            }
        };
    })();
    return viewObject;
}

const makeSVGObjects = {
    line: function() {
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
    },
    circle: function() {
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
    },
    ellipse: function() {
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
    },
    rect: function() {
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
    }
};

module.exports = makeSVGObjects;