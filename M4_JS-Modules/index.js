// import default
import z from './data.js';
console.log(z);

// import named (ชื่อต้องตรงกับที่ export)
import { magicNumber, magicName } from './data.js';
import { square as squareFN } from './data.js';
console.log(magicNumber);
console.log(magicName);
console.log(squareFN(10));
