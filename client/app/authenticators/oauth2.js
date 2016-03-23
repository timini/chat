import OAuth2PasswordGrant from 'ember-simple-auth/authenticators/oauth2-password-grant';

export default OAuth2PasswordGrant.extend({
  serverTokenEndpoint: '/oauth/token/',
  clientId: 'nzN8xQBxEwqjHtR7Kq6220mvIVY6QHRGxUNY8UWa',
});
