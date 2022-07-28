//functions for with 'telefire' dll file api
import {IGetPCCodesReq,IGetPCCodesRes} from "./telefireApiInterface-connect";
import {ILoginRequest, ILoginResponse} from "./telefireApiInterface-connect";
import {ISetCommunicationReq, ISetCommunicationRes} from "./telefireApiInterface-connect";
import {IConnectPanelReq, IConnectPanelRes} from "./telefireApiInterface-connect";
import {IGetConfigurationReq, IGetConfigurationRes} from "./telefireApiInterface-configuration";
import {ISetConfigurationReq, ISetConfigurationRes} from "./telefireApiInterface-configuration";
import {
    ICreateNewProjectRequest,
    ICreateNewProjectResponse,
    IListProjectFilesRequest,
    IListProjectFilesResponse,
    IListProjectsRequest,
    IListProjectsResponse,
    ISelectProjectFileRequest,
    ISelectProjectFileResponse,
    ISetDevicesRequest,
    ISetDevicesResponse,
    IGetMatrixRequest,
    IGetMatrixResponse,
    ISetMatrixesRequest,
    ISetMatrixesResponse,
    IGetDeviceRequest,
    IGetDeviceResponse,
    ISyncPanelToFileRequest,
    ISyncPanelToFileResponse,
    ISyncFileToPanelRequest,
    ISyncFileToPanelResponse
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

    //GET DEVICE
    static getDevice = (reqObj: IGetDeviceRequest): IGetDeviceResponse => {
        const reqStr = JSON.stringify(reqObj);

        const resStr = telefireLibDll.getDevice(reqStr);

        return JSON.parse(resStr) as IGetDeviceResponse;
    }

    //SET DEVICES
    static setDevices = (reqObj:ISetDevicesRequest):ISetDevicesResponse =>{
        const reqStr = JSON.stringify(reqObj);

        const resStr = telefireLibDll.setDevices(reqStr);

        return JSON.parse(resStr) as ISetDevicesResponse;
    }

    //GET MATRIX
    static getMatrix = (reqObj:IGetMatrixRequest):IGetMatrixResponse =>{
        const reqStr = JSON.stringify(reqObj);

        const resStr = telefireLibDll.getMatrix(reqStr);

        return JSON.parse(resStr) as IGetMatrixResponse;
    }

    //SET MATRIXES
    static setMatrixes = (reqObj:ISetMatrixesRequest):ISetMatrixesResponse =>{
        const reqStr = JSON.stringify(reqObj);

        const resStr = telefireLibDll.setMatrixes(reqStr);

        return JSON.parse(resStr) as ISetMatrixesResponse;
    }

    //SYNC Panel To File
    static syncPanelToFile = (reqObj:ISyncPanelToFileRequest):ISyncPanelToFileResponse=>{
    const reqStr = JSON.stringify(reqObj);

    const resStr = telefireLibDll.syncPanelToFile(reqStr);

    return JSON.parse(resStr) as ISyncPanelToFileResponse;
    }

    //SYNC File To Panel
    static syncFileToPanel = (reqObj:ISyncFileToPanelRequest):ISyncFileToPanelResponse=>{
        const reqStr = JSON.stringify(reqObj);

        const resStr = telefireLibDll.syncFileToPanel(reqStr);

        return JSON.parse(resStr) as ISyncFileToPanelResponse;
    }
}

