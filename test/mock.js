exports.createNewProjectMock = {
    panels: {
        Panel1: "1",
        Panel2: "2"
    },
    Name: "CreateNewProject",
    dir: "C:\\TFclient\\projects",
    projectname: "test_new_progect_2",
    language: "English",
    count: 2,
    type: "Adr7000",
    user: "user1"
};

exports.setCommunicationUsbMock = {
    type: "USB",
    name: "SetCommunicationChannel",
    baud: 0,
    port: undefined,
    vid: 8137,
    pid: 33320,
    ip: undefined,
    tcPort: undefined
}

exports.getPCCodesMock = {
    Name: 'GetPCCodes',
    Directory: '',
    ProjectName: '',
    FileName: '',
    Panel: '',
    Type: '',
    Password: '',
    PanelVersion: '',
}


exports.setCommunicationTPCMock = {
    type: "USB",
    name: "SetCommunicationChannel",
    baud: 0,
    port: undefined,
    vid: 8137,
    pid: 33320,
    ip: undefined,
    tcPort: undefined
}

exports.getMatrixMock = {
    Name: "GetMatrix",
    Panel: "1",
    Loop: "1",
    Address: '001',
    Source: 'File',
    PanelType: "Adr7000",
    Class: "Device",
}

exports.setMatrixesMock = {
    Name: "SetMatrixes",
    Panel: "Local",
    Source: "File",
    Password: "",
    PanelVersion: 0.0,
    Type: "Adr7000",
    Count: 1,
    Matrixes: [
        {
            Loop: 1,
            Address: 1,
            Class: "Device",
            Count: 1,
            ZoneConditions: null,
            Conditions: null,
            Devices: [
                {
                    Loop: 1,
                    Address: 1,
                },
            ],
            Zones: null,
        }
    ]
}

exports.getDeviceMock = {
    Name: "GetDevice",
    Panel: "Local",
    Source: "File",
    Loop: "1",
    Address: "1",
    PanelType: "Adr7000 ",
    Type: "all panel",
}

