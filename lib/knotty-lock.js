'use strict'
/* Description: Asynchronous middleware callback registration, essentially checks if the provided asynchronous function hasnt already been called */
/* Developper: Roland Durocher (viralwarrior012)*/
/* LICENSE: MIT */
var knottyLock = (function() {
    var called = [];

    var add = function(key) {
        if (called.length === 0) {
            called.push(key);
            return true;
        } else if (called.length > 0) {
            for (var i = 0; i < called.length; i++) {
                if (called[i] == key) {
                    return false;
                }
            }
            called.push(key);
            return true;
        }
        return false;
    };

    var remove = function(key) {
        if (called.length > 0) {
            if (called.indexOf(key) > -1) {
                called.splice(called.indexOf(key), 1);
                return true;
            }
        }
        return false;
    };

    return {
        add: add,
        remove: remove
    };
})();

exports = module.exports = knottyLock;