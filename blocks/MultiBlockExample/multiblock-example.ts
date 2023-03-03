interface MultiBlockContainer {
    id: string;
    blocks: object[];
}

export interface MultiBlockExample {
    id: string;
    type: string;
    containers: MultiBlockContainer[];
}
