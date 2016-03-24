import ESASession from "ember-simple-auth/services/session";

export default ESASession.extend({
  store: Ember.inject.service(),
  setCurrentUser: function() {
    if (this.get('isAuthenticated')) {
      Ember.$.ajax({
        url: "/users/current/",
        type: "GET"
      })
      .then(resp => {
        this.set('data.currentUserId', resp.data.id);
        let userId = this.get('data.currentUserId');
        this.get('store').findRecord('user', userId)
        .then(user => {
          this.set('data.user', user)
        })
      });
    }
  }.observes('isAuthenticated'),
});
