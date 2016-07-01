'use strict';

const util = require('../util.js');
const svg = require('../svg.js');

const defaultCurveOptions = {
    stroke: '#000000',
    strokeWidth: 2,
    strokeOpacity: 1
};

function create(pt1, pt2, pt3, curveOptions) {
    let opts = util.extend(defaultCurveOptions, curveOptions || {});
    const controlPoints = [pt1, pt2, pt3];
    const svgEl = svg.create('path');

    util.setElementAttrs(svgEl, opts);

    const updatePath = function() {
        const path = [
            'M' + controlPoints[0][0] + ' ' + controlPoints[0][1],
            'Q' + controlPoints[1][0] + ' ' + controlPoints[1][1],
            ' ' + controlPoints[2][0] + ' ' + controlPoints[2][1]
        ].join('');

        svgEl.set('d', path);
    };

    const getOptions = function() {
        return opts;
    };

    const setOptions = function(newOpts) {
        opts = util.shallowMerge(opts, newOpts);
        util.setElementAttrs(svgEl, opts);
    };

    updatePath();

    return {
        controlPoints,
        updatePath,
        getOptions,
        setOptions,
        svgEl
    };
}

module.exports = {
    create
};
