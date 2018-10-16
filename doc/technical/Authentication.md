## Authentication
**Overview**

Authentication of users is done based on principles of oauth 2.0 protocol. The server 
exposes it's protected data only to those clients who provide a valid access token - in 
our case the access token is JWT - whereas the clients get a token from server once 
they provide client credentials (email or username and password). 

Once the client has the token every subsequent request is authenticated based on this token. 
The token should be part of the request as a header (authorization header).

Currently our authentication mechanism is configured in a way that the token is valid 
for two days. After two days, the token expires and every attempt to 
authenticate via this token will result in a response with status code 401. 

**NOTE**: The above configurations might be subject to change in the future and are not yet final i.e. how long 
should the token be valid? Should the client request a refresh token maybe our do we 
want to logout immediately as the token is expired? 

**Technical details**

The clients can issue a token in the following endpoint: **/authenticate** and should 
provide in the body of the request the following data: 
 ```javascript
{
    "usernameOrEmail":"example-username",
    "password":"example-password"
}
```
The API will validate the data against the database and will sign the user payload 
(name, username, email) using our secret key with SHA256 algorithm - which is the
default hash algorithm of the library that we use (jsonwebtoken -> [jtw.io](https://jwt.io)) and produces the token which will be returned to the client
along with some basic info about the user like: name, username, email. 
Please review the router that implements the access token generation -> [Router](../../backend/src/server/authentication/router.ts)


Another important part of this topic is authenticating the user when hitting our protected APIs. 
This is handled by a middleware implemented by us and which stands pretty high in the stack of the middlewares used by our app 
and so the authentication is done as soon as the request arrives in server.

This middleware checks the request and searches for the token in the authorization header. Once the token is found, client library (jsonwebtoken) will verify the token. 
Once the token is verified it is then decoded and the user payload is returned which in turn is used to validate the data against database. 
If the validation passes then the request is modified and user payload is attached in **ctx.state.user** and in this way
we are aware which authenticated user is performing the request and we can access user data performing the request.
The middleware: [auth-security.ts](../../backend/src/server/authentication/auth-security.ts)