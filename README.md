# KNOTTY-LOCK

# Description
Lock system for asynchronous requests (ex: Ajax)

# Why a lock?
Was discussing an issue with a work colleague where an ajax request would be executed multiple times because the triggered control existed multiple times in the DOM. We found a work around prior to writing this plugin, but this simplifies the whole problem by stopping the call dead in it's tracks after it has been called once and only allows it to be called again once it has be released. 

# How does it work?
First, link the knotty-lock.js file in your page or as a package in node.js.
Once that's done, it's as simple as englobing the lock around your request, and unlocking the element once the request is complete (success, error, etc.)

###To lock: 
```javascript
if (knottyLock.add(id, func)) { //ajax request here } 
```
Parameters: 

=> id: DOM Element but can be anything 

=> func: Function name but can be anything

=> returns: true if the request does not exists presently, false if it exists and has not been released.

** note that if the parameters for each request are different, it will never block the request

###To unlock: 
```javascript
 knottyLock.remove(id,func); /* once request is complete (success, erroc, etc.) */
```
Parameters: 

=> returns: true if the requests exists and was removed, false if it does not

** note that if the parameters of the element to release do not exist, nothing will happen (returns false)
    
