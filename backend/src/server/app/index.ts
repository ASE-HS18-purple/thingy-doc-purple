import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';

import {routes} from '../routing';
import {readConfigFromFile} from '../util';

import {connect as connectToMongoDb} from '../database';

const start = async () => {
    const port = readConfigFromFile('SERVER_PORT', '../server-configs');
    console.log('Starting the app...');
    const app = new Koa();
    app.use(bodyParser());
    app.use(routes);
    await app.listen(port);
    console.log(`App is up and running and listening to port: ${port}`);
    console.log('Initiating database connection');
    connectToMongoDb();
}

export {start};