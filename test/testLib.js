console.log('testLib run:');

const telefireLib = require('../dist/telefireLibDll');
const {setConfigurationMock, createNewProjectMock} = require("./mock");

const logMethodResponse = (method, object) => {
    console.log(`_____________________________________${method}_______________________________________________\n`);
    try {
        console.log(telefireLib[method](JSON.stringify(object)));
    } catch (e) {
        console.log('error:', e)
    }
}

// logMethodResponse(
//     'Login',
//     {
//         Name: 'Login',
//         OldPcID: 1122492734,
//         NewPcID: '0025_38BA_61B0_7D83',
//         CreateDirectoris: false,
//
//     }
// );
//
// logMethodResponse(
//     'SetCommunication',
//     {
//         Name: 'ListProjects',
//         Dir: 'C:\\projects',
//     }
// );
//
// logMethodResponse(
//     'ConnectToPanel',
//     {
//         Name: 'ConnectToPanel',
//         Panel: 'Local',
//         OwnerShip: 0,
//     }
// );
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
//
// logMethodResponse(
//     'setConfiguration',
//     {...setConfigurationMock}
// );
//
// logMethodResponse(
//     'createNewProject',
//     {...createNewProjectMock}
// );