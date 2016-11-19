import ENV from '../config/environment';

import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({

  namespace: 'v1',
  host: ENV.host
});
