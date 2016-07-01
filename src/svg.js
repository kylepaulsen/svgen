'use strict';

// Doing some dirty stuff here (imo) just to make life easier.
window.SVGElement.prototype.get = window.SVGElement.prototype.getAttribute;
window.SVGElement.prototype.set = window.SVGElement.prototype.setAttribute;
window.SVGElement.prototype.add = window.SVGElement.prototype.appendChild;
window.SVGElement.prototype.remove = window.SVGElement.prototype.removeChild;

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

svg.container = container;
svg.clear = function() {
    svg.innerHTML = '';
};
svg.create = function(elementName) {
    return document.createElementNS(tagNS, elementName);
};

module.exports = svg;
