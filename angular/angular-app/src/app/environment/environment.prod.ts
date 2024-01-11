export const environment = {
  production: true,
  apiUrl: 'http://sheldon0531.asuscomm.com/api',
  auth: {
    clientID: import.meta.env.NG_APP_AUTH0_CLIENTID,
    domain: import.meta.env.NG_APP_AUTH0_DOMAIN,
    audience: import.meta.env.NG_APP_AUTH0_IDENTIFIER,
    auth0RedirectUri: 'http://sheldon0531.asuscomm.com:8080/callback', // URL to return after auth0 login
    auth0ReturnTo: 'http://sheldon0531.asuscomm.com:8080', // URL to return to after auth0 logout
    scope: 'openid profile'
  }
}
