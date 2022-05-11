const ffi = require('ffi-napi');
const mathLibraryDLL = ffi.Library("./MathLibrary",{
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
export default mathLibraryDLL;
export { Greeter } from './src/Greeter';

// export { Greeter } from './src/index';

// export const printMsg = function() {
//     console.log("This is a message from the demo package");
//     console.log("DEMO RUN START");
// }
