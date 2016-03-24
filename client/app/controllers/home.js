import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  actions: {
    postComment() {
      let data = {
        text: this.get('comment'),
        user: this.get('session.data.user')
      };
      let comment = this.store.createRecord('comment', data);
      comment.save();
      this.set('comment', null)
    }
  }
});
