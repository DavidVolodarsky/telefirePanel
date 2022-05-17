var ffi = require('ffi-napi');
var path = require('path');
var ref = require('ref-napi');
var StructType = require('ref-struct-di')(ref);
var Struct = require('ref-struct-di')(ref);

// //POINTER EXAMPLE start
// var phoneType = ref.types.long
// var idType = ref.types.long
//
// var userStruct = new StructType({
//     user_phone: phoneType,
//     user_id: idType
// });
//
// console.log(typeof userStruct);
// console.log('userStruct:', userStruct);
//
// var userPointer = ref.refType(userStruct);
// console.log('userPointer:',userPointer);
// //POINTER EXAMPLE finish

// TestRequest
var nameType = ref.types.char
var numberType = ref.types.int

// console.log(nameType, numberType)

var testRequestStruct = new StructType({
    Name: numberType,
    Number: numberType
});

var userRequestPointer = ref.refType(testRequestStruct);
// console.log('userRequestPointer:',userRequestPointer);

//TestResponse
var locationType = ref.types.char
var indexType = ref.types.int

var testResponseStruct = new Struct({
    Location: locationType,
    Index: indexType
});

// console.log('STRUCT', testResponseStruct)

var userResponsePointer = ref.refType(testResponseStruct);
// console.log('userResponsePointer:',userResponsePointer);

var argObj = new testRequestStruct({Name: 100, Number: 200});
console.log('ARG OBJECT', argObj.Number)

var pathDll = path.join(__dirname, "MathLibrary.dll");
var MathReqDLL = ffi.Library(pathDll, {
    "Subtract": [
        "int", ["int", "int"]
    ],
    "Add": [
        "int", ["int", "int"]
    ],
    "TestObjects": [
        "int", [userRequestPointer, "int", "int"]
    ]
});

console.log('Req ADD:', MathReqDLL.Add(2, 3));

// const resp = MathReqDLL.TestObject(argObj.ref());
console.log('Req TestObject:', MathReqDLL.TestObjects(argObj.ref(), 90, 80));

console.log('Req Sub:', MathReqDLL.Subtract(2, 3));
// console.log('TestResponse:', MathReqDLL.TestResponse('Max',777));

exports.MathLibDLLSub = MathReqDLL.Subtract;
exports.MathLibDLLAdd = MathReqDLL.Add;
