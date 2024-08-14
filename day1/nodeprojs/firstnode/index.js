/**
 * Module imports
 */
//#region 
const moda = require('./moda');
const modb = require('./modb');
const modc = require('./modc');
const modd = require('./modd');
const Mode = require('./mode');
const modf = require("./modf");
const modg = require('./modg');
const mode = new Mode.mode();
//#endregion

/**
 * Basic module imports
 */
//#region 
console.log(moda.aa);
console.log(modb.ffa(21));
console.log(modc.ffb());
console.log(modd.ffc('Parmesan and white bread go very well with each other'));
//#endregion
/**
 * Multi function module imports and class, constructor function
 */
//#region 
mode.first();
mode.sec();
mode.third();
mode.fourth();
const obj = new modf.Person('Mark Strongford', 'mark@yahoo.com');
console.log(JSON.stringify(obj));
const obja = new modg.Books('Adventures of tom sawyer', 'Mark Twain');
console.log(JSON.stringify(obja));
//#endregion
