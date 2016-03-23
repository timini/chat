import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    postComment() {
      let { text }= this.getProperties('comment');
      let data = { text };
      let comment = this.store.createRecord('comment', data);
      comment.save();
    }
  }
});
