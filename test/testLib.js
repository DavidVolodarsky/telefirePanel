console.log('testLib run:');

const telefireLib = require('../dist/telefireLibDll');
const {getPCCodesMock,setConfigurationMock,setCommunicationMock ,createNewProjectMock} = require("./mock");

const logMethodResponse = (method, object) => {
    console.log(`_____________________________________${method}_______________________________________________\n`);
    try {
        console.log(telefireLib[method](JSON.stringify(object)));
    } catch (e) {
        console.log('error:', e)
    }
}

logMethodResponse(
    'getPcCodes',
    {
        Name :'GetPCCodes',
        Directory:undefined,
        ProjectName:undefined,
        FileName:undefined,
        Panel :undefined,
        Type :undefined,
        Password :undefined,
        PanelVersion :undefined,
    }
);

logMethodResponse(
    'Login',
    {
        Name: 'Login',
        OldPcID: '',
        NewPcID: '',
        CreateDirectoris: true,

    }
);

logMethodResponse(
    'SetCommunication',
    {type: "USB",
        name: "SetCommunicationChannel",
        baud: 0,
        port: undefined,
        vid: 8137,
        pid: 33320,
        ip: undefined,
        tcPort:undefined}
);

logMethodResponse(
    'ConnectToPanel',
    {
        Name: 'ConnectToPanel',
        Panel: 'Local',
        OwnerShip: 'Telefire',
    }
);
//
// logMethodResponse(
//     'listProjects',
//     {
//         Name: 'ListProjects',
//         Dir: 'C://projects//test//telefireRar',
//     }
// );
//
// logMethodResponse(
//     'listProjectFiles',
//     {
//         Name: 'ListProjectFiles',
//         Project: 'C:\\TFclient\\projects\\BASIC',
//     }
// );
//
// logMethodResponse(
//     'selectProjectFile',
//     {
//         Name: 'SelectProjectFile',
//         filename: 'C:\\TFclient\\projects\\BASIC\\Base.nanl',
//     }
// );
//
// logMethodResponse(
//     'getConfiguration',
//     {
//         Name: 'GetConfiguration',
//         Panel: 'Local',
//         Source: 'File',
//         Type: 'Adr7000',
//     }
// );
// //
// logMethodResponse(
//     'setConfiguration',
//     {...setConfigurationMock}
// );
//
// logMethodResponse(
//     'createNewProject',
//     {...createNewProjectMock}
// );