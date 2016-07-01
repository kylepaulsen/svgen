function createUUID() {
    // http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }

    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

function camelToDashes(str) {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

function setElementAttrs(el, opts) {
    Object.keys(opts).forEach(function(key) {
        el.setAttribute(camelToDashes(key), opts[key]);
    });
}

function shallowClone(obj) {
    const clone = {};
    Object.keys(obj).forEach(function(key) {
        clone[key] = obj[key];
    });
    return clone;
}

function shallowMerge(baseObj, priorityObj) {
    Object.keys(priorityObj).forEach(function(key) {
        baseObj[key] = priorityObj[key];
    });
    return baseObj;
}

function extend(baseObj, priorityObj) {
    return shallowMerge(shallowClone(baseObj), priorityObj);
}

module.exports = {
    createUUID,
    camelToDashes,
    setElementAttrs,
    shallowClone,
    shallowMerge,
    extend
};
