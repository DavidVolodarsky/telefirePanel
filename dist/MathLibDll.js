var ffi = require('ffi-napi');
var MathLibDLL = ffi.Library("../dllFiles/MathLibrary.dll", {
    "Subtract": [
        "int", ["int", "int"]
    ],
    "Add": [
        "int", ["int", "int"]
    ],
    "Random": [
        "int", ["int", "int"]
    ]
});
exports.MathLibDLLSub = MathLibDLL.Subtract;
exports.MathLibDLLAdd = MathLibDLL.Add;
