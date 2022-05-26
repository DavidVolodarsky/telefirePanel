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
    return TelefireApi;
}());
exports.TelefireApi = TelefireApi;
// console.log('loginAPI:', TelefireApi.login({Name:'Stas', OldPcID: 'Test', NewPcID:'test string'}));
// console.log('SetCommunication:', TelefireApi.setCommunication({Name:'Set Com', Type:'USB', Baud:2, Port:'80', Vid:2, Pid:2, Ip:'128.32.4545', TcPort:3000}));
// console.log('connectToPanel:', TelefireApi.connectToPanel({Name:'Set Com', Panel:234, OwnerShip:'dart'}));
