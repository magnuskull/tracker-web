import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let timeline = this.get('store').createRecord('timeline');

    this.get('store').findAll('user').then((users) => {
      timeline.set('user', users.get('firstObject'));
    });

    return timeline;
  }
});
