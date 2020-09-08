export const server =
  process.env.REACT_APP_ENV === 'production'
    ? 'https://qandajulianbackend.azurewebsites.net'
    : process.env.REACT_APP_ENV === 'staging'
    ? 'https://qandajulianbackendstage.azurewebsites.net'
    : 'https://localhost:44359';

export const webAPIUrl = `${server}/api`;

export const authSettings = {
  domain: 'qandajulian.us.auth0.com',
  client_id: 'Xlr4pu4MWO92XhoKUwr97MB7rJ6dZObD',
  redirect_uri: window.location.origin + '/signin-callback',
  scope: 'openid profile QandAAPI email',
  audience: 'qandajulian',
};
