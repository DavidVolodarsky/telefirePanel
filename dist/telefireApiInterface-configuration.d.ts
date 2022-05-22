import { IConfigurationData7000, IConfigurationData3000 } from "./IConfigurationDataAll";
import { IConfigurationDataSaver, IConfigurationDataGuard, IConfigurationDataNewGuard } from "./IConfigurationDataAll";
import { ISetConfigurationReq } from "./IConfigurationDataAll";
interface IGetConfigurationReq {
    Name: string;
    panel: string;
    source: string;
    type: string;
}
interface IGetConfigurationRes {
    Name: string;
    panel: string;
    source: string;
    type: string;
    Result: string;
    data7000: IConfigurationData7000;
    datasaver: IConfigurationDataSaver;
    dataguard: IConfigurationDataGuard;
    datanewguard: IConfigurationDataNewGuard;
    data3000: IConfigurationData3000;
}
interface ISetConfigurationRes {
    Name: string;
    panel: string;
    source: string;
    type: string;
    Result: string;
}
export { IGetConfigurationReq, IGetConfigurationRes, ISetConfigurationReq, ISetConfigurationRes };
