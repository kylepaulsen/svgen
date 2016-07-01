'use strict';

const svg = require('./svg.js');
const line = require('./tools/line.js');
//const ellipse = require('./tools/ellipse.js');

const tools = {
    line
    //ellipse
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
            svg.container.style.cursor = tool.cursor;
        }
    } else {
        throw new Error('No such tool: ' + name);
    }
}

document.addEventListener('mousedown', function(e) {
    if (e.target.tagName === 'svg') {
        const tool = getTool(currentTool);
        tool.mousedown(e);
    }
});

document.addEventListener('mousemove', function(e) {
    if (e.target.tagName === 'svg') {
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
