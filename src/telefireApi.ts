//functions for with 'telefire' dll file api
import {ILoginRequest, ILoginResponse} from "./telefireApiInterface-connect";
import {ISetCommunicationReq, ISetCommunicationRes} from "./telefireApiInterface-connect";
import {IConnectPanelReq, IConnectPanelRes} from "./telefireApiInterface-connect";
import {IGetConfigurationReq, IGetConfigurationRes} from "./telefireApiInterface-configuration";
import {ISetConfigurationReq, ISetConfigurationRes} from "./telefireApiInterface-configuration";

const telefireLibDll = require('../dist/telefireLibDll');

export class TelefireApi {
    //LOGIN API
    static login = (reqObj: ILoginRequest): ILoginResponse => {
        // console.log('LoginAPI_IN:', reqObj.Name,reqObj.OldPcID,reqObj.NewPcID);
        const reqStr = JSON.stringify(reqObj);

        const resStr = telefireLibDll.Login(reqStr);

        return JSON.parse(resStr) as ILoginResponse;

        // return JSON.parse(telefireLibDll.Login(JSON.stringify(req))); //short variant
    }
// console.log('loginAPI:', loginAPI({Name:'Stas', OldPcID: 'Test', NewPcID:'test string'}));


//SET COMMUNICATION
    static setCommunication = (reqObj: ISetCommunicationReq): ISetCommunicationRes => {
        // console.log('SetCommunication_IN:',reqObj.Name,reqObj.Type,reqObj.Baud,reqObj.Port,reqObj.Vid,reqObj.Pid,reqObj.Ip,reqObj.TcPort);

        const reqStr = JSON.stringify(reqObj);

        const resStr = telefireLibDll.SetCommunication(reqStr);

        return JSON.parse(resStr) as ISetCommunicationRes;
    }
// console.log('SetCommunication:', setCommunicationAPI({Name:'Set Com', Type:'USB', Baud:2, Port:'80', Vid:2, Pid:2, Ip:'128.32.4545', TcPort:3000}));

//CONNECT TO PANEL
    static connectToPanel = (reqObj: IConnectPanelReq): IConnectPanelRes => {
        // console.log('connectToPanel_IN:',reqObj.Name,reqObj.Panel,reqObj.OwnerShip);

        const reqStr = JSON.stringify(reqObj);

        const resStr = telefireLibDll.ConnectToPanel(reqStr);

        return JSON.parse(resStr) as IConnectPanelRes;
    }
// console.log('connectToPanel:', connectToPanelAPI({Name:'Set Com', Panel:'USB', OwnerShip:'art'}));

//GET CONFIGURATION
    static getConfiguration = (reqObj: IGetConfigurationReq): IGetConfigurationRes => {
        const reqStr = JSON.stringify(reqObj);

        const resStr = telefireLibDll.getConfiguration(reqStr);

        return JSON.parse(resStr) as IGetConfigurationRes;
    }

//SET CONFIGURATION
    static setConfiguration = (reqObj: ISetConfigurationReq): ISetConfigurationRes => {
        const reqStr = JSON.stringify(reqObj);

        const resStr = telefireLibDll.setConfiguration(reqStr);

        return JSON.parse(resStr) as ISetConfigurationRes;
    }
}



