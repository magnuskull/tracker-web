import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('timelines', function() {
    this.route('new');
    this.route('show', { path: ':timeline_id' }, function() {
      this.route('entries', { resetNamespace: true }, function() {});
    });
  });
  this.route('users', function() {
    this.route('new');
    this.route('show', { path: ':user_id' });
  });
  this.route('track');
});

export default Router;
