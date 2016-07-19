'use strict';

window.app = {};
const app = window.app;
app.ui = {};

// fetch all important ui elements and put them into app.ui
const allIdEls = document.querySelectorAll('[id]');
for (let x = 0; x < allIdEls.length; ++x) {
    const el = allIdEls[x];
    app.ui[el.id] = el;
}

const doc = require('./document.js');
const tools = require('./tools.js');

tools.setCurrentTool('pointer');

app.ui.pointerTool.addEventListener('click', function() {
    tools.setCurrentTool('pointer');
});

app.ui.lineTool.addEventListener('click', function() {
    tools.setCurrentTool('line');
});

app.ui.ellipseTool.addEventListener('click', function() {
    tools.setCurrentTool('ellipse');
});

app.ui.rectangleTool.addEventListener('click', function() {
    tools.setCurrentTool('rectangle');
});

app.ui.export.addEventListener('click', doc.exportSvg);
