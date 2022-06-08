import { ILoginRequest, ILoginResponse } from "./telefireApiInterface-connect";
import { ISetCommunicationReq, ISetCommunicationRes } from "./telefireApiInterface-connect";
import { IConnectPanelReq, IConnectPanelRes } from "./telefireApiInterface-connect";
import { IGetConfigurationReq, IGetConfigurationRes } from "./telefireApiInterface-configuration";
import { ISetConfigurationReq, ISetConfigurationRes } from "./telefireApiInterface-configuration";
import { IListProjectFilesRequest, IListProjectFilesResponse, IListProjectsRequest, IListProjectsResponse, ISelectProjectFileRequest, ISelectProjectFileResponse } from "./telefireApiInterface-projectManagement";
export declare class TelefireApi {
    static login: (reqObj: ILoginRequest) => ILoginResponse;
    static setCommunication: (reqObj: ISetCommunicationReq) => ISetCommunicationRes;
    static connectToPanel: (reqObj: IConnectPanelReq) => IConnectPanelRes;
    static getConfiguration: (reqObj: IGetConfigurationReq) => IGetConfigurationRes;
    static setConfiguration: (reqObj: ISetConfigurationReq) => ISetConfigurationRes;
    static listProjects: (reqObj: IListProjectsRequest) => IListProjectsResponse;
    static listProjectFiles: (reqObj: IListProjectFilesRequest) => IListProjectFilesResponse;
    static selectProjectFile: (reqObj: ISelectProjectFileRequest) => ISelectProjectFileResponse;
}
