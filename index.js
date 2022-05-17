console.log('telefire-panel-connect run:');

// FOR TEST CONNECT
// export { Greeter } from '/dist/Greeter';

// export { Greeter } from './src/index';

// export const printMsg = function() {
//     console.log("This is a message from the demo package");
//     console.log("DEMO RUN START");
// }


exports.MathLibDll = require('./dist/MathLibDll');

// FOR TEST DLL

// const MathLibDll = require('./dist/MathLibDll');
// console.log(`TEST ADD: ${MathLibDll.MathLibDLLAdd(4,3)}`);
// console.log(`TEST SUB: ${MathLibDll.MathLibDLLSub(4,3)}`);

//TEST API mock up
exports.telefireApi = require('./dist/telefireApi');