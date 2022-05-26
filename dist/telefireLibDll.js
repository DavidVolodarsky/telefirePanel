"use strict";
var ffi = require('ffi-napi');
var path = require('path');
var dllPath = path.join(__dirname, "dlls", "TelefireApiMock.dll");
// const pathDll = path.join(__dirname, "TelefireApiMock.dll");
var telefireLib = ffi.Library(dllPath, {
    "Login": [
        "string", ["string"]
    ],
    "SetCommunication": [
        "string", ["string"]
    ],
    "ConnectToPanel": [
        "string", ["string"]
    ],
    "GetConfiguration": [
        "string", ["string"]
    ],
    "SetConfiguration": [
        "string", ["string"]
    ],
});
exports.Login = telefireLib.Login;
exports.SetCommunication = telefireLib.SetCommunication;
exports.ConnectToPanel = telefireLib.ConnectToPanel;
exports.getConfiguration = telefireLib.GetConfiguration;
exports.setConfiguration = telefireLib.SetConfiguration;
