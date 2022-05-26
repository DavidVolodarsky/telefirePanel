const ffi = require('ffi-napi');
const path = require('path');
const dllPath = path.join(__dirname, "dlls", "TelefireApiMock.dll");
// const pathDll = path.join(__dirname, "TelefireApiMock.dll");

const telefireLib = ffi.Library(dllPath, {
    "Login": [
        "string", ["string"]
    ],

    "SetCommunication":[
        "string",["string"]
    ],

    "ConnectToPanel":[
        "string",["string"]
    ],

    "GetConfiguration":[
        "string",["string"]
    ],

    "SetConfiguration":[
        "string",["string"]
    ],
});



exports.Login = telefireLib.Login;
exports.SetCommunication = telefireLib.SetCommunication;
exports.ConnectToPanel = telefireLib.ConnectToPanel;
exports.getConfiguration = telefireLib.GetConfiguration;
exports.setConfiguration = telefireLib.SetConfiguration;
