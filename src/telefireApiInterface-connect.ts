//interface for telefire APi - CONNECT

//-----GetPCCodes-----
interface IGetPCCodesReq {
    Name :string,
    Directory:string|undefined,
    ProjectName:string|undefined,
    FileName:string|undefined,
    Panel :string|undefined,
    Type :string|undefined,
    Password :string|undefined,
    PanelVersion :string|undefined,
}

interface IGetPCCodesRes {
    Name: string,
    OldPCId : string,
    NewPCId : string,
}

//-----Login-------
interface ILoginRequest {
    Name: string,
    CreateDirections: boolean,
    OldPcID?: string,
    NewPcID?: string
}

interface ILoginResponse {
    Name:string,
    ClientNo:string,
    Result:string
}

//---------Set Communication------
interface ISetCommunicationReq{
    Name:string,
    Type:string,
    Baud:number,
    Port:string,
    Vid:number,
    Pid:number,
    Ip:string,
    TcPort:number
}

interface ISetCommunicationRes {
    Name: string,
    Type: string,
    Result: string,
}

//-------ConnectPanel-------
interface IConnectPanelReq{
    Name:string,
    Panel:string,
    OwnerShip:string
}

interface IConnectPanelRes{
    Name:string,
    ReqPanel:string,
    result:string,
    Panel:number,
    type:string,
    version:string,
    processor:string,
    serial:string,
    date:string,
    ownership:string
}

export {IGetPCCodesReq,IGetPCCodesRes,ILoginRequest,ILoginResponse,ISetCommunicationReq,ISetCommunicationRes,IConnectPanelReq,IConnectPanelRes};