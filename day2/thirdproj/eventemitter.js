var events = require('events');
var eventEmitter = new events.EventEmitter();

var listenera = function listenera() {
    console.log("Listenera Executed!");
}
var listenerb = function listenerb() {
    console.log("Listenerb Executed!");
}
var listenerc = function listenerc() {
    console.log("Listenerc Executed!");
}
var listenerd = function listenerd() {
    console.log("Listenerd Executed!");
}
var listenere = function listenere() {
    console.log("Listenere Executed!");
}

var liArr = [];
liArr.push(listenera);
liArr.push(listenerb);
liArr.push(listenerc);
liArr.push(listenerd);
liArr.push(listenere);
const eve = "myeve";
liArr.forEach(n => {
    if (n.name === 'listenerb' || n.name === 'listenerc')
        eventEmitter.addListener(eve, n);
});
eventEmitter.emit(eve);