'use strict';

const svg = require('../svg.js');
const base = require('./base.js');

const Line = {
    create: function(p1, p2) {
        let lineObj = base.create('line');
        lineObj.svgEl = svg.create('path');
        lineObj.svgEl.set('data-uuid', lineObj.uuid);

        const draw = function() {
            lineObj.svgEl.set('d', 'M' + p1[0] + ' ' + p1[1] + 'L' + p2[0] + ' ' + p2[1]);
        };

        const updateSvgEl = function() {
            draw();
            lineObj.svgEl.setAttrs(lineObj.attrs);
        };

        lineObj.getStartPoint = function() {
            return p1;
        };
        lineObj.getEndPoint = function() {
            return p2;
        };
        lineObj.setStartPoint = function(x, y) {
            p1[0] = x;
            p1[1] = y;
            draw();
        };
        lineObj.setEndPoint = function(x, y) {
            p2[0] = x;
            p2[1] = y;
            draw();
        };

        updateSvgEl();

        return lineObj;
    }
};

module.exports = Line;
