import {IAppConfig} from '~/lib/types/interfaces/IAppConfig';
import {defineStore} from '#imports';

export const useStore = defineStore('store', {
    state: () => ({
        config: {} as IAppConfig
    }),
    actions: {
        setConfig(config: IAppConfig) {
            this.config = config;
        }
    }
});
