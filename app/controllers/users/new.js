import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveUser() {
      this.get('model').save().then(() => {
        this.transitionToRoute('users.index');
      });
    },

    cancel() {
      this.transitionToRoute('users.index');
    }
  }
});
