//functions for with 'telefire' dll file api
import { ILoginResponse} from "./telefireApiInterface";
import {ISetCommunicationRes} from "./telefireApiInterface";
import {IConnectPanelRes} from "./telefireApiInterface";


//LOGIN API
const loginAPI = (name: string,
                  oldPcID: string,
                  newPcID: string) : ILoginResponse=>{
    console.log('LoginAPI_IN', name,oldPcID,newPcID);
    return({
        Name:"Login",
        ClientNo:"111",
        Result:"21221"
    })
}
// console.log('loginAPI:', loginAPI('Stas','Test','1234'));


//SET COMMUNICATION
const setCommunicationAPI = ( name:string, type:string, baud:number,   port:string, vid:number, pid:number, ip:string, tcPort:number):ISetCommunicationRes=>{
    console.log('SetCommunication:',name,type,baud,port,vid,pid,ip,tcPort);
    return({
        Name: "SetCommunication",
        Type: "USB",
        Result: "OK",
    });
}
// console.log('SetCommunication:', SetCommunicationAPI('Set Com', 'USB',2,'',2,2,'4545',111));

//CONNECT TO PANEL
const connectToPanelAPI = (name:string, panel:string, ownerShip:string) : IConnectPanelRes =>{
    console.log('connectToPanel:',name,panel,ownerShip);

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
console.log('connectToPanel:', connectToPanelAPI('Set Com', 'USB','art'));

exports.login = loginAPI;
exports.setCommunication = setCommunicationAPI;
exports.connectToPanel = connectToPanelAPI;
