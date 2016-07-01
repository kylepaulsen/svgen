const util = require('./util');
const svg = require('./svg.js');

window.app.objects = {};
let objectMap = window.app.objects;

function clear() {
    window.app.objects = {};
    objectMap = window.app.objects;
    svg.clear();
}

function addObject(obj) {
    const uuid = util.createUUID();
    obj.uuid = uuid;
    objectMap[uuid] = obj;
    svg.add(obj.svgEl);
    return uuid;
}

function getObjectByUUID(uuid) {
    return objectMap[uuid];
}

function removeObjectByUUID(uuid) {
    const obj = objectMap[uuid];
    if (obj) {
        objectMap[uuid] = undefined;
        try {
            svg.remove(obj.svgEl);
        } catch (e) {
            console.error(e);
        }
    }
}

function exportSVG() {
    const svgCode = '<?xml version="1.0"?>' + svg.container.innerHTML;
    const blob = new Blob([svgCode], {type: 'image/svg+xml'});
    const downloadLink = document.createElement('a');

    //downloadLink.download = 'image.svg';
    downloadLink.target = '_blank';

    downloadLink.href = window.URL.createObjectURL(blob);
    downloadLink.click();
}

module.exports = {
    clear,
    addObject,
    getObjectByUUID,
    removeObjectByUUID,
    exportSVG
};
