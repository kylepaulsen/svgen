'use strict';

module.exports = function createViewObject(nsType) {
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
};