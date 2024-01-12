export const environment = {
  production: false,
  apiUrl: 'http://localhost/api',
  auth: {
    clientID: import.meta.env.NG_APP_AUTH0_CLIENTID,
    domain: import.meta.env.NG_APP_AUTH0_DOMAIN,
    audience: import.meta.env.NG_APP_AUTH0_IDENTIFIER,
    auth0RedirectUri: 'http://localhost/callback', // URL to return after auth0 login
    auth0ReturnTo: 'http://localhost', // URL to return to after auth0 logout
    scope: 'openid profile'
  }
}
