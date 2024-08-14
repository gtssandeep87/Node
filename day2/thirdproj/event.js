var events = require('events');
var eventEmitter = new events.EventEmitter();

var listener1 = function listener1() {
    console.log("Listener1 Executed!");
}
var listener2 = function listener2() {
    console.log("Listener2 Executed!");
}
// eventEmitter.addListener("conn", listener1);
// eventEmitter.addListener("conn", listener2);
eventEmitter.on("conn", listener1);
eventEmitter.on("conn", listener2);
eventEmitter.removeListener("conn", listener1);
eventEmitter.emit("conn");