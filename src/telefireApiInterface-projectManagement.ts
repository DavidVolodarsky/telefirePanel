interface IProject {
    ProjectName: string,
    Type: string,
    versionscount: number,
    createdate: string,
    createby: string,
    panels: number
}

interface IListProjectsRequest {
    Name: string,
    Dir: string
}

interface IListProjectsResponse {
    Projects: IProject[],
    Name: string,
    Dir: string,
    Count: string,
}

interface IListProjectFilesRequest {
    Name: string,
    Project: string,
}

interface IProjectFile {
    FileName: string,
}

interface IListProjectFilesResponse {
    Files: IProjectFile[],
    Name: string,
    Project: string,
    Count: number,
}

interface ISelectProjectFileRequest {
    Name: string,
    filename: string,
}

interface ISelectProjectFileResponse {
    Name: string,
    filename: string,
    Result: string,
}



export {IListProjectsRequest, IListProjectsResponse, IListProjectFilesRequest, IListProjectFilesResponse, ISelectProjectFileRequest, ISelectProjectFileResponse}