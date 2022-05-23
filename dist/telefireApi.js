"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TelefireApi = void 0;
var telefireLibDll = require('../dist/telefireLibDll');
var TelefireApi = /** @class */ (function () {
    function TelefireApi() {
    }
    //LOGIN API
    TelefireApi.login = function (reqObj) {
        // console.log('LoginAPI_IN:', reqObj.Name,reqObj.OldPcID,reqObj.NewPcID);
        var reqStr = JSON.stringify(reqObj);
        var resStr = telefireLibDll.Login(reqStr);
        return JSON.parse(resStr);
        // return JSON.parse(telefireLibDll.Login(JSON.stringify(req))); //short variant
    };
    // console.log('loginAPI:', loginAPI({Name:'Stas', OldPcID: 'Test', NewPcID:'test string'}));
    //SET COMMUNICATION
    TelefireApi.setCommunication = function (reqObj) {
        // console.log('SetCommunication_IN:',reqObj.Name,reqObj.Type,reqObj.Baud,reqObj.Port,reqObj.Vid,reqObj.Pid,reqObj.Ip,reqObj.TcPort);
        var reqStr = JSON.stringify(reqObj);
        var resStr = telefireLibDll.SetCommunication(reqStr);
        return JSON.parse(resStr);
    };
    // console.log('SetCommunication:', setCommunicationAPI({Name:'Set Com', Type:'USB', Baud:2, Port:'80', Vid:2, Pid:2, Ip:'128.32.4545', TcPort:3000}));
    //CONNECT TO PANEL
    TelefireApi.connectToPanel = function (reqObj) {
        // console.log('connectToPanel_IN:',reqObj.Name,reqObj.Panel,reqObj.OwnerShip);
        var reqStr = JSON.stringify(reqObj);
        var resStr = telefireLibDll.ConnectToPanel(reqStr);
        return JSON.parse(resStr);
    };
    // console.log('connectToPanel:', connectToPanelAPI({Name:'Set Com', Panel:'USB', OwnerShip:'art'}));
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
    return TelefireApi;
}());
exports.TelefireApi = TelefireApi;
