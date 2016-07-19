'use strict';

const doc = require('./document.js');

const tools = {};

require('./tools/pointer.js')(tools);
require('./tools/line.js')(tools);
require('./tools/ellipse.js')(tools);
require('./tools/rectangle.js')(tools);

function setCurrentTool(name) {
    const tool = tools[name];
    if (tool) {
        if (tool.cursor) {
            doc.canvas.style.cursor = tool.cursor;
        }
        tool.activate();
    } else {
        throw new Error('No such tool: ' + name);
    }
}

module.exports = {
    setCurrentTool
};
