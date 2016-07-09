'use strict';

const glm = require('gl-matrix');
const SceneObject = require('./sceneObject.js');
const geomCreate = require('../view/viewerObjects.js');

const GeomObject = {
    create: function(geomType) {
        let geomObj = SceneObject.create();
        if (geomType === '') {
            throw new Error('No specified geometry type.');
        }

        geomObj.type = geomType;
        geomObj.stroke = '#000000';
        geomObj.strokeWidth = 1;
        geomObj.strokeOpacity = 1.0;
        geomObj.closed = false;
        geomObj.fill = 'none';
        geomObj.fillOpacity = 1.0;
        geomObj.origin = glm.vec2.create();
        geomObj.data = {};
        geomObj.viewObject = geomCreate[geomType]();

        return geomObj;
    }
};

module.exports = GeomObject;