const glm = require('gl-matrix');

function createUUID() {
    // http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }

    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

function topLeftRectFrom2Points(pt1, pt2) {
    let topLeft;
    let width;
    let height;
    if (pt1[0] < pt2[0] && pt1[1] < pt2[1]) {
        // lower right quad
        topLeft = glm.vec2.clone(pt1);
        width = pt2[0] - pt1[0];
        height = pt2[1] - pt1[1];
    } else if (pt1[0] < pt2[0] && pt1[1] > pt2[1]) {
        // upper right quad
        topLeft = glm.vec2.fromValues(pt1[0], pt2[1]);
        width = pt2[0] - pt1[0];
        height = pt1[1] - pt2[1];
    } else if (pt1[0] > pt2[0] && pt1[1] > pt2[1]) {
        // upper left quad
        topLeft = glm.vec2.clone(pt2);
        width = pt1[0] - pt2[0];
        height = pt1[1] - pt2[1];
    } else {
        // lower left quad
        topLeft = glm.vec2.fromValues(pt2[0], pt1[1]);
        width = pt1[0] - pt2[0];
        height = pt2[1] - pt1[1];
    }
    return {
        topLeft,
        width,
        height
    };
}

module.exports = {
    createUUID,
    topLeftRectFrom2Points
};
