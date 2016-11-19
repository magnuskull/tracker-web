import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({

  namespace: 'v1',
  host: 'https://immense-escarpment-95738.herokuapp.com'

});
