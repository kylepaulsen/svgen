'use strict';

const glm = require('gl-matrix');

const SceneObject = {
    create: function() {
        let sceneObj = {
            transform: glm.mat2d.create()
        };
        return sceneObj;
    }
};

module.exports = SceneObject;