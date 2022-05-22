interface IConfigurationDataPartners7000 {
    panel: boolean;
    evacuation: boolean;
    silence: boolean;
    reset: boolean;
}
interface IConfigurationDataRM7000 {
    enable: boolean;
    description: string;
}
interface IConfigurationDataNac7000 {
    silence: boolean;
    type: string;
    alarm: string;
}
interface IConfigurationDataLoops7000 {
    loop: string;
}
interface IConfigurationDataCom7000 {
    type: string;
    control: string;
}
interface IConfigurationDataRealy7000 {
    type: string;
}
interface IConfigurationDataDialer7000 {
    type: string;
}
interface IConfigurationDataGNF7000 {
    type: string;
    valid: string;
}
interface IConfigurationDataSCM7000 {
    enable: boolean;
    dayofweek: string;
    hour: string;
}
interface IConfigurationDataPA7000 {
    enable: boolean;
    active: boolean;
    microphone: boolean;
    music: boolean;
    dealy: string;
}
interface IConfigurationData7000 {
    partnres: IConfigurationDataPartners7000[];
    rms: IConfigurationDataRM7000[];
    Nacs: IConfigurationDataNac7000[];
    loops: IConfigurationDataLoops7000[];
    com1: IConfigurationDataCom7000;
    com2: IConfigurationDataCom7000;
    com5: IConfigurationDataCom7000;
    relays: IConfigurationDataRealy7000[];
    dialer1: IConfigurationDataDialer7000;
    dialer2: IConfigurationDataDialer7000;
    groundfault: IConfigurationDataGNF7000;
    smockcontrol: IConfigurationDataSCM7000;
    description: string;
    rmcontrol: string;
    language: string;
    outputprotocol: string;
    usb: string;
    com3: string;
    com4: string;
    screenmessage: string;
    expandcard: boolean;
    connect3000: boolean;
    firstfaultdelay: string;
    preventsilencedelay: string;
    buzzerdelay: string;
    lon: boolean;
    option1: boolean;
    option2: boolean;
}
interface IConfigurationDataSaver {
    rms: IConfigurationDataRM7000[];
    Nacs: IConfigurationDataNac7000[];
    loops: IConfigurationDataLoops7000[];
    com1: IConfigurationDataCom7000;
    com2: IConfigurationDataCom7000;
    com5: IConfigurationDataCom7000;
    relays: IConfigurationDataRealy7000[];
    dialer1: IConfigurationDataDialer7000;
    dialer2: IConfigurationDataDialer7000;
    groundfault: IConfigurationDataGNF7000;
    description: string;
    rmcontrol: string;
    language: string;
    outputprotocol: string;
    usb: string;
    com3: string;
    com4: string;
    screenmessage: string;
    firstfaultdelay: string;
    preventsilencedelay: string;
    buzzerdelay: string;
}
interface IConfigurationDataGuard {
    rms: IConfigurationDataRM7000[];
    Nac1: IConfigurationDataNac7000;
    com1: IConfigurationDataCom7000;
    com2: IConfigurationDataCom7000;
    com5: IConfigurationDataCom7000;
    relays: IConfigurationDataRealy7000[];
    dialer1: IConfigurationDataDialer7000;
    dialer2: IConfigurationDataDialer7000;
    groundfault: IConfigurationDataGNF7000;
    description: string;
    rmcontrol: string;
    language: string;
    outputprotocol: string;
    usb: string;
    com3: string;
    com4: string;
    screenmessage: string;
    firstfaultdelay: string;
    preventsilencedelay: string;
    buzzerdelay: string;
}
interface IConfigurationDataNewGuard {
    rms: IConfigurationDataRM7000[];
    Nac1: IConfigurationDataNac7000;
    com1: IConfigurationDataCom7000;
    com2: IConfigurationDataCom7000;
    com5: IConfigurationDataCom7000;
    relays: IConfigurationDataRealy7000[];
    dialer1: IConfigurationDataDialer7000;
    dialer2: IConfigurationDataDialer7000;
    groundfault: IConfigurationDataGNF7000;
    pasystem: IConfigurationDataPA7000;
    description: string;
    rmcontrol: string;
    language: string;
    outputprotocol: string;
    usb: string;
    com3: string;
    com4: string;
    screenmessage: string;
    firstfaultdelay: string;
    preventsilencedelay: string;
    buzzerdelay: string;
}
interface IConfigurationData3000 {
    partnres: IConfigurationDataPartners7000[];
    rms: IConfigurationDataRM7000[];
    loops: IConfigurationDataLoops7000[];
    language: string;
    firstfaultdelay: string;
}
interface ISetConfigurationReq {
    partnres: IConfigurationDataPartners7000[];
    rms: IConfigurationDataRM7000[];
    Nacs: IConfigurationDataNac7000[];
    loops: IConfigurationDataLoops7000[];
    com1: IConfigurationDataCom7000;
    com2: IConfigurationDataCom7000;
    com5: IConfigurationDataCom7000;
    relays: IConfigurationDataRealy7000[];
    dialer1: IConfigurationDataDialer7000;
    dialer2: IConfigurationDataDialer7000;
    groundfault: IConfigurationDataGNF7000;
    smockcontrol: IConfigurationDataSCM7000;
    pasystem: IConfigurationDataPA7000;
    Name: string;
    panel: string;
    source: string;
    type: string;
    password: string;
    panelno: number;
    description: string;
    rmcontrol: string;
    language: string;
    outputprotocol: string;
    usb: string;
    com3: string;
    com4: string;
    screenmessage: string;
    expandcard: boolean;
    connect3000: boolean;
    firstfaultdelay: string;
    preventsilencedelay: string;
    buzzerdelay: string;
    lon: boolean;
    option1: boolean;
    option2: boolean;
}
export { IConfigurationData7000, IConfigurationDataSaver, IConfigurationDataGuard, IConfigurationDataNewGuard, IConfigurationData3000, ISetConfigurationReq };
