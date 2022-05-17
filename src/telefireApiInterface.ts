//interface for telefire APi
interface ILoginRequest {
    Name: string,
    OldPcID: string,
    NewPcID: string
}

interface ILoginResponse {
    Name:string,
    ClientNo:string,
    Result:string
}

interface ISetCommunicationRes {
    Name: string,
    Type: string,
    Result: string,
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

export {ILoginRequest,ILoginResponse,ISetCommunicationRes,IConnectPanelRes};