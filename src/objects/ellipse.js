'use strict';

const svg = require('../svg.js');
const Base = require('./base.js');
const path = require('./path.js');
const math = require('../lib/math.js');

const Ellipse = {
    create: function(center, radX, radY) {
        const ellipseObj = Base.create('ellipse');
        ellipseObj.svgEl = svg.create('g');
        ellipseObj.svgEl.set('data-uuid', ellipseObj.uuid);

        const curves = [
            path.create(ellipseObj),
            path.create(ellipseObj),
            path.create(ellipseObj),
            path.create(ellipseObj)
        ];

        curves.forEach(function(curve) {
            ellipseObj.svgEl.add(curve.svgEl);
        });

        ellipseObj.children = curves;

        const draw = function() {
            const root2m1 = math.root2 - 1;
            const k1 = 4 * radX * root2m1 / 3;
            const k2 = 4 * radY * root2m1 / 3;
            const eTop = center[1] - radY;
            const eRight = center[0] + radX;
            const eBottom = center[1] + radY;
            const eLeft = center[0] - radX;
            const cp1x = center[0] + k1;
            const cp2y = center[1] - k2;
            const cp3y = center[1] + k2;
            const cp4x = center[0] - k1;
            curves[0].setPathData([
                'M' + center[0] + ' ' + eTop,
                'C' + cp1x + ' ' + eTop,
                eRight + ' ' + cp2y,
                eRight + ' ' + center[1]
            ].join(' '));
            curves[1].setPathData([
                'M' + eRight + ' ' + center[1],
                'C' + eRight + ' ' + cp3y,
                cp1x + ' ' + eBottom,
                center[0] + ' ' + eBottom
            ].join(' '));
            curves[2].setPathData([
                'M' + center[0] + ' ' + eBottom,
                'C' + cp4x + ' ' + eBottom,
                eLeft + ' ' + cp3y,
                eLeft + ' ' + center[1]
            ].join(' '));
            curves[3].setPathData([
                'M' + eLeft + ' ' + center[1],
                'C' + eLeft + ' ' + cp2y,
                cp4x + ' ' + eTop,
                center[0] + ' ' + eTop
            ].join(' '));
        };

        const updateSvgEl = function() {
            draw();
            ellipseObj.svgEl.setAttrs(ellipseObj.attrs);
        };

        ellipseObj.getCenter = function() {
            return ellipseObj.center;
        };
        ellipseObj.getRadX = function() {
            return ellipseObj.radX;
        };
        ellipseObj.getRadY = function() {
            return ellipseObj.radY;
        };
        ellipseObj.setCenter = function(x, y) {
            center[0] = x;
            center[1] = y;
            draw();
        };
        ellipseObj.setRads = function(radx, rady) {
            radX = radx;
            radY = rady;
            draw();
        };

        updateSvgEl();

        return ellipseObj;
    }
};

module.exports = Ellipse;
