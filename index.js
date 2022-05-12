// FOR TEST CONNECT
// export { Greeter } from '/dist/Greeter';

// export { Greeter } from './src/index';

// export const printMsg = function() {
//     console.log("This is a message from the demo package");
//     console.log("DEMO RUN START");
// }


// FOR TEST DLL liv
// const MathLibDll = require('./dist/MathLibDll');
// console.log(`User: ${MathLibDll.MathLibDLLAdd(4,3)}`);
// console.log(`User: ${MathLibDll.getName()}`);

exports.MathLibDll = require('./dist/MathLibDll');