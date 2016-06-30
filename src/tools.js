'use strict';

const canvas = require('./canvas');
const line = require('./tools/line.js');
const circle = require('./tools/circle.js');

const tools = {
    line,
    circle
};

let currentTool;

function getTool(name) {
    const tool = tools[name];
    if (tool) {
        return tool;
    } else {
        throw new Error('No such tool: ' + name);
    }
}

function setCurrentTool(name) {
    const tool = tools[name];
    if (tool) {
        currentTool = name;
        if (tool.cursor) {
            canvas.previewCanvas.style.cursor = tool.cursor;
        }
    } else {
        throw new Error('No such tool: ' + name);
    }
}

document.addEventListener('mousedown', function(e) {
    if (e.target.tagName === 'CANVAS') {
        const tool = getTool(currentTool);
        tool.mousedown(e);
    }
});

document.addEventListener('mousemove', function(e) {
    if (e.target.tagName === 'CANVAS') {
        const tool = getTool(currentTool);
        tool.mousemove(e);
    }
});

document.addEventListener('mouseup', function(e) {
    const tool = getTool(currentTool);
    tool.mouseup(e);
});

setCurrentTool('line');

module.exports = {
    tools,
    getTool,
    setCurrentTool
};
