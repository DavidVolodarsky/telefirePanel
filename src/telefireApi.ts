//functions for with 'telefire' dll file api
import {ILoginRequest, ILoginResponse} from "./telefireApiInterface";
import {ISetCommunicationReq,ISetCommunicationRes} from "./telefireApiInterface";
import {IConnectPanelReq,IConnectPanelRes} from "./telefireApiInterface";


//LOGIN API
const loginAPI = (req:ILoginRequest) : ILoginResponse=>{
    console.log('LoginAPI_IN', req.Name,req.OldPcID,req.NewPcID);
    return({
        Name:"Login",
        ClientNo:"111",
        Result:"21221"
    })
}
// console.log('loginAPI:', loginAPI('Stas','Test','1234'));


//SET COMMUNICATION
const setCommunicationAPI = ( reqObj:ISetCommunicationReq):ISetCommunicationRes=>{
    console.log('SetCommunication:',reqObj.Name,reqObj.Type,reqObj.Baud,reqObj.Port,reqObj.Vid,reqObj.Pid,reqObj.Ip,reqObj.TcPort);
    return({
        Name: "SetCommunication",
        Type: "USB",
        Result: "OK",
    });
}
// console.log('SetCommunication:', SetCommunicationAPI('Set Com', 'USB',2,'',2,2,'4545',111));

//CONNECT TO PANEL
const connectToPanelAPI = (reqObj:IConnectPanelReq) : IConnectPanelRes =>{
    console.log('connectToPanel:',reqObj.Name,reqObj.Panel,reqObj.OwnerShip);

    return ({
        Name:"Connect to panel",
        ReqPanel:"Local",
        result:"USB not connected",
        Panel:0,
        type:"null",
        version:"null",
        processor:"null",
        serial:"null",
        date:"null",
        ownership:"null"
    });
}
// console.log('connectToPanel:', connectToPanelAPI('Set Com', 'USB','art'));

exports.login = loginAPI;
exports.setCommunication = setCommunicationAPI;
exports.connectToPanel = connectToPanelAPI;
