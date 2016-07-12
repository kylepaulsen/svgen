'use strict';

const svg = require('../svg.js');
const base = require('./base.js');

const Path = {
    create: function(parent, pathData) {
        parent = parent || {};
        pathData = pathData || '';
        let pathObj = base.create('path');
        pathObj.svgEl = svg.create('path');
        pathObj.svgEl.set('data-uuid', pathObj.uuid);
        pathObj.parentUuid = parent.uuid || '';

        const draw = function() {
            pathObj.svgEl.set('d', pathData);
        };

        const updateSvgEl = function() {
            draw();
            pathObj.svgEl.setAttrs(pathObj.attrs);
        };

        pathObj.setPathData = function(path) {
            pathData = path;
            draw();
        };

        updateSvgEl();

        return pathObj;
    }
};

module.exports = Path;
