import * as Router from 'koa-router';
import {UserHandler} from './handler';

const router = new Router();

router.get('/username/:username', async (ctx) => {
    const userHandler = new UserHandler();
    const userName = ctx.params.username;
    const user = await userHandler.searchUserByUsername(userName);
    ctx.response.status = user ? 302 : 404;
    ctx.body = user;
});

router.get('/email/:email', async (ctx) => {
    const userHandler = new UserHandler();
    const email = ctx.params.email;
    const user = await userHandler.findUserByEmail(email);
    ctx.response.status = user ? 302 : 404;
    ctx.body = user;
});

router.post('/', async (ctx) => {
    const user = ctx.request.body;
    const userHandler = new UserHandler();
    const createdUser = await userHandler.createNewUserOnSignUp(user);
    ctx.response.body = createdUser;
    ctx.response.status = createdUser ? 201 : 400;
});

router.get('/', async (ctx) => {
    const userHandler = new UserHandler();
    const allUsers = await userHandler.findAllUsers();
    ctx.response.body = allUsers;
});

export const userRouter = router.routes();
