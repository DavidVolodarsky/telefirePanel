const ffi = require('ffi-napi');
const path = require('path');
const pathDll = path.join(__dirname, "TelefireApiMock.dll");

const telefireLib = ffi.Library(pathDll, {
    "Login": [
        "string", ["string"]
    ],

    "SetCommunication":[
        "string",["string"]
    ],

    "ConnectToPanel":[
        "string",["string"]
    ]
});

exports.Login = telefireLib.Login;
exports.SetCommunication = telefireLib.SetCommunication;
exports.ConnectToPanel = telefireLib.ConnectToPanel;