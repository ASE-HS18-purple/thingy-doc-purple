import * as Router from 'koa-router';
import {artifactRoutes} from '../artifact';

const router: any = new Router();

router.use('/artifacts', artifactRoutes);

export const routes = router.routes();

