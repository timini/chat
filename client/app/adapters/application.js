import DS from 'ember-data';
import Ember from 'ember';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

const name = 'csrftoken';
let matches =  document.cookie.match(new RegExp(`${name}=([^;]+)`)) || [];
let csrf_token = matches[1];

export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
  authorizer: 'authorizer:oauth2',
  headers: {
    'X-CSRFToken': csrf_token
  }
});
