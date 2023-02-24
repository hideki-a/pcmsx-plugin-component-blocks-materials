interface DlFIeld {
    id: string;
    key: string;
    value: string;
}

export interface Dl {
    id: string;
    type: string;
    fields: DlFIeld[];
    useMultiBlock: boolean;
}
