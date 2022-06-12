//functions for with 'telefire' dll file api
import {IGetPCCodesReq,IGetPCCodesRes} from "./telefireApiInterface-connect";
import {ILoginRequest, ILoginResponse} from "./telefireApiInterface-connect";
import {ISetCommunicationReq, ISetCommunicationRes} from "./telefireApiInterface-connect";
import {IConnectPanelReq, IConnectPanelRes} from "./telefireApiInterface-connect";
import {IGetConfigurationReq, IGetConfigurationRes} from "./telefireApiInterface-configuration";
import {ISetConfigurationReq, ISetConfigurationRes} from "./telefireApiInterface-configuration";
import {
    ICreateNewProjectRequest, ICreateNewProjectResponse,
    IListProjectFilesRequest, IListProjectFilesResponse,
    IListProjectsRequest,
    IListProjectsResponse, ISelectProjectFileRequest, ISelectProjectFileResponse
} from "./telefireApiInterface-projectManagement";


const telefireLibDll = require('../dist/telefireLibDll');

export class TelefireApi {
    //GET PC CODE
    static getPCCodes = (reqObj: IGetPCCodesReq): IGetPCCodesRes => {
        const reqStr = JSON.stringify(reqObj);

        const resStr = telefireLibDll.getPcCodes(reqStr);

        return JSON.parse(resStr) as IGetPCCodesRes;
    }

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

    //LIST PROJECTS
    static listProjects = (reqObj: IListProjectsRequest): IListProjectsResponse => {
        const reqStr = JSON.stringify(reqObj);

        const resStr = telefireLibDll.listProjects(reqStr);

        return JSON.parse(resStr) as IListProjectsResponse;
    }

    static listProjectFiles = (reqObj: IListProjectFilesRequest): IListProjectFilesResponse => {
        const reqStr = JSON.stringify(reqObj);

        const resStr = telefireLibDll.listProjectFiles(reqStr);

        return JSON.parse(resStr) as IListProjectFilesResponse;
    }

    static selectProjectFile = (reqObj: ISelectProjectFileRequest): ISelectProjectFileResponse => {
        const reqStr = JSON.stringify(reqObj);

        const resStr = telefireLibDll.selectProjectFile(reqStr);

        return JSON.parse(resStr) as ISelectProjectFileResponse;
    }

    static createNewProject = (reqObj: ICreateNewProjectRequest): ICreateNewProjectResponse => {
        const reqStr = JSON.stringify(reqObj);

        const resStr = telefireLibDll.createNewProject(reqStr);

        return JSON.parse(resStr) as ICreateNewProjectResponse;
    }
}

