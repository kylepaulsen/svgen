'use strict';

const glm = require('gl-matrix');
const util = require('../util.js');

const Base = {
    create: function(type) {
        if (type === '') {
            throw new Error('No specified geometry type.');
        }

        return {
            uuid: util.createUUID(),
            type: type,
            transform: glm.mat2d.create(),
            attrs: {
                stroke: '#000000',
                strokeWidth: 2,
                strokeOpacity: 1.0,
                fill: 'transparent'
            },
            children: []
        };
    }
};

module.exports = Base;
