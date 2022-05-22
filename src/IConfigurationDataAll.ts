//Interface for ALL

//----------------- partnres -------------------
interface IConfigurationDataPartners7000 {
    panel:boolean,
    evacuation:boolean,
    silence:boolean,
    reset:boolean
}

//----------- rms ----------------
interface IConfigurationDataRM7000 {
    enable:boolean,
    description:string
}

//----------- Nacs ------------------------
interface IConfigurationDataNac7000 {
    silence:boolean,
    type:string,
    alarm:string
}

//---------------- loops ----------------------
interface IConfigurationDataLoops7000 {
    loop:string
}

// --------------- com1,com2,com5 -----------------------
interface IConfigurationDataCom7000 {
    type:string,
    control:string
}

//------------------- relays -------------------------
interface IConfigurationDataRealy7000 {
    type:string
}


//---------------- dialer1,dialer2 -----------------------
interface IConfigurationDataDialer7000 {
    type:string
}

//------------------- groundfault ------------------------
interface IConfigurationDataGNF7000{
    type:string,
    valid:string
}

//------------------ smockcontrol ------------------------
interface IConfigurationDataSCM7000{
    enable:boolean,
    dayofweek:string,
    hour:string
}

//------------ pasystem ---------------------
interface IConfigurationDataPA7000{
    enable:boolean,
    active:boolean,
    microphone:boolean,
    music:boolean,
    dealy:string
}


//---- MAIN Interface for IConfigurationData7000 -----
interface IConfigurationData7000 {
    partnres:IConfigurationDataPartners7000[],
    rms:IConfigurationDataRM7000[],
    Nacs:IConfigurationDataNac7000[],
    loops:IConfigurationDataLoops7000[],
    com1:IConfigurationDataCom7000,
    com2:IConfigurationDataCom7000,
    com5:IConfigurationDataCom7000,
    relays:IConfigurationDataRealy7000[],
    dialer1:IConfigurationDataDialer7000,
    dialer2:IConfigurationDataDialer7000,
    groundfault:IConfigurationDataGNF7000,
    smockcontrol:IConfigurationDataSCM7000,
    description:string,
    rmcontrol:string,
    language:string,
    outputprotocol:string,
    usb:string,
    com3:string,
    com4:string,
    screenmessage:string,
    expandcard:boolean,
    connect3000:boolean,
    firstfaultdelay:string,
    preventsilencedelay:string,
    buzzerdelay:string,
    lon:boolean,
    option1:boolean,
    option2:boolean
}

//---- MAIN Interface for IConfigurationDataSaver -----
interface IConfigurationDataSaver{
    rms:IConfigurationDataRM7000[],
    Nacs:IConfigurationDataNac7000[],
    loops:IConfigurationDataLoops7000[],
    com1:IConfigurationDataCom7000,
    com2:IConfigurationDataCom7000,
    com5:IConfigurationDataCom7000,
    relays:IConfigurationDataRealy7000[],
    dialer1:IConfigurationDataDialer7000,
    dialer2:IConfigurationDataDialer7000,
    groundfault:IConfigurationDataGNF7000,
    description:string,
    rmcontrol:string,
    language:string,
    outputprotocol:string,
    usb:string,
    com3:string,
    com4:string,
    screenmessage:string,
    firstfaultdelay:string,
    preventsilencedelay:string,
    buzzerdelay:string,
}

//------ MAIN Interface for IConfigurationDataGuard ------
interface IConfigurationDataGuard{
    rms:IConfigurationDataRM7000[],
    Nac1:IConfigurationDataNac7000,
    com1:IConfigurationDataCom7000,
    com2:IConfigurationDataCom7000,
    com5:IConfigurationDataCom7000,
    relays:IConfigurationDataRealy7000[],
    dialer1:IConfigurationDataDialer7000,
    dialer2:IConfigurationDataDialer7000,
    groundfault:IConfigurationDataGNF7000,
    description:string,
    rmcontrol:string,
    language:string,
    outputprotocol:string,
    usb:string,
    com3:string,
    com4:string,
    screenmessage:string,
    firstfaultdelay:string,
    preventsilencedelay:string,
    buzzerdelay:string,
}

//------ MAIN Interface for IConfigurationDataNewGuard ------
interface IConfigurationDataNewGuard{
    rms:IConfigurationDataRM7000[],
    Nac1:IConfigurationDataNac7000,
    com1:IConfigurationDataCom7000,
    com2:IConfigurationDataCom7000,
    com5:IConfigurationDataCom7000,
    relays:IConfigurationDataRealy7000[],
    dialer1:IConfigurationDataDialer7000,
    dialer2:IConfigurationDataDialer7000,
    groundfault:IConfigurationDataGNF7000,
    pasystem:IConfigurationDataPA7000,
    description:string,
    rmcontrol:string,
    language:string,
    outputprotocol:string,
    usb:string,
    com3:string,
    com4:string,
    screenmessage:string,
    firstfaultdelay:string,
    preventsilencedelay:string,
    buzzerdelay:string,
}

//------- MAIN Interface for IConfigurationData3000 ---------
interface IConfigurationData3000{
    partnres:IConfigurationDataPartners7000[],
    rms:IConfigurationDataRM7000[],
    loops:IConfigurationDataLoops7000[],
    language:string,
    firstfaultdelay:string
}

//-------- SET CONFIGURATION REQUEST ------------
interface ISetConfigurationReq{
    partnres:IConfigurationDataPartners7000[],
    rms:IConfigurationDataRM7000[],
    Nacs:IConfigurationDataNac7000[],
    loops:IConfigurationDataLoops7000[],
    com1:IConfigurationDataCom7000,
    com2:IConfigurationDataCom7000,
    com5:IConfigurationDataCom7000,
    relays:IConfigurationDataRealy7000[],
    dialer1:IConfigurationDataDialer7000,
    dialer2:IConfigurationDataDialer7000,
    groundfault:IConfigurationDataGNF7000,
    smockcontrol:IConfigurationDataSCM7000,
    pasystem:IConfigurationDataPA7000,
    Name:string,
    panel:string,
    source:string,
    type:string,
    password:string,
    panelno: number,
    description:string,
    rmcontrol:string,
    language:string,
    outputprotocol:string,
    usb:string,
    com3:string,
    com4:string,
    screenmessage:string,
    expandcard:boolean,
    connect3000:boolean,
    firstfaultdelay:string,
    preventsilencedelay:string,
    buzzerdelay:string,
    lon:boolean,
    option1:boolean,
    option2:boolean
}

export {IConfigurationData7000,IConfigurationDataSaver,IConfigurationDataGuard,IConfigurationDataNewGuard,IConfigurationData3000,ISetConfigurationReq}