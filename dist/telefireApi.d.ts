import { IGetPCCodesReq, IGetPCCodesRes } from "./telefireApiInterface-connect";
import { ILoginRequest, ILoginResponse } from "./telefireApiInterface-connect";
import { ISetCommunicationReq, ISetCommunicationRes } from "./telefireApiInterface-connect";
import { IConnectPanelReq, IConnectPanelRes } from "./telefireApiInterface-connect";
import { IGetConfigurationReq, IGetConfigurationRes } from "./telefireApiInterface-configuration";
import { ISetConfigurationReq, ISetConfigurationRes } from "./telefireApiInterface-configuration";
import { ICreateNewProjectRequest, ICreateNewProjectResponse, IListProjectFilesRequest, IListProjectFilesResponse, IListProjectsRequest, IListProjectsResponse, ISelectProjectFileRequest, ISelectProjectFileResponse, ISetDevicesRequest, ISetDevicesResponse, IGetMatrixRequest, IGetMatrixResponse, ISetMatrixesRequest, ISetMatrixesResponse, IGetDeviceRequest, IGetDeviceResponse } from "./telefireApiInterface-projectManagement";
export declare class TelefireApi {
    static getPCCodes: (reqObj: IGetPCCodesReq) => IGetPCCodesRes;
    static login: (reqObj: ILoginRequest) => ILoginResponse;
    static setCommunication: (reqObj: ISetCommunicationReq) => ISetCommunicationRes;
    static connectToPanel: (reqObj: IConnectPanelReq) => IConnectPanelRes;
    static getConfiguration: (reqObj: IGetConfigurationReq) => IGetConfigurationRes;
    static setConfiguration: (reqObj: ISetConfigurationReq) => ISetConfigurationRes;
    static listProjects: (reqObj: IListProjectsRequest) => IListProjectsResponse;
    static listProjectFiles: (reqObj: IListProjectFilesRequest) => IListProjectFilesResponse;
    static selectProjectFile: (reqObj: ISelectProjectFileRequest) => ISelectProjectFileResponse;
    static createNewProject: (reqObj: ICreateNewProjectRequest) => ICreateNewProjectResponse;
    static getDevice: (reqObj: IGetDeviceRequest) => IGetDeviceResponse;
    static setDevices: (reqObj: ISetDevicesRequest) => ISetDevicesResponse;
    static getMatrix: (reqObj: IGetMatrixRequest) => IGetMatrixResponse;
    static setMatrixes: (reqObj: ISetMatrixesRequest) => ISetMatrixesResponse;
}
