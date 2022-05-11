const ffi = require('ffi-napi');
// export { Greeter } from './src/index';
//
// export const printMsg = function() {
//     console.log("This is a message from the demo package");
//     console.log("DEMO RUN START");
// }

// exports.telefirePanelConnect ={
//     printMsg : printMsg,
//     greeter: Greeter
// }


const mathLibrary = ffi.Library("./MathLibrary",{
    "Subtract":[
        "int", ["int","int"]
    ],
    "Add":[
        "int",["int","int"]
    ],
    "Random":[
        "int",["int","int"]
    ]
});

console.log(mathLibrary.Subtract(1,5));