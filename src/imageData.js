const util = require('./util');
const canvas = require('./canvas.js');

const mainCtx = canvas.mainCtx;

window.app.objects = {};
let objectMap = window.app.objects;


function clear() {
    window.app.objects = {};
    objectMap = window.app.objects;
    canvas.mainCanvas.clear();
}

function addObject(obj) {
    const uuid = util.createUUID();
    obj.uuid = uuid;
    objectMap[uuid] = obj;
    obj.drawOnCanvas(mainCtx);
    return uuid;
}

function getObjectByUUID(uuid) {
    return objectMap[uuid];
}

function removeObjectByUUID(uuid) {
    objectMap[uuid] = undefined;
}

function exportSVG() {
    const width = canvas.mainCanvas.width;
    const height = canvas.mainCanvas.height;
    let svg = `<?xml version="1.0"?>
    <svg width="${width}" height="${height}"
    viewPort="0 0 ${width} ${height}" version="1.1"
    xmlns="http://www.w3.org/2000/svg">`;

    Object.keys(objectMap).forEach(function(key) {
        const obj = objectMap[key];
        svg += obj.toSVG();
    });

    svg += '</svg>';

    // enabled for debugging in Chrome
    const downloadLink = document.createElement('a');
    downloadLink.target = '_blank';
    downloadLink.href = 'data:image/svg+xml;utf8,' + svg;
    downloadLink.click();

    // uncomment for production
//     const blob = new Blob([svg], {type: 'image/svg+xml'});
//     const downloadLink = document.createElement('a');
//     downloadLink.download = 'image.svg';
//     downloadLink.href = window.URL.createObjectURL(blob);
//     downloadLink.click();
}

module.exports = {
    clear,
    addObject,
    getObjectByUUID,
    removeObjectByUUID,
    exportSVG
};
