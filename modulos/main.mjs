import {circle, square} from "./script1.mjs";

console.log(circle(2));
console.log(square(2));


//REESCRITA


import * as lib from "./script1.mjs";

console.log(lib.circle(2));
console.log(lib.square(2));
