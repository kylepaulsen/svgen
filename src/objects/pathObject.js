'use strict';

const glm = require('gl-matrix');
const SceneObject = require('./sceneObject.js');

const PathObject = {
    create: function() {
        var pathObj = SceneObject.create();
        pathObj.stroke = '#000000';
        pathObj.strokeWidth = 1;
        pathObj.strokeOpacity = 1.0;
        pathObj.closed = false;
        pathObj.fill = 'none';
        pathObj.fillOpacity = 1.0;
        pathObj.origin = glm.vec2.create();
        pathObj.segments = [];
        pathObj.data = {};
        pathObj.toSVG = function() {
            let attribString = '<path d="';
            pathObj.segments.forEach(function(segment) {
                attribString += segment.toSVG();
            });
            attribString += `" stroke = "${pathObj.stroke}" ` +
                `stroke-width="${pathObj.strokeWidth}" ` +
                `stroke-opacity="${pathObj.strokeOpacity}"`;
            if (pathObj.closed) {
                attribString += ` fill-opacity="${pathObj.fillOpacity}" ` +
                `fill="${pathObj.fill}"`;
            }
            attribString += '/>';
            return attribString;
        };
        pathObj.drawOnCanvas = function(ctx) {
            pathObj.segments.forEach(function(segment) {
                segment.drawOnCanvas(ctx);
            });
        };
        return pathObj;
    }
};

module.exports = PathObject;