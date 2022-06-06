interface IProject {
    "ProjectName": string,
    "Type": string,
    "versionscount": number,
    "createdate": string,
    "createby": string,
    "panels": number
}

interface IListProjectsRequest {
    "Name": string,
    "Dir": string
}

interface IListProjectsResponse {
    "Projects": IProject[]
}

export { IListProjectsRequest, IListProjectsResponse }