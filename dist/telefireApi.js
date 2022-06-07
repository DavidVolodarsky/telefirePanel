"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TelefireApi = void 0;
var telefireLibDll = require('../dist/telefireLibDll');
var TelefireApi = /** @class */ (function () {
    function TelefireApi() {
    }
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
    return TelefireApi;
}());
exports.TelefireApi = TelefireApi;
// console.log('loginAPI:', TelefireApi.login({Name:'Login', OldPcID: '', NewPcID:''}));
// console.log('SetCommunication:', TelefireApi.setCommunication({Name:'SetCommunicationChannel', Type:'USB', Baud:0, Port:null, Vid:8137, Pid:33320, Ip:null, TcPort:0}));
// console.log('connectToPanel:', TelefireApi.connectToPanel({Name:'Set Com', Panel:234, OwnerShip:'dart'}));
