import {logger} from '../logger/logger';
import pkg from 'mongoose';
import {AppConfig} from '~/lib/AppConfig/AppConfig';

const {connect, connection} = pkg;

const address: string = `mongodb://localhost:27017/${AppConfig.serviceName}`;

export class DB {
    connect() {
        connect(address)
            .then(() => {
                logger.info(`mongodb connected`);
                connection.on('error', err => logger.error(err));
            })
            .catch(e => {
                logger.error(`db connection failed: ${e}`);
                logger.fatal(`process terminated!`);
                process.exit(1);
            });
    }
}

export const Mongo = new DB;
