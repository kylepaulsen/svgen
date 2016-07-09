'use strict';
const glm = require('gl-matrix');

/*
 *  Infinite line -- represented as point and direction
 */
let InfiniteLine = {
    create: function(vec2Point, vec2Dir) {
        return {
            pt: vec2Point,
            dir: vec2Dir
        };
    },
    toImplicit: function(line) {
        const v = line.dir;
        const p = line.pt;
        return glm.vec3.fromValues(v[1], -v[0], v[0] * p[1] - v[1] * p[0]);
    },
    toOrthoImplicit: function(line) {
        const v = line.dir;
        const p = line.pt;
        return glm.vec3.fromValues(-v[0], -v[1], v[0] * p[0] + v[1] * p[1]);
    },
    intx2Implicit: function(implLine1, implLine2) {
        const l1 = implLine1;
        const l2 = implLine2;
        return glm.vec3.cross(glm.vec3.create(), l1, l2);
    }
};

module.exports = {
    InfiniteLine: InfiniteLine
};