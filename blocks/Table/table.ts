interface TableRow {
    id: string;
    th: string;
    td: string;
}

export interface Table {
    id: string;
    type: string;
    heading_width: number;
    fields: TableRow[];
}
