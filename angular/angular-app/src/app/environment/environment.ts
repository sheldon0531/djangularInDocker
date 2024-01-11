export const environment = {
  production: false,
  auth: {
    clientID: import.meta.env.NG_APP_AUTH0_CLIENTID,
    domain: import.meta.env.NG_APP_AUTH0_DOMAIN,
    audience: import.meta.env.NG_APP_AUTH0_IDENTIFIER,
    auth0RedirectUri: 'http://localhost:8080/callback', // URL to return after auth0 login
    auth0ReturnTo: 'http://localhost:8080', // URL to return to after auth0 logout
    scope: 'openid profile'
  }
}
