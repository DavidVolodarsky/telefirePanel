"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setConfigurationAPI = exports.getConfigurationAPI = exports.connectToPanelAPI = exports.setCommunicationAPI = exports.loginAPI = void 0;
var telefireLibDll = require('../dist/telefireLibDll');
//LOGIN API
var loginAPI = function (reqObj) {
    // console.log('LoginAPI_IN:', reqObj.Name,reqObj.OldPcID,reqObj.NewPcID);
    var reqStr = JSON.stringify(reqObj);
    var resStr = telefireLibDll.Login(reqStr);
    return JSON.parse(resStr);
    // return JSON.parse(telefireLibDll.Login(JSON.stringify(req))); //short variant
};
exports.loginAPI = loginAPI;
// console.log('loginAPI:', loginAPI({Name:'Stas', OldPcID: 'Test', NewPcID:'test string'}));
//SET COMMUNICATION
var setCommunicationAPI = function (reqObj) {
    // console.log('SetCommunication_IN:',reqObj.Name,reqObj.Type,reqObj.Baud,reqObj.Port,reqObj.Vid,reqObj.Pid,reqObj.Ip,reqObj.TcPort);
    var reqStr = JSON.stringify(reqObj);
    var resStr = telefireLibDll.SetCommunication(reqStr);
    return JSON.parse(resStr);
};
exports.setCommunicationAPI = setCommunicationAPI;
// console.log('SetCommunication:', setCommunicationAPI({Name:'Set Com', Type:'USB', Baud:2, Port:'80', Vid:2, Pid:2, Ip:'128.32.4545', TcPort:3000}));
//CONNECT TO PANEL
var connectToPanelAPI = function (reqObj) {
    // console.log('connectToPanel_IN:',reqObj.Name,reqObj.Panel,reqObj.OwnerShip);
    var reqStr = JSON.stringify(reqObj);
    var resStr = telefireLibDll.ConnectToPanel(reqStr);
    return JSON.parse(resStr);
};
exports.connectToPanelAPI = connectToPanelAPI;
// console.log('connectToPanel:', connectToPanelAPI({Name:'Set Com', Panel:'USB', OwnerShip:'art'}));
//GET CONFIGURATION
var getConfigurationAPI = function (reqObj) {
    var reqStr = JSON.stringify(reqObj);
    var resStr = telefireLibDll.getConfiguration(reqStr);
    return JSON.parse(resStr);
};
exports.getConfigurationAPI = getConfigurationAPI;
//SET CONFIGURATION
var setConfigurationAPI = function (reqObj) {
    var reqStr = JSON.stringify(reqObj);
    var resStr = telefireLibDll.setConfiguration(reqStr);
    return JSON.parse(resStr);
};
exports.setConfigurationAPI = setConfigurationAPI;
// exports.login = loginAPI;
// exports.setCommunication = setCommunicationAPI;
// module.exports.connectToPanel = connectToPanelAPI;
// module.exports.getConfiguration = getConfigurationAPI;
// module.exports.setConfiguration = setConfigurationAPI;
