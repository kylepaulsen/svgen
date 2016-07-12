'use strict';

let objectMap = {};

// Doing some dirty stuff here (imo) just to make life easier.
window.SVGElement.prototype.get = window.SVGElement.prototype.getAttribute;
window.SVGElement.prototype.set = window.SVGElement.prototype.setAttribute;
window.SVGElement.prototype.add = window.SVGElement.prototype.appendChild;
window.SVGElement.prototype.remove = window.SVGElement.prototype.removeChild;

window.SVGElement.prototype.setAttrs = function(object) {
    const that = this;
    Object.keys(object).forEach(function(key) {
        const dashed = key.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
        that.setAttribute(dashed, object[key]);
    });
};

const tagNS = 'http://www.w3.org/2000/svg';

const svg = document.createElementNS(tagNS, 'svg');
const width = window.innerWidth;
const height = window.innerHeight;

svg.set('xmlns', tagNS);
svg.set('version', '1.1');
svg.set('width', width);
svg.set('height', height);

// a container to make exporting easier.
const container = document.createElement('div');
container.appendChild(svg);
document.body.appendChild(container);

const addToObjMap = function(object) {
    objectMap[object.uuid] = object;
    object.children.forEach(addToObjMap);
};

const add = function(object) {
    // this is a special add function just for the main svg element.
    svg.add(object.svgEl);
    addToObjMap(object);
};
const clear = function() {
    svg.innerHTML = '';
    objectMap = {};
};
const create = function(elementName) {
    return document.createElementNS(tagNS, elementName);
};
const exportSvg = function() {
    const svgCode = '<?xml version="1.0"?>' + container.innerHTML;
    const blob = new Blob([svgCode], {type: 'image/svg+xml'});
    const downloadLink = document.createElement('a');

    //downloadLink.download = 'image.svg';
    downloadLink.target = '_blank';

    downloadLink.href = window.URL.createObjectURL(blob);
    downloadLink.click();
};
const getObject = function(uuid) {
    return objectMap[uuid];
};

module.exports = {
    container,
    add,
    clear,
    create,
    getObject,
    svgEl: svg,
    export: exportSvg
};
