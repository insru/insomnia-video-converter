import {ServerOptions} from 'ws';

export interface IAppConfig {
    serviceName: string;
    wsConfig: ServerOptions;
}
