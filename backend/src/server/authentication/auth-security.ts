import * as jwt from 'jsonwebtoken';
import {readConfigFromFile} from '../util';

/**
 * Middleware to secure every request and to verify that the token is as expected.
 * @param ctx
 * @param next
 */
const enable = async (ctx: any, next: any) => {
    const publicApis = readConfigFromFile('PUBLIC_APIS', '../server-configs.json') as string[];
    const originalURI = ctx.originalUrl;
    if (publicApis.includes(originalURI)) {
        await next();
    } else {
        const token = extractToken(ctx);
        if (!token) {
            ctx.throw('Not authorized!', 401);
        }
        const secretKey = readConfigFromFile('SECRET_KEY', '../auth-configs.json');
        const user = await jwt.verify(token, secretKey);
        console.log('Decoded token = ', user);
        ctx.user = user;
        await next();
    }
};

function extractToken(ctx: any): string {
    const header = ctx.header.authorization;
    const token = header ? header.split(' ')[1] : null;
    return token;
}

export {enable as enableSecurity} ;
