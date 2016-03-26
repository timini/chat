import OAuth2PasswordGrant from 'ember-simple-auth/authenticators/oauth2-password-grant';

export default OAuth2PasswordGrant.extend({
  serverTokenEndpoint: '/oauth/token/',
  clientId: 'zRDieLQI62Ts0j4BvQPIiS98DGCyD6Iis2Me0ToY',
});
