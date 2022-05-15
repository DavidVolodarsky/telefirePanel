var ffi = require('ffi-napi');
var path = require('path');
var pathDll = path.join(__dirname, "MathLibTest.dll");
var MathLibDLL = ffi.Library(pathDll, {
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
