import * as Router from 'koa-router';
import {userRouter} from '../user';
import {authenticationRouter} from '../authentication';
const router: any = new Router();

router.use('/users', userRouter);
router.use('', authenticationRouter);

export const routes = router.routes();
