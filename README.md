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
if (knottyLock.add(keyOfYourChoosing)) { //ajax request here } 
```

###To unlock: 
```javascript
 knottyLock.remove(keyOfYourChoosing); /* once request is complete (success, erroc, etc.) */
```
    
#### View the example for a better overview of how it works
