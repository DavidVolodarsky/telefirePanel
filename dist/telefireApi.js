"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//LOGIN API
var loginAPI = function (name, oldPcID, newPcID) {
    console.log('LoginAPI_IN', name, oldPcID, newPcID);
    return ({
        Name: "Login",
        ClientNo: "111",
        Result: "21221"
    });
};
// console.log('loginAPI:', loginAPI('Stas','Test','1234'));
//SET COMMUNICATION
var setCommunicationAPI = function (name, type, baud, port, vid, pid, ip, tcPort) {
    console.log('SetCommunication:', name, type, baud, port, vid, pid, ip, tcPort);
    return ({
        Name: "SetCommunication",
        Type: "USB",
        Result: "OK",
    });
};
// console.log('SetCommunication:', SetCommunicationAPI('Set Com', 'USB',2,'',2,2,'4545',111));
//CONNECT TO PANEL
var connectToPanelAPI = function (name, panel, ownerShip) {
    console.log('connectToPanel:', name, panel, ownerShip);
    return ({
        Name: "Connect to panel",
        ReqPanel: "Local",
        result: "USB not connected",
        Panel: 0,
        type: "null",
        version: "null",
        processor: "null",
        serial: "null",
        date: "null",
        ownership: "null"
    });
};
console.log('connectToPanel:', connectToPanelAPI('Set Com', 'USB', 'art'));
exports.login = loginAPI;
exports.setCommunication = setCommunicationAPI;
exports.connectToPanel = connectToPanelAPI;
