import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    deleteTimeline(record) {
      record.destroyRecord();
    }
  }
});
