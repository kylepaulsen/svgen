'use strict';

// main canvas is where stuff gets drawn and stays there for a long time.
// redraws dont happen very often.
const mainCanvas = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
mainCanvas.setAttribute('id', 'main');
mainCanvas.setAttribute('width', window.innerWidth);
mainCanvas.setAttribute('height', window.innerHeight);
mainCanvas.setAttribute('fill', 'none');
mainCanvas.clear = function() {
    let children = mainCanvas.getElementsByTagName('*');
    for (let i = 0; i < children.length; ++i) {
        let child = children[i];
        mainCanvas.removeChild(child);
    }
};

// preview canvas is for drawing things like a 'drag' preview.
// This is for optimization because the preview canvas will get cleared a lot for redraws.
const previewCanvas = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
previewCanvas.setAttribute('id', 'preview');
previewCanvas.setAttribute('width', window.innerWidth);
previewCanvas.setAttribute('height', window.innerHeight);
previewCanvas.setAttribute('fill', 'none');
previewCanvas.setAttribute('style', [
    'position: absolute',
    'top: 0px',
    'left: 0px',
    'z-index: 10'
].join(';'));
previewCanvas.clear = function() {
    let children = previewCanvas.getElementsByTagName('*');
    for (let i = 0; i < children.length; ++i) {
        let child = children[i];
        previewCanvas.removeChild(child);
    }
};

module.exports = {
    mainCanvas: mainCanvas,
    previewCanvas: previewCanvas
};