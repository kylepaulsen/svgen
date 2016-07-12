'use strict';

const svg = require('../svg.js');

function mousedown(e) {
    const uuid = e.target.get('data-uuid');
    if (uuid) {
        console.log(svg.getObject(uuid));
    } else {
        console.log('No uuid found for: ', e.target);
    }
}

function mousemove() {

}

function mouseup() {

}

module.exports = {
    mousedown,
    mouseup,
    mousemove,
    cursor: 'default'
};
