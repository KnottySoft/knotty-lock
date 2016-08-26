'use strict'
/* Description: Asynchronous middleware callback registration, essentially checks if the provided asynchronous function hasnt already been called */
/* Developper: Roland Durocher (viralwarrior012)*/

var knottyLock = (function() {
    var called = [];

    var add = function(id, func) {
        if (called.length > 0) {
            if (!called.find(exists(id, func))) {
                called.push(exists(id, func));
                return true;
            }
        }
        return false;
    };

    var remove = function(id, func) {
        if (called.length > 0) {
            if (called.find(exists(id, func))) {
                called.splice(called.findIndex(exists(id, func), 1, exists(id, func)));
                return true;
            }
        }
        return false;
    };

    var exists = function(id, func) {
        return {
            "id": id,
            "func": func
        };
    };

    return {
        add: add,
        remove: remove
    };
})();