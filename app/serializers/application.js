import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  serializeAttribute(snapshot, json, key) {
    const excluded = ['createdAt'];

    if (!excluded.includes(key)) {
      this._super(...arguments);
    }
  }
});
