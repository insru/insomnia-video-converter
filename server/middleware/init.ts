import {defineEventHandler} from 'h3';
import {WS} from '~/lib/connectors/WS';
import {Mongo} from '~/lib/connectors/Mongo';

let once = true;

export default defineEventHandler(() => {
    if (once) {
        once = false;
        WS.init();
        Mongo.connect();
    }
});
