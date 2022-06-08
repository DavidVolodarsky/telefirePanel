const ffi = require('ffi-napi');
const path = require('path');
const dllPath = path.join(__dirname, "dlls", "TelefireApiMock.dll");

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

    "GetDevice": [
        "string", ["string"]
    ],

    "ListProjects": [
        "string", ["string"]
    ],

    "ListProjectFiles": [
        "string", ["string"]
    ],

    "SelectProjectFile": [
        "string", ["string"]
    ],
});



exports.Login = telefireLib.Login;
exports.SetCommunication = telefireLib.SetCommunication;
exports.ConnectToPanel = telefireLib.ConnectToPanel;
exports.getConfiguration = telefireLib.GetConfiguration;
exports.setConfiguration = telefireLib.SetConfiguration;
exports.getDevice = telefireLib.GetDevice;
exports.listProjects = telefireLib.ListProjects;
exports.listProjectFiles = telefireLib.ListProjectFiles;
exports.selectProjectFile = telefireLib.SelectProjectFile;
