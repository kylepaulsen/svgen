'use strict';

const svg = require('./svg.js');
const pointer = require('./tools/pointer.js');
const line = require('./tools/line.js');
const ellipse = require('./tools/ellipse.js');
const rectangle = require('./tools/rectangle.js');

const tools = {
    pointer,
    line,
    ellipse,
    rectangle
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
            svg.svgEl.style.cursor = tool.cursor;
        }
    } else {
        throw new Error('No such tool: ' + name);
    }
}

document.addEventListener('mousedown', function(e) {
    if (e.target instanceof SVGElement) {
        const tool = getTool(currentTool);
        tool.mousedown(e);
    }
});

document.addEventListener('mousemove', function(e) {
    const tool = getTool(currentTool);
    tool.mousemove(e);
});

document.addEventListener('mouseup', function(e) {
    const tool = getTool(currentTool);
    tool.mouseup(e);
});

setCurrentTool('pointer');

module.exports = {
    tools,
    getTool,
    setCurrentTool
};
