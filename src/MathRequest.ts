const ffi = require('ffi-napi');
const path = require('path');
const Struct = require("ref-struct-di");
const ref = require('ref-napi');

const rect = Struct({
    'left' : 'int',
    'top' : 'int',
});

console.log(typeof  rect);

// const pointer = ref.refType(rect);

// console.log(pointer);

const pathDll = path.join(__dirname,"MathLibrary.dll");
const MathReqDLL = ffi.Library(pathDll,{
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

console.log('Req ADD:',MathReqDLL.Add(2,3));
console.log('Req Sub:',MathReqDLL.Subtract(2,3));

exports.MathLibDLLSub = MathReqDLL.Subtract;
exports.MathLibDLLAdd = MathReqDLL.Add;
