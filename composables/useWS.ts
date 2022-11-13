import {onMounted, onUnmounted} from 'vue';
import {useStore} from '~/stores/useStore';
import {logger} from '~/lib/logger/logger';

export const useWS = () => {
    const store = useStore();

    class WS {
        // @ts-ignore
        private socket: WebSocket;
        private readonly address: string;

        constructor(address: string) {
            this.address = address;
            this.openSocket();
        }

        openSocket() {
            logger.info(`${this.address} opening connection`);
            this.socket = new WebSocket(this.address);
            this.socket.addEventListener('message', event => {
                const data = JSON.parse(event.data);

                if (data.type === 'config') {
                    logger.info('got config from WS');
                    store.setConfig(data.data);
                }
                if (data.type === 'welcome') {
                    logger.info(`${this.address} opened`);
                }
            });

            this.socket.addEventListener('error', () => {
                this.socket.close(1000);
                this.openSocket();
            });
        }

        closeSocket() {
            logger.info(`${this.address} connection closed`);
            this.socket.close(1000);
        }
    }

    const ws = new WS('ws://localhost:8080');

    onMounted(() => ws.openSocket());
    onUnmounted(() => ws.closeSocket());
};
