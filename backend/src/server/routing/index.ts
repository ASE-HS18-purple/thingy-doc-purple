import {authenticationRouter} from '../authentication';
import * as Router from 'koa-router';
import {userRouter} from '../user';
import {mqttConnection} from '../mqtt-broker-connection';

const router: any = new Router();

router.use('/users', userRouter);
router.use('', authenticationRouter);
router.use('/mqtt', mqttConnection);

export const routes = router.routes();