exports.setConfigurationMock = {
    partnres: [
        {
            panel: false,
            evacuation: false,
            silence: false,
            reset: false
        },
        {
            panel: false,
            evacuation: false,
            silence: false,
            reset: false
        },
        {
            panel: false,
            evacuation: false,
            silence: false,
            reset: false
        },
        {
            panel: false,
            evacuation: false,
            silence: false,
            reset: false
        },
        {
            panel: false,
            evacuation: false,
            silence: false,
            reset: false
        },
        {
            panel: false,
            evacuation: false,
            silence: false,
            reset: false
        },
        {
            panel: false,
            evacuation: false,
            silence: false,
            reset: false
        },
        {
            panel: false,
            evacuation: false,
            silence: false,
            reset: false
        },
        {
            panel: false,
            evacuation: false,
            silence: false,
            reset: false
        },
        {
            panel: false,
            evacuation: false,
            silence: false,
            reset: false
        },
        {
            panel: false,
            evacuation: false,
            silence: false,
            reset: false
        },
        {
            panel: false,
            evacuation: false,
            silence: false,
            reset: false
        },
        {
            panel: false,
            evacuation: false,
            silence: false,
            reset: false
        },
        {
            panel: false,
            evacuation: false,
            silence: false,
            reset: false
        },
        {
            panel: false,
            evacuation: false,
            silence: false,
            reset: false
        },
        {
            panel: false,
            evacuation: false,
            silence: false,
            reset: false
        },
        {
            panel: false,
            evacuation: false,
            silence: false,
            reset: false
        },
        {
            panel: false,
            evacuation: false,
            silence: false,
            reset: false
        },
        {
            panel: false,
            evacuation: false,
            silence: false,
            reset: false
        },
        {
            panel: false,
            evacuation: false,
            silence: false,
            reset: false
        },
        {
            panel: false,
            evacuation: false,
            silence: false,
            reset: false
        },
        {
            panel: false,
            evacuation: false,
            silence: false,
            reset: false
        },
        {
            panel: false,
            evacuation: false,
            silence: false,
            reset: false
        },
        {
            panel: false,
            evacuation: false,
            silence: false,
            reset: false
        },
        {
            panel: false,
            evacuation: false,
            silence: false,
            reset: false
        },
        {
            panel: false,
            evacuation: false,
            silence: false,
            reset: false
        },
        {
            panel: false,
            evacuation: false,
            silence: false,
            reset: false
        },
        {
            panel: false,
            evacuation: false,
            silence: false,
            reset: false
        },
        {
            panel: false,
            evacuation: false,
            silence: false,
            reset: false
        },
        {
            panel: false,
            evacuation: false,
            silence: false,
            reset: false
        },
        {
            panel: false,
            evacuation: false,
            silence: false,
            reset: false
        },
        {
            panel: false,
            evacuation: false,
            silence: false,
            reset: false
        }
    ],
    rms: [
        {
            enable: false,
            description: "Rm Description 1"
        },
        {
            enable: false,
            description: "Rm Description 2"
        },
        {
            enable: false,
            description: "Rm Description 3"
        },
        {
            enable: false,
            description: "Rm Description 4"
        },
        {
            enable: false,
            description: "Rm Description 5"
        },
        {
            enable: false,
            description: "Rm Description 6"
        },
        {
            enable: false,
            description: "Rm Description 7"
        },
        {
            enable: false,
            description: "Rm Description 8"
        },
        {
            enable: false,
            description: "Rm Description 9"
        },
        {
            enable: false,
            description: "Rm Description 10"
        },
        {
            enable: false,
            description: "Rm Description 11"
        },
        {
            enable: false,
            description: "Rm Description 12"
        },
        {
            enable: false,
            description: "Rm Description 13"
        },
        {
            enable: false,
            description: "Rm Description 14"
        },
        {
            enable: false,
            description: "Rm Description 15"
        },
        {
            enable: false,
            description: "Rm Description 16"
        }
    ],
    Nacs: [
        {
            silence: false,
            type: "no protocol",
            alarm: "alarm 1"
        },
        {
            silence: false,
            type: "no protocol",
            alarm: "alarm 1"
        }
    ],
    loops: [
        {
            loop: "No"
        },
        {
            loop: "No"
        },
        {
            loop: "No"
        },
        {
            loop: "No"
        },
        {
            loop: "No"
        },
        {
            loop: "No"
        },
        {
            loop: "No"
        },
        {
            loop: "No"
        }
    ],
    com1: {
        type: "pc",
        control: "no control"
    },
    com2: {
        type: "pc",
        control: "no control"
    },
    com5: {
        type: "pc",
        control: "no control"
    },
    relays: [
        {
            type: "alarm"
        },
        {
            type: "alarm"
        },
        {
            type: "alarm"
        }
    ],
    dialer1: {
        type: "all partners",
        delay: "0 min",
        Class: null
    },
    dialer2: {
        type: "all partners",
        delay: "0 min",
        Class: "FBD"
    },
    groundfault: {
        type: "Low",
        valid: "yes"
    },
    smockcontrol: {
        enable: false,
        dayofweek: "sun",
        hour: "0 hour"
    },
    pasystem: null,
    Name: "SetConfiguration",
    panel: "Local",
    source: "File",
    type: "Adr7000",
    password: "",
    panelno: 1,
    description: "",
    rmcontrol: "B",
    language: "English",
    outputprotocol: "Gentex",
    usb: "no control",
    com3: "no control",
    com4: "no control",
    screenmessage: "Screen Message",
    expandcard: false,
    connect3000: false,
    firstfaultdelay: "0 sec",
    preventsilencedelay: "0 sec",
    buzzerdelay: "0 min",
    lon: false,
    option1: false,
    option2: false
};

