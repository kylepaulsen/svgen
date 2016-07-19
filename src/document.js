'use strict';

const Paper = require('paper');

window.Paper = Paper;

const canvas = document.createElement('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

document.body.appendChild(canvas);

Paper.setup(canvas);

const exportSvg = function() {
    const svg = Paper.project.exportSVG();
    const container = document.createElement('div');
    container.appendChild(svg);
    const svgCode = '<?xml version="1.0"?>' + container.innerHTML;
    const blob = new Blob([svgCode], {type: 'image/svg+xml'});
    const downloadLink = document.createElement('a');

    //downloadLink.download = 'image.svg';
    downloadLink.target = '_blank';

    downloadLink.href = window.URL.createObjectURL(blob);
    downloadLink.click();
};

module.exports = {
    canvas,
    exportSvg
};
