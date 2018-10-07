import * as Router from 'koa-router';
import {createNewArtifact, findAllArtifacts} from './handler';

const router = new Router();

router.post('/', async (ctx) => {
    const artifact = ctx.request.body;
    console.log('Body of the request = ', artifact);
    const createdArtifact = await createNewArtifact(artifact);
    ctx.response.body = createdArtifact;
});

router.get('/', async (ctx) => {
    const allArtifacts = await findAllArtifacts();
    ctx.response.body = allArtifacts;
});

export const artifactRoutes = router.routes();