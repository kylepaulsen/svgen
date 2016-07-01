'use strict';

window.app = {};
const app = window.app;
app.ui = {};

const allIdEls = document.querySelectorAll('[id]');
for (let x = 0; x < allIdEls.length; x++) {
    const el = allIdEls[x];
    app.ui[el.id] = el;
}

require('./svg.js');
const tools = require('./tools.js');
const imageData = require('./imageData.js');

app.ui.lineTool.addEventListener('click', function() {
    tools.setCurrentTool('line');
});
app.ui.circleTool.addEventListener('click', function() {
    tools.setCurrentTool('ellipse');
});
app.ui.export.addEventListener('click', imageData.exportSVG);
