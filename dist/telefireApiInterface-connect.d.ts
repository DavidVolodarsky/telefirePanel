interface IGetPCCodesReq {
    Name: string;
    Directory: string;
    ProjectName: string;
    FileName: string;
    Panel: string;
    Type: string;
    Password: string;
    PanelVersion: string;
}
interface IGetPCCodesRes {
    Name: string;
    OldPCId: string;
    NewPCId: string;
}
interface ILoginRequest {
    Name: string;
    CreateDirections: boolean;
    OldPcID?: string;
    NewPcID?: string;
}
interface ILoginResponse {
    Name: string;
    ClientNo: string;
    Result: string;
}
interface ISetCommunicationReq {
    Name: string;
    Type: string;
    Baud: number;
    Port: string;
    Vid: number;
    Pid: number;
    Ip: string;
    TcPort: number;
}
interface ISetCommunicationRes {
    Name: string;
    Type: string;
    Result: string;
}
interface IConnectPanelReq {
    Name: string;
    Panel: string;
    OwnerShip: string;
}
interface IConnectPanelRes {
    Name: string;
    ReqPanel: string;
    result: string;
    Panel: number;
    type: string;
    version: string;
    processor: string;
    serial: string;
    date: string;
    ownership: string;
}
export { IGetPCCodesReq, IGetPCCodesRes, ILoginRequest, ILoginResponse, ISetCommunicationReq, ISetCommunicationRes, IConnectPanelReq, IConnectPanelRes };
