export interface IMetric {
    name: string;
    value: number;
    help: string;
    type?: string;
    labels: {
        [key: string]: string;
    };
}
