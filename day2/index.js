import first, { str } from "./moda";
import Person from "./modb";
import { second, third, fourth, fifth } from "./modc";

first();
let obj = new Person('Hamid', 'hamid@yahoo.com');
console.log(JSON.stringify(obj));
second();
third();
console.log(str);
fourth();
fifth();