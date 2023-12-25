// import default
import z from './data.js';
console.log(z);

// import named (ชื่อต้องตรงกับที่ export)
import { magicNumber, magicName } from './data.js';
import { square as squareFN } from './data.js';
import * as DATA from './data.js';
console.log(magicNumber);
console.log(magicName);
console.log(squareFN(10));
console.log(DATA);
console.log(DATA.magicName);
console.log(DATA.magicNumber);
console.log(DATA.square(20));
