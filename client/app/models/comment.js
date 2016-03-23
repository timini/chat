import DS from 'ember-data';

export default DS.Model.extend({
  text: DS.attr('string'),
  user: DS.belongsTo('user'),
  created_at: DS.attr('date'),
  updated_at: DS.attr('date'),
});
