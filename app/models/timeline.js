import DS from 'ember-data';

export default DS.Model.extend({

  name: DS.attr(),
  question: DS.attr(),
  user: DS.belongsTo('user'),
  timelineEntries: DS.hasMany('timeline-entry')

});
