'use strict';

window.app = {};
const app = window.app;
app.ui = {};

const svgViewer = require('./canvas.js');
// instantiate the viewers
window.app.canvas = {};
window.app.canvas.mainCanvas = svgViewer.mainCanvas;
window.app.canvas.previewCanvas = svgViewer.previewCanvas;
document.body.appendChild(svgViewer.mainCanvas);
document.body.appendChild(svgViewer.previewCanvas);

require('./imageData.js');
const tools = require('./tools.js');

const allIdEls = document.querySelectorAll('[id]');
for (let x = 0; x < allIdEls.length; ++x) {
    const el = allIdEls[x];
    app.ui[el.id] = el;
}

app.ui.lineTool.addEventListener('click', function() {
    tools.setCurrentTool('line');
});
app.ui.circleTool.addEventListener('click', function() {
    tools.setCurrentTool('circle');
});
app.ui.ellipseTool.addEventListener('click', function() {
    tools.setCurrentTool('ellipse');
});
app.ui.rectangleTool.addEventListener('click', function() {
    tools.setCurrentTool('rectangle');
});