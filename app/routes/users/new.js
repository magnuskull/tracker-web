import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let user = this.get('store').createRecord('user');
    return user;
  },

  resetController(controller, isExiting) {
    if(isExiting) {
      let model = controller.get('model');
      if (model.get('isNew')) {
        model.destroyRecord();
      }
    }
  }
});
