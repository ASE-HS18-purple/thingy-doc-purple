import * as Router from 'koa-router';
import {userRouter} from '../user';

const router: any = new Router();

router.use('/users', userRouter);

export const routes = router.routes();
