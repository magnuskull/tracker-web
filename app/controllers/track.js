import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveEntry() {
      this.get('model.entry').save().then(() => {
        this.transitionToRoute('application');
      });
    },

    selectTimeline() {
      let entry = this.get('model.entry');
      let selectedTimeline = this.get('store').peekRecord('timeline', this.get('selectedTimelineId'));

      entry.set('timeline', selectedTimeline);
    }
  }
});
