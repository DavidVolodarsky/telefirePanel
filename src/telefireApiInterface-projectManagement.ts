interface IProject {
    ProjectName: string,
    Type: string,
    versionscount: number,
    createdate: string,
    createby: string,
    panels: number
}

interface IListProjectsRequest {
    Name: string,
    Dir: string
}

interface IListProjectsResponse {
    Projects: IProject[],
    Name: string,
    Dir: string,
    Count: string,
}

interface IListProjectFilesRequest {
    Name: string,
    Project: string,
}

interface IProjectFile {
    FileName: string,
}

interface IListProjectFilesResponse {
    Files: IProjectFile[],
    Name: string,
    Project: string,
    Count: number,
}

interface ISelectProjectFileRequest {
    Name: string,
    filename: string,
}

interface ISelectProjectFileResponse {
    Name: string,
    filename: string,
    Result: string,
}

interface ICreateNewProjectRequest {
    panels: Record<string, string>,
    Name: string,
    dir: string,
    projectname: string,
    language: string,
    count: number,
    type: string,
    user: string,
}

interface ICreateNewProjectResponse {
    Name: string,
    dir: string,
    projectname: string,
    Result: string,
}

interface SetOneDeviceRequest {
    Serial: number;
    Loop: number;
    Address: number;
    Program: boolean;
    Description: string;
    DeviceType: string;
    Zone: number;
    GlobalZone: boolean;
    Mode: string;
    Sensitivity: string;
    NightSensitivity: string;
    Prealarm: string;
    Class: string;
    Drill: boolean;
    Silence: string;
    Delay: string;
    SmokeControlZone: string;
    MaxAutoAct: string;
    Conditions: string;
    ZoneConditions: string;
    Group: string;
}

interface ISetDevicesRequest {
    Name: string;
    Panel: string;
    Source: string;
    Password: string;
    PanelVersion: number;
    Type: string;
    Count: number;
    Devices: SetOneDeviceRequest[];
}

interface ISetDevicesResponse {
    Name: string;
    Panel: string;
    Source: string;
    Type: string;
    Count: number;
    Result: string;
}

interface IDeviceMatrix {
    Loop: number;
    Address: number;
}

interface IZoneMatrix {
    Zone: number;
}

interface IGetMatrixRequest {
    Name: string;
    Panel: string;
    Loop: string;
    Address: string;
    Source: string;
    PanelType: string;
    Class: string;
}

interface IGetMatrixResponse {
    Name: string;
    Panel: string;
    Loop: string;
    Address: string;
    Source: string;
    PanelType: string;
    Class: string;
    Count: number;
    Result: string;
    Devices: IDeviceMatrix[];
    Zones: IZoneMatrix[];
}

interface ISetOneMatrixRequest {
    Loop: number;
    Address: number;
    Class: string;
    Count: number;
    ZoneConditions: string;
    Conditions: string;
    Devices: IDeviceMatrix[];
    Zones: IZoneMatrix[];
}

interface ISetMatrixesRequest {
    Name: string;
    Panel: string;
    Source: string;
    Password: string;
    PanelVersion: number;
    Type: string;
    Count: number;
    Matrixes: ISetOneMatrixRequest[];
}

interface ISetMatrixesResponse {
    Name: string;
    Panel: string;
    Source: string;
    Type: string;
    Count: number;
    Result: string;
}

export {
    IListProjectsRequest,
    IListProjectsResponse,
    IListProjectFilesRequest,
    IListProjectFilesResponse,
    ISelectProjectFileRequest,
    ISelectProjectFileResponse,
    ICreateNewProjectRequest,
    ICreateNewProjectResponse,
    ISetDevicesRequest,
    ISetDevicesResponse,
    IGetMatrixRequest,
    IGetMatrixResponse,
    ISetMatrixesRequest,
    ISetMatrixesResponse,
}