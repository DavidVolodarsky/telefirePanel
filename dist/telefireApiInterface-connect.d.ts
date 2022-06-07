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
export { ILoginRequest, ILoginResponse, ISetCommunicationReq, ISetCommunicationRes, IConnectPanelReq, IConnectPanelRes };
