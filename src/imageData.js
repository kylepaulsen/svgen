const util = require('./util');

window.app.objects = {};
let objectMap = window.app.objects;

function addObject(obj) {
    const uuid = util.createUUID();
    obj.uuid = uuid;
    objectMap[uuid] = obj;
    obj.attach(window.app.canvas.mainCanvas);
    return uuid;
}

function getObjectByUUID(uuid) {
    return objectMap[uuid];
}

function removeObjectByUUID(uuid) {
    objectMap[uuid] = undefined;
}

module.exports = {
    addObject,
    getObjectByUUID,
    removeObjectByUUID
};
