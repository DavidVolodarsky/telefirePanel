"use strict";
var ffi = require('ffi-napi');
var path = require('path');
var dllPath = path.join(__dirname, "dlls", "TelefireApiMock.dll");
var telefireLib = ffi.Library(dllPath, {
    "GetPCCodes": [
        "string", ["string"]
    ],
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
    "CreteNewProject": [
        "string", ["string"]
    ],
    "SetDevices": [
        "string", ["string"]
    ],
    "GetMatrix": [
        "string", ["string"]
    ],
    "SetMatrixes": [
        "string", ["string"]
    ],
});
exports.getPcCodes = telefireLib.GetPCCodes;
exports.Login = telefireLib.Login;
exports.SetCommunication = telefireLib.SetCommunication;
exports.ConnectToPanel = telefireLib.ConnectToPanel;
exports.getConfiguration = telefireLib.GetConfiguration;
exports.setConfiguration = telefireLib.SetConfiguration;
exports.listProjects = telefireLib.ListProjects;
exports.listProjectFiles = telefireLib.ListProjectFiles;
exports.selectProjectFile = telefireLib.SelectProjectFile;
exports.createNewProject = telefireLib.CreteNewProject;
exports.getDevice = telefireLib.GetDevice;
exports.setDevices = telefireLib.SetDevices;
exports.getMatrix = telefireLib.GetMatrix;
exports.setMatrixes = telefireLib.SetMatrixes;
