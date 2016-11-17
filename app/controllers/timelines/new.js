import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveTimeline() {
      console.log('save');
      this.get('model').save().then(() => {
        this.transitionToRoute('timelines.index');
      });
    },

    cancel() {
      console.log('cancel');
    }
  }
});
