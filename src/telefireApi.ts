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
        const reqStr = JSON.stringify(reqObj);

        const resStr = telefireLibDll.Login(reqStr);

        return JSON.parse(resStr) as ILoginResponse;
        // return JSON.parse(telefireLibDll.Login(JSON.stringify(req))); //short variant
    }

//SET COMMUNICATION
    static setCommunication = (reqObj: ISetCommunicationReq): ISetCommunicationRes => {
        const reqStr = JSON.stringify(reqObj);

        const resStr = telefireLibDll.SetCommunication(reqStr);

        return JSON.parse(resStr) as ISetCommunicationRes;
    }

//CONNECT TO PANEL
    static connectToPanel = (reqObj: IConnectPanelReq): IConnectPanelRes => {
        const reqStr = JSON.stringify(reqObj);

        const resStr = telefireLibDll.ConnectToPanel(reqStr);

        return JSON.parse(resStr) as IConnectPanelRes;
    }

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

// console.log('loginAPI:', TelefireApi.login({Name:'Stas', OldPcID: 'Test', NewPcID:'test string'}));
// console.log('SetCommunication:', TelefireApi.setCommunication({Name:'Set Com', Type:'USB', Baud:2, Port:'80', Vid:2, Pid:2, Ip:'128.32.4545', TcPort:3000}));
// console.log('connectToPanel:', TelefireApi.connectToPanel({Name:'Set Com', Panel:234, OwnerShip:'dart'}));
