import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({

  model() {
    return RSVP.hash({
      timelines: this.get('store').findAll('timeline'),
      entry: this.get('store').createRecord('timeline-entry', {value: 3})
    });
  },

  setupController(controller, model) {
    this._super(controller, model);

    controller.set('selectedTimelineId', null);
  }
});
