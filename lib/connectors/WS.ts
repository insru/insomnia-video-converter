import {ServerOptions, WebSocketServer} from 'ws';
import {logger} from '../logger/logger';
import {AppConfig} from '~/lib/AppConfig/AppConfig';

class WSServer {
    private server: WebSocketServer;

    constructor(options: ServerOptions) {
        logger.info(`init WS server on port: ${options.port}`);
        /** create ws server */
        this.server = new WebSocketServer(options);
        this.server.on('connection', (ws: WebSocket) =>
            ws.send(JSON.stringify({
                type: 'welcome'
            })));
    }

    public init() {
    }

    private broadcast(msg: string) {
        this.server.clients.forEach(client => client.send(msg));
    }
}

export const WS = new WSServer(AppConfig.wsConfig);
