'use strict';

// main canvas is where stuff gets drawn and stays there for a long time.
// redraws dont happen very often.
const mainCanvas = document.createElement('canvas');
mainCanvas.width = window.innerWidth;
mainCanvas.height = window.innerHeight;

const mainCtx = mainCanvas.getContext('2d');

document.body.appendChild(mainCanvas);

mainCanvas.clear = function() {
    mainCtx.clearRect(0, 0, mainCanvas.width, mainCanvas.height);
};

// preview canvas is for drawing things like a 'drag' preview.
// This is for optimization because the preview canvas will get cleared a lot for redraws.
const previewCanvas = document.createElement('canvas');
previewCanvas.width = window.innerWidth;
previewCanvas.height = window.innerHeight;

previewCanvas.setAttribute('style', [
    'position: absolute',
    'top: 0px',
    'left: 0px',
    'z-index: 10'
].join(';'));

const previewCtx = previewCanvas.getContext('2d');

document.body.appendChild(previewCanvas);

previewCanvas.clear = function() {
    previewCtx.clearRect(0, 0, previewCanvas.width, previewCanvas.height);
};

module.exports = {
    mainCanvas,
    mainCtx,
    previewCanvas,
    previewCtx
};
