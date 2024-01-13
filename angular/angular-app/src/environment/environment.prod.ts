export const environment = {
  production: true,
  apiUrl: 'https://sheldon0531.asuscomm.com/api',
  auth: {
    clientID: import.meta.env.NG_APP_AUTH0_CLIENTID,
    domain: import.meta.env.NG_APP_AUTH0_DOMAIN,
    audience: import.meta.env.NG_APP_AUTH0_IDENTIFIER,
    auth0RedirectUri: 'https://sheldon0531.asuscomm.com/callback', // URL to return after auth0 login
    auth0ReturnTo: 'https://sheldon0531.asuscomm.com', // URL to return to after auth0 logout
    scope: 'openid profile'
  }
}
