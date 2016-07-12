'use strict';

const svg = require('../svg.js');
const Base = require('./base.js');
const path = require('./path.js');

const Rectangle = {
    create: function(topLeftPoint, width, height) {
        const rectObj = Base.create('rect');
        rectObj.svgEl = svg.create('g');
        rectObj.svgEl.set('data-uuid', rectObj.uuid);

        const lines = [
            path.create(rectObj),
            path.create(rectObj),
            path.create(rectObj),
            path.create(rectObj)
        ];

        lines.forEach(function(line) {
            rectObj.svgEl.add(line.svgEl);
        });

        rectObj.children = lines;

        const draw = function() {
            lines[0].setPathData('M' + topLeftPoint[0] + ' ' + topLeftPoint[1] + 'L' +
                (topLeftPoint[0] + width) + ' ' + topLeftPoint[1]);
            lines[1].setPathData('M' + (topLeftPoint[0] + width) + ' ' + topLeftPoint[1] + 'L' +
                (topLeftPoint[0] + width) + ' ' + (topLeftPoint[1] + height));
            lines[2].setPathData('M' + (topLeftPoint[0] + width) + ' ' + (topLeftPoint[1] + height) + 'L' +
                topLeftPoint[0] + ' ' + (topLeftPoint[1] + height));
            lines[3].setPathData('M' + topLeftPoint[0] + ' ' + (topLeftPoint[1] + height) + 'L' +
                topLeftPoint[0] + ' ' + topLeftPoint[1]);
        };

        const updateSvgEl = function() {
            draw();
            rectObj.svgEl.setAttrs(rectObj.attrs);
        };

        rectObj.getTopLeftPoint = function() {
            return topLeftPoint;
        };
        rectObj.getWidth = function() {
            return width;
        };
        rectObj.getHeight = function() {
            return height;
        };

        rectObj.setRect = function(rectDefObj) {
            topLeftPoint[0] = rectDefObj.topLeft[0];
            topLeftPoint[1] = rectDefObj.topLeft[1];
            width = rectDefObj.width;
            height = rectDefObj.height;
            draw();
        };
        rectObj.setTopLeftPoint = function(x, y) {
            topLeftPoint[0] = x;
            topLeftPoint[1] = y;
            draw();
        };
        rectObj.setWidth = function(w) {
            width = w;
            draw();
        };
        rectObj.setHeight = function(h) {
            height = h;
            draw();
        };

        updateSvgEl();

        return rectObj;
    }
};

module.exports = Rectangle;

