"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TelefireApi = void 0;
var telefireLibDll = require('../dist/telefireLibDll');
var TelefireApi = /** @class */ (function () {
    function TelefireApi() {
    }
    //GET PC CODE
    TelefireApi.getPCCodes = function (reqObj) {
        var reqStr = JSON.stringify(reqObj);
        var resStr = telefireLibDll.getPcCodes(reqStr);
        return JSON.parse(resStr);
    };
    //LOGIN API
    TelefireApi.login = function (reqObj) {
        var reqStr = JSON.stringify(reqObj);
        var resStr = telefireLibDll.Login(reqStr);
        return JSON.parse(resStr);
        // return JSON.parse(telefireLibDll.Login(JSON.stringify(req))); //short variant
    };
    //SET COMMUNICATION
    TelefireApi.setCommunication = function (reqObj) {
        var reqStr = JSON.stringify(reqObj);
        var resStr = telefireLibDll.SetCommunication(reqStr);
        return JSON.parse(resStr);
    };
    //CONNECT TO PANEL
    TelefireApi.connectToPanel = function (reqObj) {
        var reqStr = JSON.stringify(reqObj);
        var resStr = telefireLibDll.ConnectToPanel(reqStr);
        return JSON.parse(resStr);
    };
    //GET CONFIGURATION
    TelefireApi.getConfiguration = function (reqObj) {
        var reqStr = JSON.stringify(reqObj);
        var resStr = telefireLibDll.getConfiguration(reqStr);
        return JSON.parse(resStr);
    };
    //SET CONFIGURATION
    TelefireApi.setConfiguration = function (reqObj) {
        var reqStr = JSON.stringify(reqObj);
        var resStr = telefireLibDll.setConfiguration(reqStr);
        return JSON.parse(resStr);
    };
    //LIST PROJECTS
    TelefireApi.listProjects = function (reqObj) {
        var reqStr = JSON.stringify(reqObj);
        var resStr = telefireLibDll.listProjects(reqStr);
        return JSON.parse(resStr);
    };
    TelefireApi.listProjectFiles = function (reqObj) {
        var reqStr = JSON.stringify(reqObj);
        var resStr = telefireLibDll.listProjectFiles(reqStr);
        return JSON.parse(resStr);
    };
    TelefireApi.selectProjectFile = function (reqObj) {
        var reqStr = JSON.stringify(reqObj);
        var resStr = telefireLibDll.selectProjectFile(reqStr);
        return JSON.parse(resStr);
    };
    TelefireApi.createNewProject = function (reqObj) {
        var reqStr = JSON.stringify(reqObj);
        var resStr = telefireLibDll.createNewProject(reqStr);
        return JSON.parse(resStr);
    };
    //SET DEVICES
    TelefireApi.setDevices = function (reqObj) {
        var reqStr = JSON.stringify(reqObj);
        var resStr = telefireLibDll.setDevices(reqStr);
        return JSON.parse(resStr);
    };
    //GET MATRIX
    TelefireApi.getMatrix = function (reqObj) {
        var reqStr = JSON.stringify(reqObj);
        var resStr = telefireLibDll.getMatrix(reqStr);
        return JSON.parse(resStr);
    };
    //SET MATRIXES
    TelefireApi.setMatrixes = function (reqObj) {
        var reqStr = JSON.stringify(reqObj);
        var resStr = telefireLibDll.setMatrixes(reqStr);
        return JSON.parse(resStr);
    };
    return TelefireApi;
}());
exports.TelefireApi = TelefireApi;
