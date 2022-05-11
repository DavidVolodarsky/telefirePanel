const ffi = require('ffi-napi');
const MathLibDLL = ffi.Library("./MathLibrary",{
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

exports.MathLibDLL = MathLibDLL;
